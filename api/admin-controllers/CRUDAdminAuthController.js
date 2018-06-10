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
  constructor(sails) {
    this.sails = sails;
    this.authenticate = this.authenticate.bind(this);
  }

  async authenticate(req, res) {
    if (!req.body.username) {
      res.status(400)
        .send(missingParamError('username'));
    }

    if (!req.body.password) {
      res.status(400)
        .send(missingParamError('password'));
    }

    const user = await this.sails.models.cruduser
      .findOne({
        username: req.body.username,
        password: req.body.password,
      }).populate('groups');

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
        const groups = await this.sails.models.crudgroup
          .find({ id: { in: user.groups.map(g => g.id), } })
          .populate('rights');
        let rights = [];
        groups.forEach((group) => {
          rights = rights.concat(
            group.rights.map(r => r.name)
          );
        });

        const userData = {
          id: user.id,
          name: user.username,
          rights,
        };
        const exp = Math.floor(Date.now() / 1000) + ONE_DAY;
        const token = jwt.sign(
          { userData, exp },
          SECRET,
        );
        res.send({ userData, token, exp, success: true });
      } catch(err) {
        sails.log(err);
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