import errors from '../errors';

describe('api::errors', () => {
  describe('missingParamError', () => {
    test('it returns the correct object', () => {
      expect(errors.missingParamError('test-param')).toMatchSnapshot();
    });
  });

  describe('userOrPassError', () => {
    test('it returns the correct object', () => {
      expect(errors.userOrPassError()).toMatchSnapshot();
    });
  });

  describe('systemError', () => {
    test('it returns the correct object', () => {
      expect(errors.systemError()).toMatchSnapshot();
    });
  });

  describe('tokenAuthError', () => {
    test('it returns the correct object', () => {
      expect(errors.tokenAuthError()).toMatchSnapshot();
    });
  });
});
