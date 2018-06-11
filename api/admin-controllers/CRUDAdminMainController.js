const fs = require('fs');
const app = require('../../dist/app.js');
const { buildQuery } = require('../../app/helpers/query');
const crudConfig = require('../admin-config/crud');
const AuthService = require('../admin-services/AuthService');


const MODELS_FILTER = (m) => {
  return m.indexOf('crudgroup_') < 0
};

const getDefinitions = (models) => {
  return Object.keys(models)
    .filter(MODELS_FILTER)
    .reduce(function (result, k) {
      result[k] = models[k].attributes;
      return result;
    }, {});
};

const populate = async (resultPromise, modelName, sails) => {
  const definition = getDefinitions(sails.models)[modelName];
  const fieldsToPopulate = Object.keys(definition).filter(k => {
      return definition[k].model || definition[k].collection;
    }).map(k => k);
  let result = resultPromise;
  fieldsToPopulate.forEach(field => {
    result = result.populate(field);
  })
  return result;
};

const tokenAuthError = () => ({
  error: {
    message: `Error in jwt token`,
    fields: {
      'jwt-token': `Error in jwt token`,
    },
  },
});

const verifyToken = async (req, res) => {
  const tokenVerification = await AuthService.verifyToken(req.headers['jwt-token']);
  if (!tokenVerification.success) {
    res.status(403)
      .send(tokenAuthError());
  }
  return tokenVerification.success;
};


class Controller {
  constructor(sails) {
    this.sails = sails;
    this.index = this.index.bind(this);
    this.clientJS = this.clientJS.bind(this);
    this.modelCount = this.modelCount.bind(this);
    this.modelSearch = this.modelSearch.bind(this);
    this.modelCreate = this.modelCreate.bind(this);
    this.modelDelete = this.modelDelete.bind(this);
    this.modelUpdate = this.modelUpdate.bind(this);
    this.modelSearchAll = this.modelSearchAll.bind(this);
    this.countAll = this.countAll.bind(this);
  }

  index(req, res) {
    const config = Object.assign(
      {},
      this.sails.config.crudAdmin || {},
      crudConfig, 
    );
    const injection = `
      window.sailsModels = ${JSON.stringify(getDefinitions(this.sails.models))};
      window.crudAdminConfig = ${JSON.stringify(config)};
    `;
    res.send(app.renderPage(injection));
  }

  clientJS(req, res) {
    res.send(
      fs.readFileSync(__dirname + '/../../dist/client.js')
    );
  }

  async modelCount (req, res) {
    if (await verifyToken(req, res)) {
      const total = await this.sails.models[req.body.modelName].count({
        where: buildQuery(req.body.queryRules || [])
      });
      return res.json(total);
    } 
  }

  async modelCreate (req, res) {
    if (await verifyToken(req, res)) {
      const result = await this.sails.models[req.body.modelName]
        .create(req.body).fetch();
      return res.json(result);
    }
  }

  async modelUpdate (req, res) {
    if (await verifyToken(req, res)) {
      const result = await this.sails.models[req.body.modelName]
        .update({ id: req.body.id }, req.body).fetch();
      return res.json(result);
    }
  }

  async modelDelete (req, res) {
    if (await verifyToken(req, res)) {
      const result = await this.sails.models[req.body.modelName]
        .destroy({ id: req.params.id }).fetch();
      return res.json(result);
    }
  }

  async modelSearch(req, res) {
    if (await verifyToken(req, res)) {
      const resultPromise = this.sails.models[req.body.modelName].find({
        where: buildQuery(req.body.queryRules || []),
        skip: req.body.skip,
        limit: req.body.limit,
        sort: req.body.sort,
      });
      const result = await populate(
        resultPromise,
        req.body.modelName,
        this.sails,
      );
      return res.json(result);
    }
  }

  async modelSearchAll(req, res) {
    if (await verifyToken(req, res)) {
      const resultPromise = this.sails.models[req.query.modelName]
        .find({});
      const result = await populate(
        resultPromise,
        req.query.modelName,
        this.sails
      );
      return res.json(result);
    }
  }

  async countAll(req, res) {
    if (await verifyToken(req, res)) {
      const promises = Object.keys(this.sails.models).map(name => {
        return new Promise((resolve) => {
          this.sails.models[name].count({})
            .then(count => {
              resolve({ name, count });
            });
        });
      });

      const counts = await Promise.all(promises);
      const result = counts.reduce((acc, item) => {
        const x = acc;
        x[item.name] = item.count;
        return x;
      }, {});
      
      return res.json(result);
    }
  }
};


module.exports = Controller;