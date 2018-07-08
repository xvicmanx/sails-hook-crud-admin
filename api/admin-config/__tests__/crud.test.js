import config from '../crud';

describe('api::admin-config', () => {
  describe('CRUD configuration', () => {
    test('it is configured as expected', () => {
      expect(config).toMatchSnapshot();
    });
  });
});
