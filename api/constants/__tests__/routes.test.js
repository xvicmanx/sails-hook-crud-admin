import constants from '../routes';

describe('api::constants::routes', () => {
  test('The url values are correct', () => {
    expect(constants).toMatchSnapshot();
  });
});
