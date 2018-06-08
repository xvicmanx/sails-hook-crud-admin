const MainController = require('./MainController');
const AuthController = require('./AuthController');
const setupDB = require('./setupDB');
const seedDB = require('./seedDB');

module.exports = function (sails) {
  const data = {};
  const mainController = new MainController(sails);
  const authController = new AuthController(sails, data);
  
  return {
    initialize: function(cb) {
      const eventsToWaitFor = ['hook:orm:loaded'];
      sails.after(eventsToWaitFor, function() {
        data.adminModels = setupDB(sails);
        seedDB(sails, data.adminModels);
        return cb();
      });
    },
    routes: {
      before: {
        'GET /administrator': mainController.index,
        'GET /administrator/client.js': mainController.clientJS,
        'POST /administrator/model-count': mainController.modelCount,
        'POST /administrator/model-search': mainController.modelSearch,
        'GET /administrator/model-search-all': mainController.modelSearchAll,
        'GET /administrator/all-models-count': mainController.countAll,

        'POST /administrator/login': authController.authenticate,
      },
    }
  };
};
