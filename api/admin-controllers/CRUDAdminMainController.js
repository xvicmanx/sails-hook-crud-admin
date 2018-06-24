const fs = require('fs');
const SkipperDisk = require('skipper-disk');
const { generateHash } = require('random-hash');
const util = require('util');
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

const hasAccess = async (action, req, res) => {
  const { modelName, model } = req.body || req.query;
  return verifyAccess({
    action,
    resource: modelName || model,
  })(req, res);
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
    this.uploadAsset = this.uploadAsset.bind(this);
    this.crudAsset = this.crudAsset.bind(this);
    this.modelsAssets = this.modelsAssets.bind(this);
    this.CLIENT_JS_FILE = `${__dirname}/../../dist/client.js`;
  }

  index(req, res) {
    const crudAdminConf = this.sails.config.crudAdmin || {};
    const config = {
      general: {
        labels: queryValue(
          crudAdminConf,
          'general.labels',
          {},
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
      fs.readFileSync(this.CLIENT_JS_FILE),
    );
  }

  async modelCount(req, res) {
    const { modelName, queryRules } = req.body;
    if (await hasAccess('read', req, res)) {
      const total = await this.sails.models[modelName].count({
        where: buildQuery(queryRules || []),
      });
      return res.json(total);
    }
    return false;
  }

  async modelCreate(req, res) {
    const { modelName } = req.body;
    delete req.body.modelName;
    if (await hasAccess('create', req, res)) {
      const result = await this.sails.models[modelName]
        .create(req.body);
      return res.json(result);
    }
    return false;
  }

  async modelUpdate(req, res) {
    const { modelName } = req.body;
    delete req.body.modelName;
    if (await hasAccess('update', req, res)) {
      const Model = this.sails.models[modelName];
      const result = await Model.update({ id: req.body.id }, req.body);
      return res.json(result);
    }
    return false;
  }

  async modelDelete(req, res) {
    const { modelName } = req.body;
    if (await hasAccess('delete', req, res)) {
      const result = await this.sails.models[modelName]
        .destroy({ id: req.params.id });
      return res.json(result);
    }
    return false;
  }

  async modelSearch(req, res) {
    const {
      queryRules,
      skip,
      modelName,
      limit,
      sort,
    } = req.body;
    if (await hasAccess('read', req, res)) {
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
    return false;
  }

  async modelSearchAll(req, res) {
    const { modelName } = req.query;
    if (await hasAccess('read', req, res)) {
      const resultPromise = this.sails.models[modelName]
        .find({});
      const result = await populate(
        resultPromise,
        modelName,
        this.sails,
      );
      return res.json(result);
    }
    return false;
  }

  async countAll(req, res) {
    if ((await verifyToken(req, res)).success) {
      const promises = Object.keys(this.sails.models).map(name => new Promise((resolve) => {
        this.sails.models[name].count({})
          .then((count) => {
            resolve({ name, count });
          });
      }));

      const counts = await Promise.all(promises);
      const result = counts.reduce((acc, item) => {
        const x = acc;
        x[item.name] = item.count;
        return x;
      }, {});

      return res.json(result);
    }
    return false;
  }

  async uploadAsset(req, res) {
    const type = req.param('type') || 'file';
    const model = req.param('model');
    const name = req.param('name');
    const Asset = this.sails.models.crudasset;

    if (await hasAccess('upload-assets', req, res)) {
      req.file('file').upload({},
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
            hash: generateHash({ length: 12 }),
          }).exec((error, asset) => {
            if (error) return res.serverError(error);
            // sails.config.custom.baseUrl
            const baseUrl = '';
            Asset.update(
              { id: asset.id },
              {
                url: util
                  .format('%s/administrator/crud-asset/%s', baseUrl, asset.hash),
              },
            )
              .exec((updateError) => {
                if (updateError) return res.serverError(updateError);
                return res.send({ success: true });
              });
            return false;
          });
          return false;
        });
    }
  }

  async modelsAssets(req, res) {
    const { type } = req.body;
    if ((await verifyToken(req, res)).success) {
      const Asset = this.sails.models.crudasset;
      const resultPromise = Asset.find({
        where: { type },
        sort: 'createdAt DESC',
      });
      const result = await populate(
        resultPromise,
        'crudasset',
        this.sails,
      );
      return res.json(result);
    }
    return false;
  }

  async crudAsset(req, res) {
    const hash = req.param('hash');
    const Asset = this.sails.models.crudasset;
    Asset.findOne({ hash }).exec((err, asset) => {
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
        .on('error', readError => res.serverError(readError))
        .pipe(res);
      return false;
    });
  }
}


module.exports = Controller;
