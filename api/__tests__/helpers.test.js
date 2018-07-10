import helpers from '../helpers';

describe('api::helpers', () => {
  describe('disableLog', () => {
    test('it disables sails log as expected', () => {
      const sails = {
        log: {
          verbose: 'test-verbose',
          error: 'test-error',
          silly: 'test-silly',
          info: 'test-info',
        },
      };
      helpers.disableLog(sails);
      expect(sails).toMatchSnapshot();
    });
  });
});
