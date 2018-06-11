const jwt = require('jsonwebtoken');
const SECRET = 'secret';
const ONE_DAY = 24 * 60 * 60;

const AuthService = {
  verifyToken(token) {
    return new Promise((resolve, reject) => {
      try {
        const decoded = jwt.verify(token, SECRET);
        resolve({ success: true });
      } catch(err) {
        resolve({ err, success: false});
      }
    });
  },
  generateTokenInfo(userData) {
    const exp = Math.floor(Date.now() / 1000) + ONE_DAY;
    const token = jwt.sign(
      { userData, exp },
      SECRET,
    );
    return {
      exp,
      token,
    };
  }
};

module.exports = AuthService;
