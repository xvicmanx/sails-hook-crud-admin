const DEFINED_ACTIONS = [
  '*',
  'create',
  'read',
  'update',
  'delete',
];

const exists = (collection, payload) => {
  return collection.find(payload).value();
};

module.exports = function (sails, administrationModels) {
  const {
    actions,
    resources,
    users,
    groups,
  } = administrationModels;
  
  DEFINED_ACTIONS.forEach(name => {
    if (!exists(actions, { name })) {
      actions.insert({ name }).write();
    }
  });

  Object.keys(sails.models).forEach(name => {
    if (!exists(resources, { name })) {
      resources.insert({ name }).write();
    }
  });

  if (!exists(resources, { name: '*' })) {
    resources.insert({ name: '*' }).write();
  }

  let rootGroup = groups.find({ name: 'root' }).value();
  if (!rootGroup) {
    rootGroup = groups
      .insert({
        name: 'root',
        password: 'foo!',
        rights: [],
      }).write();
  }

  let rootUser = users.find({ name: 'root' }).value();

  if (!rootUser) {
    users
      .insert({
        name: 'root',
        password: 'foo!',
        groups: [rootGroup]
      }).write();
  }
};
