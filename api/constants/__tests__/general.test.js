import * as constants from '../general';

describe('api::constants::general', () => {
  test('The CRUD model names are correct', () => {
    expect(constants.CRUD_MODELS).toMatchSnapshot();
  });

  test('The HTTP methods are correct', () => {
    expect(constants.HTTP_METHODS).toMatchSnapshot();
  });

  test('The SALT Rounds value is correct', () => {
    expect(constants.SALT_ROUNDS).toBe(10);
  });
});
