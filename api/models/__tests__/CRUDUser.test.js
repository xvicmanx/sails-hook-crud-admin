import model from '../CRUDUser';

describe('api::models::CRUDUser', () => {
  test('The model is defined properly', () => {
    expect(model).toMatchSnapshot();
  });
});
