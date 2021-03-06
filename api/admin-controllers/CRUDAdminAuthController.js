const AuthService = require('../admin-services/AuthService');
const Errors = require('../errors');


class AuthController {
  constructor(sails) {
    this.sails = sails;
    this.authenticate = this.authenticate.bind(this);
  }

  async getRights(user) {
    let rights = [];

    const groupIds = user.groups.map(g => g.id);
    let groups = await this.sails.models.crudgroup
      .find({})
      .populate('rights');
    groups = groups.filter(g => groupIds.indexOf(g.id) > -1);

    groups.forEach((group) => {
      rights = rights.concat(
        group.rights.map(r => r.name),
      );
    });
    return rights;
  }

  async getUser(username, password) {
    const UserModel = this.sails.models.cruduser;
    const user = await UserModel
      .findOne({ username })
      .populate('groups');
    const verified = await UserModel.verifyPassword(
      password,
      user.password,
    );

    if (!verified) return null;

    return user;
  }

  async authenticate(req, res) {
    const {
      username,
      password,
    } = req.body || {};

    if (!username) {
      res.status(400)
        .send(Errors.missingParamError('username'));
      return false;
    }

    if (!password) {
      res.status(400)
        .send(Errors.missingParamError('password'));
      return false;
    }

    const user = await this.getUser(username, password);

    if (!user) {
      res.status(400)
        .send(Errors.userOrPassError());
      return false;
    }

    try {
      const userData = {
        id: user.id,
        name: user.username,
        rights: await this.getRights(user),
      };
      const { token, exp } = AuthService.generateTokenInfo(userData);
      res.send({
        userData,
        token,
        exp,
        success: true,
      });
      return true;
    } catch (err) {
      sails.log(err);
      res.status(500)
        .send(Errors.systemError());
      return false;
    }
  }
}


module.exports = AuthController;
