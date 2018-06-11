const _ = require('lodash');
const MVCSLoader = require('sails-util-mvcsloader');
const routes = require('./api/constants/routes');
const seedData = require('./api/seed');
const MainController = require('./api/admin-controllers/CRUDAdminMainController');
const AuthController = require('./api/admin-controllers/CRUDAdminAuthController');

const CRUD_MODELS = [
  'crudaction',
  'crudresource',
  'crudright',
  'crudgroup',
  'cruduser',
];

const HTTP_METHODS = [
  'GET',
  'POST',
  'PUT',
  'PATCH',
  'DELETE',
  'OPTIONS',
];

const crudForbiddenRoutes = () => {
  const routes = {};
  CRUD_MODELS.forEach(modelName => {
    HTTP_METHODS.forEach(method => {
      const key = `${method} /${modelName}`;
      routes[key] = {response: 'notFound' };
    });
  });
  return routes;
};

module.exports = function (sails) {
  sails.util = sails.util || {};
  sails.util.merge = sails.util.merge || _.merge;
  const data = {};
  const loader = MVCSLoader(sails);
  const mainController = new MainController(sails);
  const authController = new AuthController(sails, data);

  loader.configure();

  return {
    initialize: (cb) => {
      const eventsToWaitFor = [];
      if(sails.hooks.orm) eventsToWaitFor.push('hook:orm:loaded');
      if(sails.hooks.pubsub) eventsToWaitFor.push('hook:pubsub:loaded');

      loader.inject(err => {
        sails
        .after(eventsToWaitFor, () => {
          seedData(sails).then(() => {
            cb(err);
          }).catch((error)  => {
            cb(err || error);
          });
        });
      });      
    },
    routes: {
      before: Object.assign(
        {
          [routes.INDEX]: mainController.index,
          [routes.CLIENT_JS]: mainController.clientJS,
          [routes.MODEL_COUNT]: mainController.modelCount,
          [routes.MODEL_SEARCH]: mainController.modelSearch,
          [routes.MODEL_CREATE]: mainController.modelCreate,
          [routes.MODEL_UPDATE]: mainController.modelUpdate,
          [routes.MODEL_DELETE]: mainController.modelDelete,
          [routes.MODEL_SEARCH_ALL]: mainController.modelSearchAll,
          [routes.MODELS_COUNT]: mainController.countAll,
          [routes.LOGIN]: authController.authenticate,
        },
        crudForbiddenRoutes()
      ),
    }
  };
};
