const app = require('./dist/app.js');
const fs = require('fs');
const { buildQuery } = require('./app/helpers/query');

const getDefinitions = (models) => {
  return Object.keys(models)
    .reduce(function (result, k) {
      result[k] = models[k].attributes;
      return result;
    }, {});
};

module.exports = function (sails) {
  return {
    routes: {
      before: {
        'GET /administrator': function (req, res) {
          // sails.log(sails.models.foo.attributes);
          const injection = `
            window.sailsModels = ${JSON.stringify(getDefinitions(sails.models))};
          `;
          res.send(app.renderPage(injection));
        },
        'GET /administrator/client.js': function (req, res) {
          res.send(
            fs.readFileSync(__dirname + '/dist/client.js')
          );
        },
        'POST /administrator/model-count': async function (req, res) {
          const total = await sails.models[req.body.modelName].count({
            where: buildQuery(req.body.queryRules || [])
          });
          return res.json(total);
        },
        'POST /administrator/model-search': async function (req, res) {
          const result = await sails.models[req.body.modelName].find({
            where: buildQuery(req.body.queryRules || []),
            skip: req.body.skip,
            limit: req.body.limit,
            sort: req.body.sort,
          })
          return res.json(result);
        },
      },
    }
  };
};