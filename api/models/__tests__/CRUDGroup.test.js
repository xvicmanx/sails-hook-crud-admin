import model from '../CRUDGroup';

describe('api::models::CRUDGroup', () => {
  test('The model is defined properly', () => {
    expect(model).toMatchSnapshot();
  });
});
