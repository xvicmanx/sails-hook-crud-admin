import model from '../CRUDAction';

describe('api::models::CRUDAction', () => {
  test('The model is defined properly', () => {
    expect(model).toMatchSnapshot();
  });
});
