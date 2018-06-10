module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true,
    },
    action: {
      model: 'crudaction',
      required: true,
    },
    resource: {
      model: 'crudresource',
      required: true,
    },
  },
};
