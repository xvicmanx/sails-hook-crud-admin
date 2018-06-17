module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true,
    },
    hash: {
      type: 'string',
      required: true,
      unique: true,
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
