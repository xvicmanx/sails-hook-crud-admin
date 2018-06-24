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
  verifyPassword(password, otherPass) {
    return new Promise(((resolve, reject) => {
      try {
        bcrypt.compare(
          password,
          otherPass,
          (err, res) => {
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
    }));
  },
  customToJSON() {
    return omitProps(this, ['password']);
  },
  beforeCreate(toCreateData, cb) {
    const data = toCreateData;
    if (!data.password) return cb();
    bcrypt.hash(
      data.password,
      SALT_ROUNDS,
      (err, hash) => {
        data.password = hash;
        cb();
      },
    );
    return true;
  },
  beforeUpdate(toUpdateData, cb) {
    const data = toUpdateData;
    let success = false;
    if (!data.password) return cb();
    if (data.password.length < 50) {
      bcrypt.hash(
        data.password,
        SALT_ROUNDS,
        (err, hash) => {
          data.password = hash;
          cb();
        },
      );
      success = true;
    } else {
      return cb();
    }
    return success;
  },
};
