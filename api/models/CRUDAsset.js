module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true,
    },
    fileDirectory: {
      type: 'string',
      required: true,
    },
    model: {
      type: 'string',
      required: true,
    },
    type: {
      type: 'string',
      required: true,
    },
    url: {
      type: 'string',
    },
  },
};
