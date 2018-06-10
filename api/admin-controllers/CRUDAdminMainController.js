const fs = require('fs');
const app = require('../../dist/app.js');
const { buildQuery } = require('../../app/helpers/query');
const crudConfig = require('../admin-config/crud');

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

class Controller {
  constructor(sails) {
    this.sails = sails;
    this.index = this.index.bind(this);
    this.clientJS = this.clientJS.bind(this);
    this.modelCount = this.modelCount.bind(this);
    this.modelSearch = this.modelSearch.bind(this);
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
    const total = await this.sails.models[req.body.modelName].count({
      where: buildQuery(req.body.queryRules || [])
    });
    return res.json(total);
  }

  async modelSearch(req, res) {
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

  async modelSearchAll(req, res) {
    const resultPromise = this.sails.models[req.query.modelName]
      .find({});
    const result = await populate(
      resultPromise,
      req.query.modelName,
      this.sails
    );
    return res.json(result);
  }

  async countAll(req, res) {
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
};


module.exports = Controller;
