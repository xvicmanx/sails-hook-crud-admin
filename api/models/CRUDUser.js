module.exports = {
  attributes: {
    username: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
    groups: {
      collection: 'crudgroup',
    }
  },
};
