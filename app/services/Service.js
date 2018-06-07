const requester = require('simple-json-requester');

const URL = (model, id) => id ? `/${model}/${id}` : `/${model}`;
const COUNT_URL = '/administrator/model-count';
const SEARCH_URL = '/administrator/model-search';
const SEARCH_ALL_URL = '/administrator/model-search-all';
const COUNT_ALL_MODELS_URL = '/administrator/all-models-count';
const LOGIN_URL = '/administrator/login';

const getDirection = (d) => d === 'ascending' ? 'ASC' : 'DESC';

const Service = (model) => ({
  fetchItems: (payload) => {
    const { itemsPerPage, activePage } = payload.pagination;
    const { field, direction } = payload.sort;
    return requester.post(
      SEARCH_URL,
      {
        modelName: model,
        limit: itemsPerPage,
        skip: (activePage - 1) * itemsPerPage,
        sort: `${field} ${getDirection(direction)}`,
        queryRules: payload.queryRules,
      }
    );
  },
  fetchAllItems: () => {
    return requester.get(
      SEARCH_ALL_URL,
      { modelName: model }
    );
  },
  countAllModels: () => {
    return requester.get(
      COUNT_ALL_MODELS_URL,
      {}
    );
  },
  countItems: (payload) => {
    return requester.post(
      COUNT_URL,
      {
        modelName: model,
        queryRules: payload.queryRules,
      }
    );
  },
  login: (data) => {
    return requester.post(
      LOGIN_URL,
      data
    );
  },
  create: (item) => {
    return requester.post(
      URL(model),
      item
    );
  },
  update: (data) => {
    return requester.put(
      URL(model, data.id),
      data
    );
  },
  delete: (data) => {
    return requester.delete(
      URL(model, data.id),
    );
  },
});

export default Service;
