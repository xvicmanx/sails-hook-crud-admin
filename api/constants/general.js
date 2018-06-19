const SALT_ROUNDS = 10;

const CRUD_MODELS = [
  'crudaction',
  'crudresource',
  'crudright',
  'crudgroup',
  'cruduser',
  'crudasset',
];

const HTTP_METHODS = [
  'GET',
  'POST',
  'PUT',
  'PATCH',
  'DELETE',
  'OPTIONS',
];

module.exports = {
  SALT_ROUNDS,
  CRUD_MODELS,
  HTTP_METHODS,
};
