const app = require('./dist/app.js');
const fs = require('fs');

module.exports = function (sails) {
  var hook;
  return {

    initialize: function(cb) {
      hook = this;
      return cb();
    },

    routes: {
      before: {
        'GET /administrator': function (req, res) {
          sails.log(sails.models.foo.attributes);
          const definitions = Object.keys(sails.models)
            .reduce(function (result, k) {
              result[k] = sails.models[k].attributes;
              return result;
            }, {});
          const injection = `
            window.sailsModels = ${JSON.stringify(definitions)};
          `;
          res.send(
            app.renderPage(injection)
          );
        },
        'GET /administrator/client.js': function (req, res) {
          res.send(
            fs.readFileSync(__dirname + '/dist/client.js')
          );
        }
      },
    }
  };
};