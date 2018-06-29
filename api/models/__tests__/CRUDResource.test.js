import model from '../CRUDResource';

describe('api::models::CRUDResource', () => {
  test('The model is defined properly', () => {
    expect(model).toMatchSnapshot();
  });
});
