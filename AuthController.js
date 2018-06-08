const jwt = require('jsonwebtoken');
const SECRET = 'secret';
const ONE_DAY = 24 * 60 * 60;

const missingParamError = (param) => ({
  error: {
    message: `'${param}' missing!`,
    fields: {
      [param]: `'${param}' missing!`,
    },
  }
});

class AuthController {
  constructor(sails, data) {
    this.sails = sails;
    this.data = data;
    this.authenticate = this.authenticate.bind(this);
  }

  authenticate(req, res) {
    if (!req.body.username) {
      res.status(400)
        .send(missingParamError('username'));
    }

    if (!req.body.password) {
      res.status(400)
        .send(missingParamError('password'));
    }

    const user = this.data.adminModels.users
      .find({
        name: req.body.username,
        password: req.body.password })
      .value();

    if (!user) {
      res.status(400)
        .send({
          error: {
            message: 'Invalid "username or password"',
            fields: {
              username: 'Invalid "username or password"',
              password: 'Invalid "username or password"',
            }
          }
        });
    } else {
      try {
        const userData = {
          id: user.id,
          name: user.name,
          rights: []
        };
        const exp = Math.floor(Date.now() / 1000) + ONE_DAY;
        const token = jwt.sign(
          { userData, exp },
          SECRET,
        );
        res.send({ userData, token, exp, success: true });
      } catch(err) {
        res.status(500)
        .send({
          error: {
            message: 'Something happened while authenticating :(',
          }
        });
      } 
    }
  }

  verify(req, res) {
    // if (!req.body || !req.body.username) {
    //   res.sendStatus(400);
    // }
    // try {
    //   var decoded = jwt.verify(token, 'wrong-secret');
    // } catch(err) {
    //   // err
    // }
  }
};


module.exports = AuthController;
