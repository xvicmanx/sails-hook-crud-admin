const low = require('lowdb');
const lodashId = require('lodash-id')
const FileSync = require('lowdb/adapters/FileSync');
const DB_FILE =  'crud-admin-db.json';

module.exports = function(sails){
  const adapter = new FileSync(`${sails.config.appPath}/${DB_FILE}`);
  let db = low(adapter)

  db._.mixin(lodashId)
  db = db.defaults({
    users: [],
    groups: [],
    rights: [],
    actions: [],
    resources: [],
  });
  
  const actions = db.get('actions');
  const resources = db.get('resources');
  const groups = db.get('groups');
  const users =  db.get('users');

  return {
    users,
    actions,
    groups,
    resources
  };
};
