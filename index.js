const Controller = require('./controller');
const setupDB = require('./setupDB');
const seedDB = require('./seedDB');

module.exports = function (sails) {
  const controller = new Controller(sails);
  
  return {
    initialize: function(cb) {
      const eventsToWaitFor = ['hook:orm:loaded'];
      sails.after(eventsToWaitFor, function() {
        const adminModels = setupDB(sails);
        seedDB(sails, adminModels);
        
        console.log('adminModels models', adminModels);

        return cb();
      });
    },
    routes: {
      before: {
        'GET /administrator': controller.index,
        'GET /administrator/client.js': controller.clientJS,
        'POST /administrator/model-count': controller.modelCount,
        'POST /administrator/model-search': controller.modelSearch,
        'GET /administrator/model-search-all': controller.modelSearchAll,
        'GET /administrator/all-models-count': controller.countAll,
      },
    }
  };
};
