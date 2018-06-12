const CRUD_ACTIONS = [
  'create',
  'read',
  'update',
  'delete',
  '*'
];

const MODELS_FILTER = (m) => {
  return m.indexOf('crudgroup_') < 0
};

const seed = async (sails) => {
  const {
    cruduser,
    crudgroup,
    crudresource,
    crudaction,
    crudright
  } = sails.models;

  const actionPromises = CRUD_ACTIONS
    .map((name) => {
      const payload = { name };
      return crudaction.findOrCreate(payload, payload);
    });
  const resourcesPromises = Object.keys(sails.models)
    .filter(MODELS_FILTER)
    .map((name) => {
      const payload = { name };
      return crudresource.findOrCreate(payload, payload);
    });
  resourcesPromises.push(
    crudresource.findOrCreate({ name: '*' }, { name: '*' })
  );

  await Promise.all(actionPromises);
  await Promise.all(resourcesPromises);

  const actions = await crudaction.find();
  const resources = await crudresource.find();

  const rightsPromises = [];

  actions.forEach((action) => {
    resources.forEach((resource) => {
      const query = {
        action: action.id,
        resource: resource.id,
      };
      const payload = {
        action: action.id,
        resource: resource.id,
        name: `${action.name}::${resource.name}`,
      };
      rightsPromises.push(
        crudright.findOrCreate(query, payload)
      );
    })
  });
  
  await Promise.all(rightsPromises);

  const rights = await crudright.find({})
    .populate('action')
    .populate('resource');
  const rootRight = rights.find((right) => {
    return right.action.name === '*' && right.resource.name === '*';
  });

  const groupCriteria = {
    name: 'root-group',
  };
  const groupPayload = {
    name: 'root-group',
    rights: [
      rootRight.id,
    ],
  };
  const rootGroup = await crudgroup.findOrCreate(
    groupCriteria,
    groupPayload,
  );

  const rootUserCriteria = {
    username: 'admin',
  };
  const rootUserPayload = {
    username: 'admin',
    password: 'access@crud-2018',
    groups: [
      rootGroup.id,
    ],
  };
  await cruduser.findOrCreate(
    rootUserCriteria,
    rootUserPayload,
  );
};

module.exports = seed;
