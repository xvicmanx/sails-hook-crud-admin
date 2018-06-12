const missingParamError = (param) => ({
  error: {
    message: `'${param}' missing!`,
    fields: {
      [param]: `'${param}' missing!`,
    },
  },
});

const userOrPassError = () => ({
  error: {
    message: 'Invalid "username or password"',
    fields: {
      username: 'Invalid "username or password"',
      password: 'Invalid "username or password"',
    }
  }
});

const systemError = () => ({
  error: {
    message: 'Something happened while authenticating :(',
  },
});

const tokenAuthError = () => ({
  error: {
    message: `Error in jwt token`,
    fields: {
      'jwt-token': `Error in jwt token`,
    },
  },
});

module.exports = {
  userOrPassError,
  systemError,
  missingParamError,
  tokenAuthError,
};
