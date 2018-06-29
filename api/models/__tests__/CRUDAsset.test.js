import model from '../CRUDAsset';

describe('api::models::CRUDAsset', () => {
  test('The model is defined properly', () => {
    expect(model).toMatchSnapshot();
  });
});
