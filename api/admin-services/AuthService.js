const jwt = require('jsonwebtoken');

const SECRET = '1h3s3cr3t@k3y';
const ONE_DAY = 24 * 60 * 60;

const AuthService = {
  verifyToken(token) {
    return new Promise((resolve) => {
      try {
        const data = jwt.verify(token, SECRET);
        resolve({ success: !!data, data });
      } catch (err) {
        resolve({ err, success: false, data: null });
      }
    });
  },
  generateTokenInfo(user) {
    const exp = Math.floor(Date.now() / 1000) + ONE_DAY;
    const token = jwt.sign(
      { user, exp },
      SECRET,
    );
    return {
      exp,
      token,
    };
  },
  hasAccess({
    action,
    resource,
    rights,
  }) {
    const expectedRights = [
      '*::*',
      `*::${resource}`,
      `${action}::*`,
      `${action}::${resource}`,
    ];
    return rights.reduce((allowed, right) => allowed
        || expectedRights.indexOf(right) >= 0, false);
  },
};

module.exports = AuthService;
