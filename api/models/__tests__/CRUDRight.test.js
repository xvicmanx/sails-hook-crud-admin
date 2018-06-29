import model from '../CRUDRight';

describe('api::models::CRUDRight', () => {
  test('The model is defined properly', () => {
    expect(model).toMatchSnapshot();
  });
});
