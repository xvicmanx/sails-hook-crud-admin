const fs = require('fs');
const SkipperDisk = require('skipper-disk');
const app = require('../../dist/app.js');
const { buildQuery } = require('../../app/helpers/query');
const crudConfig = require('../admin-config/crud');
const {
  verifyAccess,
  verifyToken,
  populate,
  getDefinitions,
  queryValue,
} = require('../helpers');


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
    this.uploadAsset = this.uploadAsset.bind(this);
    this.crudAsset = this.crudAsset.bind(this);
  }

  index(req, res) {
    const crudAdminConf = this.sails.config.crudAdmin || {};
    const config = {
      general: {
        labels: queryValue(
          crudAdminConf,
          'general.labels',
          {}
        ),
        buttons: queryValue(
          crudAdminConf,
          'general.buttons',
          {},
        ),
      },
      models: Object.assign(
        {},
        crudConfig.models,
        queryValue(crudAdminConf, 'models', {}),
      ),
    };
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

  async hasAccess(action, req, res) {
    const { modelName } = req.body || req.query;
    return await verifyAccess({
      action,
      resource: modelName,
    })(req, res);
  }

  async modelCount(req, res) {
    const { modelName, queryRules } = req.body;
    if (await this.hasAccess('read', req, res)) {
      const total = await this.sails.models[modelName].count({
        where: buildQuery(queryRules || [])
      });
      return res.json(total);
    }
  }

  async modelCreate(req, res) {
    const { modelName } = req.body;
    delete req.body.modelName;
    if (await this.hasAccess('create', req, res)) {
      const result = await this.sails.models[modelName]
        .create(req.body);
      return res.json(result);
    }
  }

  async modelUpdate(req, res) {
    const { modelName } = req.body;
    delete req.body.modelName;
    if (await this.hasAccess('update', req, res)) {
      const Model = this.sails.models[modelName];
      const result = await Model.update({ id: req.body.id }, req.body);
      return res.json(result);
    }
  }

  async modelDelete(req, res) {
    const { modelName } = req.body;
    if (await this.hasAccess('delete', req, res)) {
      const result = await this.sails.models[modelName]
        .destroy({ id: req.params.id });
      return res.json(result);
    }
  }

  async modelSearch(req, res) {
    const {
      queryRules,
      skip,
      modelName,
      limit,
      sort,
    } = req.body;
    if (await this.hasAccess('read', req, res)) {
      const resultPromise = this.sails.models[modelName].find({
        where: buildQuery(queryRules || []),
        skip,
        limit,
        sort,
      });
      const result = await populate(
        resultPromise,
        modelName,
        this.sails,
      );
      return res.json(result);
    }
  }

  async modelSearchAll(req, res) {
    const { modelName } = req.query;
    if (await this.hasAccess('read', req, res)) {
      const resultPromise = this.sails.models[modelName]
        .find({});
      const result = await populate(
        resultPromise,
        modelName,
        this.sails
      );
      return res.json(result);
    }
  }

  async countAll(req, res) {
    if ((await verifyToken(req, res)).success) {
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

  async uploadAsset(req, res) {
    const type = req.body.type || 'file';
    const model = req.body.model;
    const name = req.body.name;
    const Asset = this.sails.models.crudasset;

    req.file('file').upload({
    },
      (err, uploadedFiles) => {
        if (err) {
          return res.serverError(err);
        }

        // If no files were uploaded, respond with an error.
        if (uploadedFiles.length === 0) {
          return res.badRequest('No file was uploaded');
        }

        Asset.create({
          fileDirectory: uploadedFiles[0].fd,
          name,
          model,
          type,
        }).exec((err, asset) => {
          if (err) return res.serverError(err);
          // sails.config.custom.baseUrl
          var baseUrl = '';
          Asset.update(
            { id: asset.id },
            {
              url: require('util')
                .format('%s/administrator/crud-asset/%s', baseUrl, asset.id),
            })
            .exec((error) => {
              if (error) return res.serverError(error);
              return res.send({ success: true });
            });
        });

      });
  }

  async crudAsset(req, res) {
    const id = req.param('id');
    const Asset = this.sails.models.crudasset;
    Asset.findOne(id).exec(function (err, asset) {
      if (err) return res.serverError(err);
      if (!asset) return res.notFound();

      if (!asset.fileDirectory) {
        return res.notFound();
      }

      const fileAdapter = SkipperDisk();

      res.set(
        'Content-disposition',
        `attachment; filename='${asset.name}'`,
      );

      fileAdapter.read(asset.fileDirectory)
        .on('error', function (err) {
          return res.serverError(err);
        })
        .pipe(res);
    });
  }
};


module.exports = Controller;
