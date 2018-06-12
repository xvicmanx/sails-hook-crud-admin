const AuthService = require('./admin-services/AuthService');
const Errors  = require('./errors');


const MODELS_FILTER = (m) => {
  return m.indexOf('crudgroup_') < 0
};

const getDefinitions = (models) => {
  return Object.keys(models)
    .filter(MODELS_FILTER)
    .reduce(function (result, k) {
      result[k] = models[k].attributes;
      return result;
    }, {});
};

const populate = async (resultPromise, modelName, sails) => {
  const definition = getDefinitions(sails.models)[modelName];
  const fieldsToPopulate = Object.keys(definition).filter(k => {
      return definition[k].model || definition[k].collection;
    }).map(k => k);
  let result = resultPromise;
  fieldsToPopulate.forEach(field => {
    result = result.populate(field);
  })
  return result;
};

const queryValue = (source, query = '', defaultValue = null) => {
  const value = query.split('.').reduce((result, key) => (result && result[key] ? result[key] : null), source);
  return value || defaultValue;
};

const verifyToken = async (req, res) => {
  const token = req.headers['jwt-token'];
  const result = await AuthService.verifyToken(token);
  if (!result.success) {
    res.status(403)
      .send(Errors.tokenAuthError());
  }
  return result;
};

const verifyAccess = ({ action, resource }) => async (req, res) => {
  const verification = await verifyToken(req, res);
  const { data } = verification;
  const hasRightsAccess = AuthService.hasAccess({
    action,
    resource,
    rights: data && data.user &&
      data.user.rights || [],
  });
  return verification.success && hasRightsAccess;
};

module.exports = {
  verifyAccess,
  verifyToken,
  populate,
  getDefinitions,
  queryValue,
};
