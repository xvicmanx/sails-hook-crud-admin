const Controller = require('./controller');

module.exports = function (sails) {
  const controller = new Controller(sails);
  
  return {
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
