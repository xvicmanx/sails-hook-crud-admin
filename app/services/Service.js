const requester = require('simple-json-requester');
import AuthStore from '../AuthStore';

const URL = (model, id) => id ? `/${model}/${id}` : `/${model}`;
const UPLOAD_URL = '/administrator/model-upload-asset';
const ASSET_URL = id => `/administrator/crud-asset/${id}`;
const ASSETS_URL = `/administrator/models-assets/`;
const COUNT_URL = '/administrator/model-count';
const SEARCH_URL = '/administrator/model-search';
const DELETE_URL = '/administrator/model-delete';
const CREATE_URL = '/administrator/model-create';
const UPDATE_URL = '/administrator/model-update';
const SEARCH_ALL_URL = '/administrator/model-search-all';
const COUNT_ALL_MODELS_URL = '/administrator/all-models-count';
const LOGIN_URL = '/administrator/login';

const getDirection = (d) => d === 'ascending' ? 'ASC' : 'DESC';

const getConfig = () => ({
  extraHeaders: {
    'jwt-token': AuthStore.getToken(),
  },
});

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
      },
      getConfig(),
    ).then(result => {
      return Array.isArray(result) ? 
        result : [];
    });
  },
  fetchAllItems: () => {
    return requester.get(
      SEARCH_ALL_URL,
      { modelName: model },
      getConfig(),
    ).then(result => {
      return Array.isArray(result) ? 
        result : [];
    });
  },
  fetchAssets: (payload) => {
    return requester.post(
      ASSETS_URL,
      payload,
      getConfig(),
    ).then(result => {
      return Array.isArray(result) ? 
        result : [];
    });
  },
  countAllModels: () => {
    return requester.get(
      COUNT_ALL_MODELS_URL,
      {},
      getConfig(),
    );
  },
  countItems: (payload) => {
    return requester.post(
      COUNT_URL,
      {
        modelName: model,
        queryRules: payload.queryRules,
      },
      getConfig(),
    );
  },
  login: (data) => {
    return requester.post(
      LOGIN_URL,
      data
    );
  },
  upload: (data) => {
    const { extraHeaders } = getConfig();
    const formData = new FormData();
    
    formData.append('name', data.name);
    formData.append('model', data.model);
    formData.append('type', data.type);
    formData.append('file', data.file);

    return fetch(UPLOAD_URL, {
      method: 'POST',
      headers: Object.assign(
        {
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        extraHeaders,
      ),
      body: formData,
    }).then(response => response.json());
  },
  create: (item) => {
    item.modelName = model;
    return requester.post(
      CREATE_URL,
      item,
      getConfig(),
    );
  },
  update: (data) => {
    data.modelName = model;
    return requester.put(
      `${UPDATE_URL}/${data.id}`,
      data,
      getConfig(),
    );
  },
  delete: (data) => {
    data.modelName = model;
    return requester.delete(
      `${DELETE_URL}/${data.id}`,
      data,
      getConfig(),
    );
  },
});

export default Service;
