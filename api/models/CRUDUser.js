const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../constants/general');
const { omitProps } = require('../helpers');

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
    },
  },
  verifyPassword: function(password, otherPass) {
    return new Promise(function (resolve, reject) {
      try {
        bcrypt.compare(
          password,
          otherPass,
          function(err, res) {
            if (err) {
              reject(err);
            } else {
              resolve(res);
            }
          },
        );
      } catch (err) {
        reject(err);
      }
    });
  },
  customToJSON: function() {
    return omitProps(this, ['password'])
  },
  beforeCreate: function(data, cb) {
    bcrypt.hash(
      data.password,
      SALT_ROUNDS,
      function(err, hash) {
        data.password = hash;
        cb();
      },
    );
  },
  beforeUpdate: function(data, cb) {
    if (!data.password) return cb();

    bcrypt.hash(
      data.password,
      SALT_ROUNDS,
      function(err, hash) {
        data.password = hash;
        cb();
      },
    );
  }
};
