module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRights = exports.removeRights = exports.createRights = exports.modelTitle = exports.modelIcon = exports.CRUD_MODELS_FILTER = exports.NON_CRUD_MODELS_FILTER = exports.VISIBLE_MODELS_FILTER = exports.getFieldRenderer = exports.getFieldMask = exports.getFieldLabel = exports.valueResolver = exports.getModelValue = exports.getModelValueTemplate = exports.getFieldValueTemplate = exports.getType = exports.keysSorter = exports.inUpdateHiddenFields = exports.inCreationHiddenFields = exports.getModel = exports.getModels = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _simpleJsonTable = __webpack_require__(26);

var _simpleJsonTable2 = _interopRequireDefault(_simpleJsonTable);

var _lodash = __webpack_require__(13);

var _lodash2 = _interopRequireDefault(_lodash);

var _object = __webpack_require__(12);

var _config = __webpack_require__(8);

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

__webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var template = __webpack_require__(28);

var getModels = exports.getModels = function getModels() {
  return typeof window !== 'undefined' && window.sailsModels ? window.sailsModels : {};
};

var getModel = exports.getModel = function getModel(name) {
  var models = getModels();
  return models[name] ? models[name] : {};
};

var inCreationHiddenFields = exports.inCreationHiddenFields = function inCreationHiddenFields(field) {
  return ['createdAt', 'updatedAt', 'id'].indexOf(field) > -1;
};

var inUpdateHiddenFields = exports.inUpdateHiddenFields = function inUpdateHiddenFields(field) {
  return ['createdAt', 'updatedAt', 'id'].indexOf(field) > -1;
};

var keysWeight = {
  id: -1,
  createdAt: 1,
  updatedAt: 2
};
var weight = function weight(k) {
  return keysWeight[k] || 0;
};

var isADateDefaultField = function isADateDefaultField(field) {
  return ['createdAt', 'updatedAt'].indexOf(field) > -1;
};

var keysSorter = exports.keysSorter = function keysSorter(a, b) {
  return weight(a) - weight(b);
};

var getType = exports.getType = function getType(model, field) {
  if (isADateDefaultField(field)) return 'date';
  return model[field].type;
};

var getFieldValueTemplate = exports.getFieldValueTemplate = function getFieldValueTemplate(modelName, field) {
  return (0, _config.getModelRelatedValue)(modelName + '.fields.' + field + '.valueTemplate', null);
};

var getModelValueTemplate = exports.getModelValueTemplate = function getModelValueTemplate(modelName) {
  return (0, _config.getModelRelatedValue)(modelName + '.valueTemplate', null);
};

var isHTML = function isHTML(text) {
  return (/<(\/)?\w+\s*>/.test(text)
  );
};
var asHTML = function asHTML(text) {
  var value = { __html: text };
  return _react2.default.createElement('div', { dangerouslySetInnerHTML: value });
};

var getModelValue = exports.getModelValue = function getModelValue(modelName, item) {
  var tpl = getModelValueTemplate(modelName);
  if (tpl) {
    var _compiler;

    var compiler = template(tpl);
    return compiler((_compiler = {}, _defineProperty(_compiler, modelName, item), _defineProperty(_compiler, '_', _lodash2.default), _compiler));
  }
  return null;
};

var valueResolver = exports.valueResolver = function valueResolver(model, field, modelName) {
  return function (item) {
    var tpl = getFieldValueTemplate(modelName, field);
    var data = item[field];

    if (tpl && data) {
      var _compiler2;

      var compiler = template(tpl);
      var compiled = compiler((_compiler2 = {}, _defineProperty(_compiler2, field, data), _defineProperty(_compiler2, '_', _lodash2.default), _compiler2));
      return isHTML(compiled) ? asHTML(compiled) : compiled;
    }

    // if (isADateDefaultField(field)) {
    //   return new Date(+item[field]).toLocaleString();
    // }

    if (model[field].type === 'boolean') {
      return item[field] ? 'true' : 'false';
    }

    if (model[field].model || model[field].collection) {
      return _react2.default.createElement(
        _semanticUiReact.Popup,
        {
          trigger: _react2.default.createElement(
            _semanticUiReact.Button,
            { icon: true },
            _constants2.default.BUTTONS.SEE_DETAILS
          ),
          on: 'click'
        },
        _react2.default.createElement(_simpleJsonTable2.default, {
          source: (0, _object.omit)(item[field], ['createdAt', 'updatedAt'])
        })
      );
    }

    return item[field];
  };
};

var getFieldLabel = exports.getFieldLabel = function getFieldLabel(modelName, field) {
  var text = (0, _config.getModelRelatedValue)(modelName + '.fields.' + field + '.label', field.separateCamel().asTitle());
  var icon = (0, _config.getModelRelatedValue)(modelName + '.fields.' + field + '.icon', '');
  return _react2.default.createElement(
    'span',
    null,
    icon && _react2.default.createElement(_semanticUiReact.Icon, { name: icon, color: 'teal' }),
    ' ',
    text
  );
};

var getFieldMask = exports.getFieldMask = function getFieldMask(modelName, field) {
  var mask = (0, _config.getModelRelatedValue)(modelName + '.fields.' + field + '.mask');
  return mask;
};

var getFieldRenderer = exports.getFieldRenderer = function getFieldRenderer(modelName, field) {
  return (0, _config.getModelRelatedValue)(modelName + '.fields.' + field + '.renderer', field.separateCamel().asTitle());
};

var VISIBLE_MODELS_FILTER = exports.VISIBLE_MODELS_FILTER = function VISIBLE_MODELS_FILTER(models) {
  return function (model) {
    return !_lodash2.default.get(models, model + '.hide', false);
  };
};

var NON_CRUD_MODELS_FILTER = exports.NON_CRUD_MODELS_FILTER = function NON_CRUD_MODELS_FILTER(model) {
  return _constants2.default.CRUD_MODELS.indexOf(model) < 0;
};

var CRUD_MODELS_FILTER = exports.CRUD_MODELS_FILTER = function CRUD_MODELS_FILTER(model) {
  return _constants2.default.CRUD_MODELS.indexOf(model) >= 0;
};

var modelIcon = exports.modelIcon = function modelIcon(modelName) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'small';
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'white';

  var icon = (0, _config.getModelRelatedValue)(modelName + '.icon', 'file');
  return _react2.default.createElement(
    'span',
    null,
    icon && _react2.default.createElement(_semanticUiReact.Icon, {
      name: icon,
      color: color,
      size: size
    })
  );
};

var modelTitle = exports.modelTitle = function modelTitle(modelName) {
  var includeIcon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var text = (0, _config.getModelRelatedValue)(modelName + '.label') || modelName.asTitle();
  var icon = null;
  if (includeIcon) {
    icon = (0, _config.getModelRelatedValue)(modelName + '.icon');
  }
  return _react2.default.createElement(
    'span',
    null,
    icon && _react2.default.createElement(_semanticUiReact.Icon, {
      name: icon,
      color: 'teal'
    }),
    ' ',
    text
  );
};

var createRights = exports.createRights = function createRights(modelName) {
  return ['*::*', '*::' + modelName, 'create::*', 'create::' + modelName];
};

var removeRights = exports.removeRights = function removeRights(modelName) {
  return ['*::*', '*::' + modelName, 'delete::*', 'delete::' + modelName];
};

var updateRights = exports.updateRights = function updateRights(modelName) {
  return ['*::*', '*::' + modelName, 'update::*', 'update::' + modelName];
};

exports.default = {
  getModel: getModel,
  getModels: getModels,
  inCreationHiddenFields: inCreationHiddenFields,
  inUpdateHiddenFields: inUpdateHiddenFields,
  keysSorter: keysSorter,
  getType: getType,
  valueResolver: valueResolver,
  getFieldLabel: getFieldLabel,
  getModelValue: getModelValue,
  getFieldRenderer: getFieldRenderer,
  NON_CRUD_MODELS_FILTER: NON_CRUD_MODELS_FILTER,
  CRUD_MODELS_FILTER: CRUD_MODELS_FILTER,
  modelTitle: modelTitle,
  createRights: createRights,
  updateRights: updateRights,
  removeRights: removeRights,
  modelIcon: modelIcon,
  getFieldMask: getFieldMask
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__(8);

var CRUD_MODELS = ['crudaction', 'crudresource', 'crudright', 'crudgroup', 'cruduser', 'crudasset'];

var Constants = {
  BUTTONS: {
    CREATE: (0, _config.getButtonText)('create', 'Create'),
    UPDATE: (0, _config.getButtonText)('update', 'Update'),
    REMOVE: (0, _config.getButtonText)('remove', 'Remove'),
    SEE_DETAILS: (0, _config.getButtonText)('seeDetails', 'See details')
  },
  LABELS: {
    VIEWS: (0, _config.getLabel)('views', 'Views'),
    HOME: (0, _config.getLabel)('home', 'Home'),
    LOGOUT: (0, _config.getLabel)('logout', 'Logout'),
    PERMISSIONS: (0, _config.getLabel)('permissions', 'Permissions'),
    ASSETS: (0, _config.getLabel)('assets', 'Assets'),
    ACTIONS: (0, _config.getLabel)('actions', 'Actions'),
    RESOURCES: (0, _config.getLabel)('resources', 'Resources'),
    WELCOME: (0, _config.getLabel)('welcome', 'Welcome'),
    CREATE_FORM_TITLE: (0, _config.getLabel)('createFormTitle', 'Create Item'),
    UPDATE_FORM_TITLE: (0, _config.getLabel)('updateFormTitle', 'Update Item'),
    REMOVE_FORM_TITLE: (0, _config.getLabel)('removeFormTitle', 'Remove existing Item'),
    CREATE_FORM_MESSAGE: (0, _config.getLabel)('createFormMessage', 'Create a new item'),
    UPDATE_FORM_MESSAGE: (0, _config.getLabel)('updateFormMessage', 'Update an existing item'),
    REMOVE_FORM_MESSAGE: (0, _config.getLabel)('removeFormMessage', 'Are you sure you want to remove the item?'),
    GENERAL_ERROR_MESSAGE: (0, _config.getLabel)('generalErrorMessage', 'There are some errors.')
  },
  CRUD_MODELS: CRUD_MODELS,
  ASSETS_TYPES: {
    FILE: 'file',
    PICTURE: 'picture'
  }
};

exports.default = Constants;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _models = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storeValue = function storeValue(key, value) {
  if (typeof Storage !== 'undefined') {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
};

var readValue = function readValue(key) {
  if (typeof Storage !== 'undefined') {
    var value = window.localStorage.getItem(key);
    if (!value) return null;
    return JSON.parse(value);
  }
  return null;
};

var KEYS = {
  TOKEN_INFO: 'tokenInfo',
  USER_DATA: 'userData'
};

var permissionAreaRights = ['*::*', 'read::*'];

_constants2.default.CRUD_MODELS.forEach(function (c) {
  permissionAreaRights.push('*::' + c);
  permissionAreaRights.push('read::' + c);
});

var AuthStore = {
  storeTokenInfo: function storeTokenInfo(value, exp) {
    storeValue(KEYS.TOKEN_INFO, {
      value: value, exp: exp
    });
  },
  storeUserData: function storeUserData(userData) {
    storeValue(KEYS.USER_DATA, userData);
  },
  isTokenExpired: function isTokenExpired() {
    var tokenInfo = readValue(KEYS.TOKEN_INFO);
    if (!tokenInfo || !tokenInfo.exp || !tokenInfo.value) {
      return true;
    }
    return tokenInfo.exp < Math.floor(new Date().getTime() / 1000);
  },
  getUserName: function getUserName() {
    var userData = readValue(KEYS.USER_DATA);
    return userData && userData.name || '';
  },
  getToken: function getToken() {
    var tokenInfo = readValue(KEYS.TOKEN_INFO);
    return tokenInfo && tokenInfo.value;
  },
  getRights: function getRights() {
    var userData = readValue(KEYS.USER_DATA);
    if (!userData || !userData.rights) {
      return [];
    }
    return userData.rights;
  },
  hasAnyOfRights: function hasAnyOfRights(expectedRights) {
    var rights = AuthStore.getRights();
    return rights.reduce(function (result, right) {
      return result || expectedRights.indexOf(right) > -1;
    }, false);
  },
  canAccessPermissionsArea: function canAccessPermissionsArea() {
    return AuthStore.hasAnyOfRights(permissionAreaRights);
  },
  canUploadAssets: function canUploadAssets() {
    var expectedRights = ['*::*', 'upload-assets::*'];
    var models = Object.keys((0, _models.getModels)());
    models.filter(_models.NON_CRUD_MODELS_FILTER).forEach(function (m) {
      expectedRights.push('*::' + m);
      expectedRights.push('upload-assets::' + m);
    });
    return AuthStore.hasAnyOfRights(expectedRights);
  },
  canUploadAssetsForModel: function canUploadAssetsForModel(model) {
    var expectedRights = ['*::*', 'upload-assets::*', '*::' + model, 'upload-assets::' + model];
    return AuthStore.hasAnyOfRights(expectedRights);
  },
  canViewAssets: function canViewAssets() {
    var expectedRights = ['*::*', 'view-assets::*'];
    var models = Object.keys((0, _models.getModels)());
    models.filter(_models.NON_CRUD_MODELS_FILTER).forEach(function (m) {
      expectedRights.push('*::' + m);
      expectedRights.push('view-assets::' + m);
    });
    return AuthStore.hasAnyOfRights(expectedRights);
  },
  canViewAssetsForModel: function canViewAssetsForModel(model) {
    var expectedRights = ['*::*', 'view-assets::*', '*::' + model, 'view-assets::' + model];
    return AuthStore.hasAnyOfRights(expectedRights);
  },
  clear: function clear() {
    storeValue(KEYS.USER_DATA, null);
    storeValue(KEYS.TOKEN_INFO, null);
  }
};

exports.default = AuthStore;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AuthStore = __webpack_require__(5);

var _AuthStore2 = _interopRequireDefault(_AuthStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requester = __webpack_require__(29);

// const URL = (model, id) => (id ? `/${model}/${id}` : `/${model}`);
var UPLOAD_URL = '/administrator/model-upload-asset';
// const ASSET_URL = id => `/administrator/crud-asset/${id}`;
var ASSETS_URL = '/administrator/models-assets/';
var COUNT_URL = '/administrator/model-count';
var SEARCH_URL = '/administrator/model-search';
var DELETE_URL = '/administrator/model-delete';
var CREATE_URL = '/administrator/model-create';
var UPDATE_URL = '/administrator/model-update';
var SEARCH_ALL_URL = '/administrator/model-search-all';
var COUNT_ALL_MODELS_URL = '/administrator/all-models-count';
var LOGIN_URL = '/administrator/login';
var VIEW_CONTENT_URL = '/administrator/view-content';

var getDirection = function getDirection(d) {
  return d === 'ascending' ? 'ASC' : 'DESC';
};

var getConfig = function getConfig() {
  return {
    extraHeaders: {
      'jwt-token': _AuthStore2.default.getToken()
    }
  };
};

var Service = function Service(model) {
  return {
    fetchItems: function fetchItems(payload) {
      var _payload$pagination = payload.pagination,
          itemsPerPage = _payload$pagination.itemsPerPage,
          activePage = _payload$pagination.activePage;
      var _payload$sort = payload.sort,
          field = _payload$sort.field,
          direction = _payload$sort.direction;

      return requester.post(SEARCH_URL, {
        modelName: model,
        limit: itemsPerPage,
        skip: (activePage - 1) * itemsPerPage,
        sort: field + ' ' + getDirection(direction),
        queryRules: payload.queryRules
      }, getConfig()).then(function (result) {
        return Array.isArray(result) ? result : [];
      });
    },
    fetchAllItems: function fetchAllItems() {
      return requester.get(SEARCH_ALL_URL, { modelName: model }, getConfig()).then(function (result) {
        return Array.isArray(result) ? result : [];
      });
    },
    fetchAssets: function fetchAssets(payload) {
      return requester.post(ASSETS_URL, payload, getConfig()).then(function (result) {
        return Array.isArray(result) ? result : [];
      });
    },
    countAllModels: function countAllModels() {
      return requester.get(COUNT_ALL_MODELS_URL, {}, getConfig());
    },
    countItems: function countItems(payload) {
      return requester.post(COUNT_URL, {
        modelName: model,
        queryRules: payload.queryRules
      }, getConfig());
    },
    login: function login(data) {
      return requester.post(LOGIN_URL, data);
    },
    upload: function upload(data) {
      var _getConfig = getConfig(),
          extraHeaders = _getConfig.extraHeaders;

      var formData = new FormData();

      formData.append('name', data.name);
      formData.append('model', data.model);
      formData.append('type', data.type);
      formData.append('file', data.file);

      return fetch(UPLOAD_URL, {
        method: 'POST',
        headers: Object.assign({
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*'
        }, extraHeaders),
        body: formData
      }).then(function (response) {
        return response.json();
      });
    },
    create: function create(x) {
      var item = x;
      item.modelName = model;
      return requester.post(CREATE_URL, item, getConfig());
    },
    update: function update(x) {
      var data = x;
      data.modelName = model;
      return requester.put(UPDATE_URL + '/' + data.id, data, getConfig());
    },
    delete: function _delete(x) {
      var data = x;
      data.modelName = model;
      return requester.delete(DELETE_URL + '/' + data.id, data, getConfig());
    },
    viewContent: function viewContent(_ref) {
      var viewName = _ref.viewName,
          data = _ref.data;
      return requester.post(VIEW_CONTENT_URL, { viewName: viewName, data: data || {} }, getConfig());
    }
  };
};

exports.default = Service;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconForArea = exports.getButtonText = exports.getModelRelatedValue = exports.getViews = exports.getLabel = exports.getConfig = undefined;

var _object = __webpack_require__(12);

var getConfig = exports.getConfig = function getConfig() {
  return typeof window !== 'undefined' && window.crudAdminConfig ? window.crudAdminConfig : {};
};

var getLabel = exports.getLabel = function getLabel(prop, defaultValue) {
  var config = getConfig();
  return (0, _object.queryValue)(config, 'general.labels.' + prop, defaultValue);
};

var getViews = exports.getViews = function getViews() {
  var config = getConfig();
  return (0, _object.queryValue)(config, 'views', []);
};

var getModelRelatedValue = exports.getModelRelatedValue = function getModelRelatedValue(query, defaultValue) {
  var config = getConfig();
  return (0, _object.queryValue)(config, 'models.' + query, defaultValue);
};

var getButtonText = exports.getButtonText = function getButtonText(button, defaultValue) {
  var config = getConfig();
  return (0, _object.queryValue)(config, 'general.buttons.' + button, defaultValue);
};

var iconForArea = exports.iconForArea = function iconForArea(area) {
  switch (area) {
    case 'home':
      return 'home';
    case 'permissions':
      return 'key';
    case 'views':
      return 'code';
    default:
      return 'permissions';
  }
};

exports.default = {
  getConfig: getConfig,
  getLabel: getLabel,
  getButtonText: getButtonText,
  getModelRelatedValue: getModelRelatedValue,
  iconForArea: iconForArea,
  getViews: getViews
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

var _Header = __webpack_require__(52);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(53);

var _Footer2 = _interopRequireDefault(_Footer);

var _NavigationSidebar = __webpack_require__(54);

var _NavigationSidebar2 = _interopRequireDefault(_NavigationSidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  segment: {
    width: '95%',
    margin: '0 auto',
    border: 0,
    boxShadow: 'none',
    overflowX: 'auto',
    paddingTop: '1rem'
  }
};

var Main = function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main(props) {
    _classCallCheck(this, Main);

    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

    _this.state = {
      sidebarVisible: false
    };
    return _this;
  }

  _createClass(Main, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var sidebarVisible = this.state.sidebarVisible;
      var children = this.props.children;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _NavigationSidebar2.default,
          {
            sidebarVisible: sidebarVisible
          },
          _react2.default.createElement(
            'div',
            { className: 'content-top' },
            _react2.default.createElement(_Header2.default, {
              onShowMenuClicked: function onShowMenuClicked() {
                _this2.setState({
                  sidebarVisible: !sidebarVisible
                });
              }
            }),
            _react2.default.createElement(
              _semanticUiReact.Segment,
              { basic: true, style: styles.segment },
              children
            )
          ),
          _react2.default.createElement(_Footer2.default, null)
        )
      );
    }
  }]);

  return Main;
}(_react2.default.Component);

Main.propTypes = {
  children: _propTypes2.default.node.isRequired
};

exports.default = Main;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(7);

var _AuthStore = __webpack_require__(5);

var _AuthStore2 = _interopRequireDefault(_AuthStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (TargetComponent) {
  return function (props) {
    var allowed = !_AuthStore2.default.isTokenExpired();

    if (!allowed) return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/logout' });

    return _react2.default.createElement(TargetComponent, props);
  };
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maskValue = undefined;

var _vanillaMasker = __webpack_require__(27);

var _vanillaMasker2 = _interopRequireDefault(_vanillaMasker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
String.prototype.asTitle = function separateCamel() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.separateCamel = function separateCamel() {
  return this.replace(/([a-z])([A-Z])/g, '$1 $2');
};

var maskValue = exports.maskValue = function maskValue(mask, value) {
  return _vanillaMasker2.default.toPattern(value, mask);
};

exports.default = {
  maskValue: maskValue
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var queryValue = exports.queryValue = function queryValue(source) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var value = query.split('.').reduce(function (result, key) {
    return result && result[key] ? result[key] : null;
  }, source);
  return value || defaultValue;
};

var anyPropLike = exports.anyPropLike = function anyPropLike(properties, value) {
  return function (obj) {
    if (!properties || properties.length <= 0) return true;
    return properties.reduce(function (acc, x) {
      var target = ('' + queryValue(obj, x, '')).toLowerCase();
      var needle = ('' + value).toLowerCase();
      return acc || target.indexOf(needle) >= 0;
    }, false);
  };
};

var omit = exports.omit = function omit(source, properties) {
  if (!source) return source;

  if (Array.isArray(source)) {
    var result = JSON.parse(JSON.stringify(source));
    result.forEach(function (element, index) {
      result[index] = omit(result[index], properties);
    });
    return result;
  }

  return Object.keys(source).filter(function (k) {
    return properties.indexOf(k) < 0;
  }).reduce(function (acc, key) {
    var result = acc;
    result[key] = source[key];
    return result;
  }, {});
};

exports.default = {
  queryValue: queryValue,
  anyPropLike: anyPropLike,
  omit: omit
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _this.state = { value: props.value };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Select, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var value = this.props.value;

      if (nextProps.value !== value) {
        this.setState({ value: nextProps.value });
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var value = this.state.value;

      return value;
    }
  }, {
    key: 'handleChange',
    value: function handleChange(evt) {
      var onChange = this.props.onChange;

      onChange(evt, {
        value: evt.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          value = _props.value,
          placeholder = _props.placeholder,
          options = _props.options;

      var stateValue = this.getValue();
      return _react2.default.createElement(
        'select',
        {
          name: name,
          onChange: this.handleChange,
          value: value || ''
        },
        _react2.default.createElement(
          'option',
          {
            value: '',
            selected: !stateValue
          },
          placeholder
        ),
        options.map(function (option) {
          return _react2.default.createElement(
            'option',
            {
              key: option.key,
              value: option.value
            },
            option.text
          );
        })
      );
    }
  }]);

  return Select;
}(_react.Component);

Select.propTypes = {
  placeholder: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    key: _propTypes2.default.any,
    value: _propTypes2.default.any,
    text: _propTypes2.default.any
  })).isRequired,
  onChange: _propTypes2.default.func.isRequired
};

exports.default = Select;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(7);

var _semanticUiReact = __webpack_require__(2);

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _AuthStore = __webpack_require__(5);

var _AuthStore2 = _interopRequireDefault(_AuthStore);

var _config = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationMenu = function NavigationMenu(_ref) {
  var className = _ref.className;
  return _react2.default.createElement(
    _semanticUiReact.Container,
    { className: className },
    _react2.default.createElement(_semanticUiReact.Menu.Item, {
      as: _reactRouterDom.Link,
      icon: 'home',
      header: true,
      to: '/model',
      content: _constants2.default.LABELS.HOME
    }),
    !!Object.keys((0, _config.getViews)()).length && _react2.default.createElement(_semanticUiReact.Menu.Item, {
      as: _reactRouterDom.Link,
      icon: 'code',
      header: true,
      to: '/views',
      content: _constants2.default.LABELS.VIEWS
    }),
    _AuthStore2.default.canAccessPermissionsArea() && _react2.default.createElement(_semanticUiReact.Menu.Item, {
      as: _reactRouterDom.Link,
      icon: 'key',
      header: true,
      to: '/permissions',
      content: _constants2.default.LABELS.PERMISSIONS
    }),
    _react2.default.createElement(_semanticUiReact.Menu.Item, {
      as: _reactRouterDom.Link,
      header: true,
      icon: 'image',
      to: '/assets',
      content: _constants2.default.LABELS.ASSETS
    }),
    _react2.default.createElement(_semanticUiReact.Menu.Item, {
      as: _reactRouterDom.Link,
      header: true,
      icon: 'arrow right',
      to: '/logout',
      content: _constants2.default.LABELS.LOGOUT
    })
  );
};

NavigationMenu.propTypes = {
  className: _propTypes2.default.string.isRequired
};

exports.default = NavigationMenu;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(7);

var _semanticUiReact = __webpack_require__(2);

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

__webpack_require__(11);

var _config = __webpack_require__(8);

var _models = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  container: { marginBottom: '2rem' }
};

var backLink = function backLink(area) {
  switch (area) {
    case 'home':
      return '/model';
    case 'views':
      return '/views';
    default:
      return '/permissions';
  }
};

var MainBreadcrumb = function MainBreadcrumb(_ref) {
  var modelName = _ref.modelName,
      area = _ref.area;
  return _react2.default.createElement(
    _semanticUiReact.Breadcrumb,
    {
      size: 'huge',
      style: styles.container
    },
    _react2.default.createElement(
      _semanticUiReact.Breadcrumb.Section,
      {
        link: true,
        as: _reactRouterDom.Link,
        to: backLink(area)
      },
      _react2.default.createElement(_semanticUiReact.Icon, { color: 'teal', name: (0, _config.iconForArea)(area) }),
      '\xA0',
      _constants2.default.LABELS[area.toUpperCase()]
    ),
    _react2.default.createElement(_semanticUiReact.Breadcrumb.Divider, { icon: 'right angle' }),
    _react2.default.createElement(
      _semanticUiReact.Breadcrumb.Section,
      { active: true },
      (0, _models.modelTitle)(modelName)
    )
  );
};

MainBreadcrumb.defaultProps = {
  area: 'home'
};

MainBreadcrumb.propTypes = {
  area: _propTypes2.default.string,
  modelName: _propTypes2.default.string.isRequired
};

exports.default = MainBreadcrumb;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AuthStore = __webpack_require__(5);

var _AuthStore2 = _interopRequireDefault(_AuthStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isAllowed = function isAllowed(right) {
  var rights = _AuthStore2.default.getRights();
  var hasGlobalRight = rights.indexOf('*::*') > -1;
  return rights.reduce(function (result, r) {
    return result || r === right;
  }, hasGlobalRight);
};

exports.default = function () {
  var configRight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var failValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return function (TargetComponent) {
    var Wrapper = function Wrapper(props) {
      var right = props.right;

      var allowed = isAllowed(right || configRight || '');

      if (!allowed) return failValue;

      return _react2.default.createElement(TargetComponent, props);
    };

    Wrapper.defaultProps = {
      right: ''
    };

    Wrapper.propTypes = {
      right: _propTypes2.default.string
    };

    return Wrapper;
  };
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(7);

__webpack_require__(11);

var _config = __webpack_require__(8);

var _RightProtected = __webpack_require__(19);

var _RightProtected2 = _interopRequireDefault(_RightProtected);

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _models = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProtectedStat = (0, _RightProtected2.default)(null, null)(_semanticUiReact.Statistic);

var ModelsNavigator = function ModelsNavigator(props) {
  var area = props.area,
      models = props.models,
      counts = props.counts;

  var queryString = '?area=' + area;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _semanticUiReact.Header,
      { size: 'huge' },
      _react2.default.createElement(_semanticUiReact.Icon, { color: 'teal', name: (0, _config.iconForArea)(area) }),
      _constants2.default.LABELS[area.toUpperCase()]
    ),
    _react2.default.createElement(
      _semanticUiReact.Statistic.Group,
      {
        size: 'mini',
        className: 'models-navigator'
      },
      models.map(function (modelName) {
        return _react2.default.createElement(
          ProtectedStat,
          {
            right: 'read::' + modelName,
            className: 'models-navigator__link',
            as: _reactRouterDom.Link,
            to: '/model/' + modelName + queryString
          },
          _react2.default.createElement(
            _semanticUiReact.Statistic.Value,
            null,
            (0, _models.modelIcon)(modelName)
          ),
          _react2.default.createElement(
            _semanticUiReact.Statistic.Label,
            null,
            (0, _models.modelTitle)(modelName, false),
            ' ',
            '( ',
            counts[modelName] || 0,
            ' )'
          )
        );
      })
    )
  );
};

ModelsNavigator.defaultProps = {
  models: [],
  area: 'home',
  counts: {}
};

ModelsNavigator.propTypes = {
  models: _propTypes2.default.instanceOf(Array),
  area: _propTypes2.default.string,
  counts: _propTypes2.default.instanceOf(Object)
};

exports.default = ModelsNavigator;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(22);

var _Page = __webpack_require__(23);

var _Page2 = _interopRequireDefault(_Page);

var _App = __webpack_require__(24);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var body = (0, _server.renderToString)(_react2.default.createElement(_App2.default, null));
var title = 'Admin';

module.exports.renderPage = function (injection) {
  return (0, _Page2.default)({
    title: title,
    body: body,
    injection: injection
  });
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Page = function Page(_ref) {
  var body = _ref.body,
      title = _ref.title,
      injection = _ref.injection;
  return "\n  <!DOCTYPE html>\n  <html>\n    <head>\n      <title>" + title + "</title>\n      <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,shrink-to-fit=no\">\n      <link rel=\"stylesheet\" href=\"//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css\"></link>\n    </head>\n    <body style=\"margin:0\">\n      <div id=\"app\">" + body + "</div>\n      <script>\n        " + injection + "\n      </script>\n      <script src=\"/administrator/client.js\"> </script>\n    </body>\n  </html>\n";
};

exports.default = Page;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Routes = __webpack_require__(25);

var _Routes2 = _interopRequireDefault(_Routes);

__webpack_require__(66);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isBrowser = function isBrowser() {
  return typeof window !== 'undefined' && window.document;
};

var App = function App() {
  return _react2.default.createElement(
    'div',
    null,
    isBrowser() && _react2.default.createElement(_Routes2.default, null)
  );
};

exports.default = App;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(7);

var _Service = __webpack_require__(6);

var _Service2 = _interopRequireDefault(_Service);

var _LoginScreen = __webpack_require__(30);

var _LoginScreen2 = _interopRequireDefault(_LoginScreen);

var _LogoutScreen = __webpack_require__(33);

var _LogoutScreen2 = _interopRequireDefault(_LogoutScreen);

var _ModelDetailsScreen = __webpack_require__(34);

var _ModelDetailsScreen2 = _interopRequireDefault(_ModelDetailsScreen);

var _PermissionsScreen = __webpack_require__(55);

var _PermissionsScreen2 = _interopRequireDefault(_PermissionsScreen);

var _ModelsScreen = __webpack_require__(56);

var _ModelsScreen2 = _interopRequireDefault(_ModelsScreen);

var _AssetsScreen = __webpack_require__(57);

var _AssetsScreen2 = _interopRequireDefault(_AssetsScreen);

var _ViewsScreen = __webpack_require__(64);

var _ViewsScreen2 = _interopRequireDefault(_ViewsScreen);

var _ViewScreen = __webpack_require__(65);

var _ViewScreen2 = _interopRequireDefault(_ViewScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NAVIGATOR_PATHS = ['/model', '/permissions'];

var Routes = function (_React$Component) {
  _inherits(Routes, _React$Component);

  function Routes(props) {
    _classCallCheck(this, Routes);

    var _this = _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).call(this, props));

    _this.state = {
      counts: {}
    };
    return _this;
  }

  _createClass(Routes, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var history = this.props.history;

      this.updateCounts();
      history.listen(function (data) {
        if (NAVIGATOR_PATHS.indexOf(data.pathname) >= 0) {
          _this2.updateCounts();
        }
      });
    }
  }, {
    key: 'updateCounts',
    value: function updateCounts() {
      var _this3 = this;

      (0, _Service2.default)().countAllModels().then(function (counts) {
        _this3.setState({ counts: counts });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var counts = this.state.counts;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactRouterDom.Route, {
          exact: true,
          path: '/model/:modelName',
          component: _ModelDetailsScreen2.default
        }),
        _react2.default.createElement(_reactRouterDom.Route, {
          exact: true,
          path: '/model',
          component: function component() {
            return _react2.default.createElement(_ModelsScreen2.default, {
              counts: counts
            });
          }
        }),
        _react2.default.createElement(_reactRouterDom.Route, {
          exact: true,
          path: '/views',
          component: _ViewsScreen2.default
        }),
        _react2.default.createElement(_reactRouterDom.Route, {
          exact: true,
          path: '/views/:viewName',
          component: _ViewScreen2.default
        }),
        _react2.default.createElement(_reactRouterDom.Route, {
          exact: true,
          path: '/permissions',
          component: function component() {
            return _react2.default.createElement(_PermissionsScreen2.default, {
              counts: counts
            });
          }
        }),
        _react2.default.createElement(_reactRouterDom.Route, {
          exact: true,
          path: '/assets',
          component: _AssetsScreen2.default
        }),
        _react2.default.createElement(_reactRouterDom.Route, {
          exact: true,
          path: '/',
          component: _LoginScreen2.default
        }),
        _react2.default.createElement(_reactRouterDom.Route, {
          exact: true,
          path: '/logout',
          component: _LogoutScreen2.default
        })
      );
    }
  }]);

  return Routes;
}(_react2.default.Component);

Routes.propTypes = {
  history: _propTypes2.default.instanceOf(Object).isRequired
};

var AppRoutes = (0, _reactRouterDom.withRouter)(Routes);

exports.default = function () {
  return _react2.default.createElement(
    _reactRouterDom.HashRouter,
    null,
    _react2.default.createElement(AppRoutes, null)
  );
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("simple-json-table");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("vanilla-masker");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("lodash.template");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("simple-json-requester");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _reactRouter = __webpack_require__(31);

var _LoginForm = __webpack_require__(32);

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _AuthStore = __webpack_require__(5);

var _AuthStore2 = _interopRequireDefault(_AuthStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  container: {
    height: '100vh',
    position: 'relative',
    width: '100%',
    backgroundColor: '#f4f4f4'
  },
  grid: {
    height: '100vh',
    width: '100%'
  },
  loginWrapper: {
    maxWidth: 450,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
};

var LoginScreen = function (_React$Component) {
  _inherits(LoginScreen, _React$Component);

  function LoginScreen(props) {
    _classCallCheck(this, LoginScreen);

    var _this = _possibleConstructorReturn(this, (LoginScreen.__proto__ || Object.getPrototypeOf(LoginScreen)).call(this, props));

    _this.state = {
      loggedIn: false
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(LoginScreen, [{
    key: 'handleSubmit',
    value: function handleSubmit(res) {
      _AuthStore2.default.storeTokenInfo(res.token, res.exp);
      _AuthStore2.default.storeUserData(res.userData);
      this.setState({ loggedIn: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var loggedIn = this.state.loggedIn;

      if (loggedIn) {
        return _react2.default.createElement(_reactRouter.Redirect, { to: '/model' });
      }
      return _react2.default.createElement(
        'div',
        { style: styles.container },
        _react2.default.createElement(
          _semanticUiReact.Grid,
          {
            textAlign: 'center',
            style: styles.grid,
            verticalAlign: 'middle'
          },
          _react2.default.createElement(
            _semanticUiReact.Grid.Column,
            { style: styles.loginWrapper },
            _react2.default.createElement(_LoginForm2.default, {
              onSubmitSuccess: this.handleSubmit
            })
          )
        )
      );
    }
  }]);

  return LoginScreen;
}(_react2.default.Component);

exports.default = LoginScreen;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _formik = __webpack_require__(15);

var _semanticUiReact = __webpack_require__(2);

var _Service = __webpack_require__(6);

var _Service2 = _interopRequireDefault(_Service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inputClass = function inputClass(field) {
  return function (errors, touched) {
    return errors[field] && touched[field] ? 'text-input error' : 'text-input';
  };
};

var Error = function Error(_ref) {
  var field = _ref.field,
      errors = _ref.errors,
      touched = _ref.touched;

  if (!touched[field] || !errors[field]) return null;
  return _react2.default.createElement(
    _semanticUiReact.Label,
    { basic: true, color: 'red', pointing: true },
    errors[field]
  );
};

Error.propTypes = {
  field: _propTypes2.default.string.isRequired,
  touched: _propTypes2.default.instanceOf(Object).isRequired,
  errors: _propTypes2.default.instanceOf(Object).isRequired
};

var styles = {
  field: {
    textAlign: 'left'
  }
};

var LoginForm = function LoginForm(props) {
  var values = props.values,
      touched = props.touched,
      errors = props.errors,
      isSubmitting = props.isSubmitting,
      handleChange = props.handleChange,
      handleBlur = props.handleBlur,
      handleSubmit = props.handleSubmit;

  var userFieldClass = inputClass('username')(errors, touched);
  var passwordFieldClass = inputClass('password')(errors, touched);
  return _react2.default.createElement(
    _semanticUiReact.Form,
    {
      onSubmit: handleSubmit,
      size: 'large'
    },
    _react2.default.createElement(
      _semanticUiReact.Segment,
      null,
      _react2.default.createElement(_semanticUiReact.Header, {
        as: 'h2',
        color: 'black',
        textAlign: 'center',
        content: 'Login'
      }),
      _react2.default.createElement(
        _semanticUiReact.Form.Field,
        {
          style: styles.field,
          className: userFieldClass
        },
        _react2.default.createElement(_semanticUiReact.Input, {
          fluid: true,
          name: 'username',
          icon: 'user',
          iconPosition: 'left',
          placeholder: 'Username',
          value: values.username,
          onChange: handleChange,
          onBlur: handleBlur
        }),
        _react2.default.createElement(Error, {
          field: 'username',
          touched: touched,
          errors: errors
        })
      ),
      _react2.default.createElement(
        _semanticUiReact.Form.Field,
        {
          style: styles.field,
          className: passwordFieldClass
        },
        _react2.default.createElement(_semanticUiReact.Input, {
          fluid: true,
          name: 'password',
          icon: 'lock',
          iconPosition: 'left',
          placeholder: 'password',
          type: 'password',
          value: values.password,
          onChange: handleChange,
          onBlur: handleBlur,
          maxLength: 45
        }),
        _react2.default.createElement(Error, {
          field: 'password',
          touched: touched,
          errors: errors
        })
      ),
      _react2.default.createElement(
        _semanticUiReact.Button,
        {
          color: 'teal',
          icon: 'send',
          fluid: true,
          size: 'large',
          disabled: isSubmitting
        },
        'Login'
      )
    )
  );
};

LoginForm.propTypes = {
  values: _propTypes2.default.instanceOf(Object).isRequired,
  touched: _propTypes2.default.instanceOf(Object).isRequired,
  errors: _propTypes2.default.instanceOf(Object).isRequired,
  isSubmitting: _propTypes2.default.bool.isRequired,
  handleChange: _propTypes2.default.func.isRequired,
  handleBlur: _propTypes2.default.func.isRequired,
  handleSubmit: _propTypes2.default.func.isRequired
};

var transformAPIErrors = function transformAPIErrors(error) {
  var errors = {};
  if (error.fields) {
    Object.keys(error.fields).forEach(function (k) {
      errors[k] = error.fields[k];
    });
  }
  return errors;
};

exports.default = (0, _formik.withFormik)({
  mapPropsToValues: function mapPropsToValues() {
    return {
      username: '',
      password: ''
    };
  },
  validate: function validate(values) {
    var errors = {};
    if (!values.username) {
      errors.username = 'The username is required!';
    }
    if (!values.password) {
      errors.password = 'The password is required!';
    }
    return errors;
  },
  handleSubmit: function handleSubmit(values, _ref2) {
    var setSubmitting = _ref2.setSubmitting,
        setErrors = _ref2.setErrors,
        props = _ref2.props;
    return (0, _Service2.default)().login(values).then(function (res) {
      if (res.error) {
        setErrors(transformAPIErrors(res.error));
      } else if (res.token && res.success) {
        props.onSubmitSuccess(res);
      }
      setSubmitting(false);
      return res;
    });
  },
  displayName: 'LoginForm'
})(LoginForm);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(7);

var _AuthStore = __webpack_require__(5);

var _AuthStore2 = _interopRequireDefault(_AuthStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LogoutScreen = function (_Component) {
  _inherits(LogoutScreen, _Component);

  function LogoutScreen(props) {
    _classCallCheck(this, LogoutScreen);

    var _this = _possibleConstructorReturn(this, (LogoutScreen.__proto__ || Object.getPrototypeOf(LogoutScreen)).call(this, props));

    _this.state = {
      done: false
    };
    return _this;
  }

  _createClass(LogoutScreen, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _AuthStore2.default.clear();
      this.setState({ done: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var done = this.state.done;

      if (done) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
      }
      return _react2.default.createElement(_semanticUiReact.Header, { content: 'Processing...' });
    }
  }]);

  return LogoutScreen;
}(_react.Component);

exports.default = LogoutScreen;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

var _queryString = __webpack_require__(16);

var _queryString2 = _interopRequireDefault(_queryString);

var _Service = __webpack_require__(6);

var _Service2 = _interopRequireDefault(_Service);

var _ModelCrud = __webpack_require__(35);

var _ModelCrud2 = _interopRequireDefault(_ModelCrud);

var _models = __webpack_require__(3);

var _Main = __webpack_require__(9);

var _Main2 = _interopRequireDefault(_Main);

var _MainBreadcrumb = __webpack_require__(18);

var _MainBreadcrumb2 = _interopRequireDefault(_MainBreadcrumb);

var _RightProtected = __webpack_require__(19);

var _RightProtected2 = _interopRequireDefault(_RightProtected);

var _LoggedInProtected = __webpack_require__(10);

var _LoggedInProtected2 = _interopRequireDefault(_LoggedInProtected);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = (0, _LoggedInProtected2.default)(_Main2.default);

var ProtectedModelCrud = (0, _RightProtected2.default)(null, _react2.default.createElement(_semanticUiReact.Message, {
  size: 'huge',
  visible: true,
  error: true,
  content: 'You do not have permission to view'
}))(_ModelCrud2.default);

var styles = {
  container: {
    margin: 'auto',
    width: 'fit-content'
  }
};

var ModelDetailsScreen = function ModelDetailsScreen(_ref) {
  var match = _ref.match,
      location = _ref.location;
  var modelName = match.params.modelName;

  var values = _queryString2.default.parse(location.search);
  return _react2.default.createElement(
    Main,
    null,
    _react2.default.createElement(_MainBreadcrumb2.default, {
      area: values.area || 'home',
      modelName: modelName
    }),
    _react2.default.createElement(
      'div',
      { style: styles.container },
      _react2.default.createElement(ProtectedModelCrud, {
        right: 'read::' + modelName,
        key: modelName,
        model: (0, _models.getModel)(modelName),
        service: (0, _Service2.default)(modelName),
        modelName: modelName
      })
    )
  );
};

ModelDetailsScreen.propTypes = {
  match: _propTypes2.default.instanceOf(Object).isRequired,
  location: _propTypes2.default.instanceOf(Object).isRequired
};

exports.default = ModelDetailsScreen;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

var _reactCrudTable = __webpack_require__(36);

var _reactCrudTable2 = _interopRequireDefault(_reactCrudTable);

var _lodash = __webpack_require__(13);

var _lodash2 = _interopRequireDefault(_lodash);

var _validation = __webpack_require__(37);

var _models = __webpack_require__(3);

__webpack_require__(11);

var _renderers = __webpack_require__(38);

var _renderers2 = _interopRequireDefault(_renderers);

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _AuthStore = __webpack_require__(5);

var _AuthStore2 = _interopRequireDefault(_AuthStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  container: { margin: 'auto', width: 'fit-content' }
};

var ModelCrud = function (_React$Component) {
  _inherits(ModelCrud, _React$Component);

  function ModelCrud(props) {
    _classCallCheck(this, ModelCrud);

    var _this = _possibleConstructorReturn(this, (ModelCrud.__proto__ || Object.getPrototypeOf(ModelCrud)).call(this, props));

    _this.handleCreateSubmit = _this.handleCreateSubmit.bind(_this);
    _this.handleUpdateSubmit = _this.handleUpdateSubmit.bind(_this);
    _this.handleDeleteSubmit = _this.handleDeleteSubmit.bind(_this);
    return _this;
  }

  _createClass(ModelCrud, [{
    key: 'getCreateForm',
    value: function getCreateForm() {
      var _props = this.props,
          model = _props.model,
          modelName = _props.modelName;

      var allowed = _AuthStore2.default.hasAnyOfRights((0, _models.createRights)(modelName));

      if (!allowed) return null;

      return _react2.default.createElement(_reactCrudTable.CreateForm, {
        title: _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_semanticUiReact.Icon, { name: 'plus', color: 'teal' }),
          ' ',
          _constants2.default.LABELS.CREATE_FORM_TITLE
        ),
        message: _constants2.default.LABELS.CREATE_FORM_MESSAGE,
        trigger: _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_semanticUiReact.Icon, { name: 'plus' }),
          ' ',
          _constants2.default.BUTTONS.CREATE
        ),
        onSubmit: this.handleCreateSubmit,
        submitText: _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_semanticUiReact.Icon, { name: 'plus' }),
          ' ',
          _constants2.default.BUTTONS.CREATE
        ),
        validate: (0, _validation.validateModelRequiredValues)(model),
        generalErrorMessage: _constants2.default.LABELS.GENERAL_ERROR_MESSAGE
      });
    }
  }, {
    key: 'getUpdateForm',
    value: function getUpdateForm() {
      var _props2 = this.props,
          modelName = _props2.modelName,
          model = _props2.model;

      var allowed = _AuthStore2.default.hasAnyOfRights((0, _models.updateRights)(modelName));

      if (!allowed) return null;

      return _react2.default.createElement(_reactCrudTable.UpdateForm, {
        title: _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_semanticUiReact.Icon, { name: 'pencil', color: 'teal' }),
          ' ',
          _constants2.default.LABELS.UPDATE_FORM_TITLE
        ),
        message: _constants2.default.LABELS.UPDATE_FORM_MESSAGE,
        trigger: _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_semanticUiReact.Icon, { name: 'pencil' }),
          ' ',
          _constants2.default.BUTTONS.UPDATE
        ),
        onSubmit: this.handleUpdateSubmit,
        submitText: _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_semanticUiReact.Icon, { name: 'pencil' }),
          ' ',
          _constants2.default.BUTTONS.UPDATE
        ),
        validate: (0, _validation.validateModelRequiredValues)(model),
        generalErrorMessage: _constants2.default.LABELS.GENERAL_ERROR_MESSAGE
      });
    }
  }, {
    key: 'getDeleteForm',
    value: function getDeleteForm() {
      var modelName = this.props.modelName;

      var allowed = _AuthStore2.default.hasAnyOfRights((0, _models.removeRights)(modelName));

      if (!allowed) return null;

      return _react2.default.createElement(_reactCrudTable.DeleteForm, {
        title: _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_semanticUiReact.Icon, { name: 'close', color: 'red' }),
          ' ',
          _constants2.default.LABELS.REMOVE_FORM_TITLE
        ),
        message: _constants2.default.LABELS.REMOVE_FORM_MESSAGE,
        trigger: _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_semanticUiReact.Icon, { name: 'close' }),
          ' ',
          _constants2.default.BUTTONS.REMOVE
        ),
        onSubmit: this.handleDeleteSubmit,
        submitText: _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_semanticUiReact.Icon, { name: 'close' }),
          ' ',
          _constants2.default.BUTTONS.REMOVE
        ),
        validate: _validation.validateModelDeletion,
        generalErrorMessage: _constants2.default.LABELS.GENERAL_ERROR_MESSAGE
      });
    }
  }, {
    key: 'handleCreateSubmit',
    value: function handleCreateSubmit(item) {
      var _props3 = this.props,
          service = _props3.service,
          onChange = _props3.onChange;

      return new Promise(function (resolve) {
        service.create(item).then(function (result) {
          onChange();
          resolve(result);
        });
      });
    }
  }, {
    key: 'handleUpdateSubmit',
    value: function handleUpdateSubmit(data) {
      var _props4 = this.props,
          model = _props4.model,
          service = _props4.service;

      var payload = data;
      Object.keys(payload).forEach(function (k) {
        if (model[k] && model[k].collection) {
          payload[k] = payload[k].map(function (x) {
            return x.id || x;
          });
        }

        if (model[k] && model[k].model) {
          payload[k] = payload[k].id || payload[k];
        }
      });
      return service.update(payload);
    }
  }, {
    key: 'handleDeleteSubmit',
    value: function handleDeleteSubmit(item) {
      var _props5 = this.props,
          onChange = _props5.onChange,
          service = _props5.service;

      return new Promise(function (resolve) {
        service.delete(item).then(function (result) {
          onChange();
          resolve(result);
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props6 = this.props,
          model = _props6.model,
          modelName = _props6.modelName,
          service = _props6.service;

      return _react2.default.createElement(
        'div',
        { style: styles.container },
        _react2.default.createElement(
          _reactCrudTable2.default,
          {
            caption: (0, _models.modelTitle)(modelName),
            fetchItems: function fetchItems(data) {
              var payload = Object.assign({}, data);
              payload.queryRules = data.queryRules.map(function (i) {
                return _lodash2.default.omit(i, ['label']);
              });
              return service.fetchItems(payload);
            },
            showQueryBuilder: true,
            actionsLabel: _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_semanticUiReact.Icon, { name: 'wrench', color: 'teal' }),
              ' ',
              _constants2.default.LABELS.ACTIONS
            )
          },
          _react2.default.createElement(
            _reactCrudTable.Fields,
            null,
            model && Object.keys(model).sort(_models.keysSorter).map(function (k) {
              return _react2.default.createElement(_reactCrudTable.Field, {
                name: k,
                label: (0, _models.getFieldLabel)(modelName, k),
                hideInCreateForm: (0, _models.inCreationHiddenFields)(k),
                hideInUpdateForm: (0, _models.inUpdateHiddenFields)(k),
                type: (0, _models.getType)(model, k),
                queryable: !!model[k].type,
                sortable: !!model[k].type,
                tableValueResolver: (0, _models.valueResolver)(model, k, modelName),
                render: (0, _renderers2.default)(model, k, modelName)
              });
            })
          ),
          this.getCreateForm(),
          this.getUpdateForm(),
          this.getDeleteForm(),
          _react2.default.createElement(_reactCrudTable.Pagination, {
            fetchTotalOfItems: function fetchTotalOfItems(payload) {
              return service.countItems(payload);
            },
            itemsPerPage: 15,
            activePage: 1
          })
        )
      );
    }
  }]);

  return ModelCrud;
}(_react2.default.Component);

ModelCrud.defaultProps = {
  onChange: function onChange() {}
};

ModelCrud.propTypes = {
  onChange: _propTypes2.default.func,
  service: _propTypes2.default.instanceOf(Object).isRequired,
  modelName: _propTypes2.default.string.isRequired,
  model: _propTypes2.default.instanceOf(Object).isRequired
};

exports.default = ModelCrud;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("react-crud-table");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var validateModelRequiredValues = exports.validateModelRequiredValues = function validateModelRequiredValues(model) {
  return function (values) {
    var errors = {};
    var requiredFields = Object.keys(model).filter(function (k) {
      return model[k].required;
    });
    requiredFields.forEach(function (k) {
      if (!values[k]) {
        errors[k] = 'Please, provide ' + k + '.';
      }
    });
    return errors;
  };
};

var validateModelDeletion = exports.validateModelDeletion = function validateModelDeletion(values) {
  var errors = {};
  if (!values.id) {
    errors.id = 'Please, provide id';
  }
  return errors;
};

var transformAPIErrors = exports.transformAPIErrors = function transformAPIErrors(error) {
  var errors = {};
  if (error.fields) {
    Object.keys(error.fields).forEach(function (k) {
      errors[k] = error.fields[k];
    });
  }
  return errors;
};

exports.default = {
  validateModelRequiredValues: validateModelRequiredValues,
  validateModelDeletion: validateModelDeletion,
  transformAPIErrors: transformAPIErrors
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = __webpack_require__(3);

var _DescriptionRenderer = __webpack_require__(39);

var _DescriptionRenderer2 = _interopRequireDefault(_DescriptionRenderer);

var _InputRenderer = __webpack_require__(40);

var _InputRenderer2 = _interopRequireDefault(_InputRenderer);

var _CheckboxRenderer = __webpack_require__(41);

var _CheckboxRenderer2 = _interopRequireDefault(_CheckboxRenderer);

var _EnumSelectRenderer = __webpack_require__(42);

var _EnumSelectRenderer2 = _interopRequireDefault(_EnumSelectRenderer);

var _ModelsSelectRenderer = __webpack_require__(43);

var _ModelsSelectRenderer2 = _interopRequireDefault(_ModelsSelectRenderer);

var _MultipleModelsSelectRenderer = __webpack_require__(44);

var _MultipleModelsSelectRenderer2 = _interopRequireDefault(_MultipleModelsSelectRenderer);

var _RightsRenderer = __webpack_require__(45);

var _RightsRenderer2 = _interopRequireDefault(_RightsRenderer);

var _PasswordRenderer = __webpack_require__(47);

var _PasswordRenderer2 = _interopRequireDefault(_PasswordRenderer);

var _PictureRenderer = __webpack_require__(48);

var _PictureRenderer2 = _interopRequireDefault(_PictureRenderer);

var _DateRendererer = __webpack_require__(51);

var _DateRendererer2 = _interopRequireDefault(_DateRendererer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RENDERERS = {
  textarea: function textarea() {
    return _DescriptionRenderer2.default;
  },
  input: function input(model, field, modelName) {
    return (0, _InputRenderer2.default)(modelName);
  },
  password: function password() {
    return _PasswordRenderer2.default;
  },
  date: function date() {
    return _DateRendererer2.default;
  },
  checkbox: function checkbox() {
    return _CheckboxRenderer2.default;
  },
  rights: function rights() {
    return _RightsRenderer2.default;
  },
  picture: function picture(model, field, modelName) {
    return (0, _PictureRenderer2.default)(modelName);
  },
  enum: function _enum(model, field) {
    return (0, _EnumSelectRenderer2.default)(model[field].validations.isIn);
  },
  modelSelect: function modelSelect(model, field) {
    return (0, _ModelsSelectRenderer2.default)(model[field].model);
  },
  modelMultipleSelect: function modelMultipleSelect(model, field) {
    return (0, _MultipleModelsSelectRenderer2.default)(model[field].collection);
  }
};

var renderer = function renderer(model, field, modelName) {
  var rendererType = (0, _models.getFieldRenderer)(modelName, field);
  if (rendererType && RENDERERS[rendererType]) {
    return RENDERERS[rendererType](model, field, modelName);
  }

  if (modelName === 'crudgroup' && field === 'rights') {
    return RENDERERS.rights(model);
  }

  if (model[field].type === 'boolean') {
    return RENDERERS.checkbox(model);
  }

  if (model[field].validations && model[field].validations.isIn) {
    return RENDERERS.enum(model, field);
  }

  if (model[field].model) {
    return RENDERERS.modelSelect(model, field);
  }

  if (model[field].collection) {
    return RENDERERS.modelMultipleSelect(model, field);
  }

  return RENDERERS.input(model, field, modelName);
};

exports.default = renderer;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DescriptionRenderer = function DescriptionRenderer(_ref) {
  var field = _ref.field;
  return _react2.default.createElement('textarea', field);
};

DescriptionRenderer.propTypes = {
  field: _propTypes2.default.instanceOf(Object).isRequired
};

exports.default = DescriptionRenderer;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _string = __webpack_require__(11);

var _models = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (modelName) {
  var InputRenderer = function InputRenderer(_ref) {
    var field = _ref.field;

    var mask = (0, _models.getFieldMask)(modelName, field.name);
    var value = mask ? (0, _string.maskValue)(mask, field.value || '') : field.value;
    return _react2.default.createElement('input', _extends({}, field, {
      value: value,
      onChange: function onChange(evt) {
        var event = evt;
        event.target.value = mask ? (0, _string.maskValue)(mask, evt.target.value || '') : evt.target.value;
        field.onChange(event);
      }
    }));
  };

  InputRenderer.propTypes = {
    field: _propTypes2.default.instanceOf(Object).isRequired
  };

  return InputRenderer;
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckboxRenderer = function CheckboxRenderer(_ref) {
  var field = _ref.field;
  return _react2.default.createElement('input', _extends({}, field, {
    type: 'checkbox',
    checked: !!field.value
  }));
};

CheckboxRenderer.propTypes = {
  field: _propTypes2.default.instanceOf(Object).isRequired
};

exports.default = CheckboxRenderer;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Select = __webpack_require__(14);

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EnumSelectRenderer = function EnumSelectRenderer(items) {
  var EnumSelect = function EnumSelect(_ref) {
    var field = _ref.field;
    return _react2.default.createElement(_Select2.default, _extends({}, field, {
      options: items.map(function (x) {
        return {
          value: x,
          key: x,
          text: x
        };
      })
    }));
  };
  EnumSelect.propTypes = {
    field: _propTypes2.default.instanceOf(Object).isRequired
  };
  return EnumSelect;
};

exports.default = EnumSelectRenderer;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Select = __webpack_require__(14);

var _Select2 = _interopRequireDefault(_Select);

var _Service = __webpack_require__(6);

var _Service2 = _interopRequireDefault(_Service);

var _models = __webpack_require__(3);

var _object = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapOptions = function mapOptions(model) {
  return function (x) {
    return {
      value: x.id,
      key: x.id,
      text: (0, _models.getModelValue)(model, x) || model + ' (id: ' + x.id + ')'
    };
  };
};

var ModelsSelect = function (_Component) {
  _inherits(ModelsSelect, _Component);

  function ModelsSelect(props) {
    _classCallCheck(this, ModelsSelect);

    var _this = _possibleConstructorReturn(this, (ModelsSelect.__proto__ || Object.getPrototypeOf(ModelsSelect)).call(this, props));

    _this.state = {
      items: []
    };
    return _this;
  }

  _createClass(ModelsSelect, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var model = this.props.model;

      var service = (0, _Service2.default)(model);
      service.fetchAllItems({}).then(function (items) {
        _this2.setState({ items: items });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          field = _props.field,
          model = _props.model;
      var items = this.state.items;

      return _react2.default.createElement(_Select2.default, _extends({}, field, {
        value: (0, _object.queryValue)(field, 'value.id', field.value),
        options: items.map(mapOptions(model))
      }));
    }
  }]);

  return ModelsSelect;
}(_react.Component);

ModelsSelect.propTypes = {
  model: _propTypes2.default.string.isRequired,
  field: _propTypes2.default.string.isRequired
};

exports.default = function (model) {
  var Wrapper = function Wrapper(_ref) {
    var field = _ref.field;
    return _react2.default.createElement(ModelsSelect, {
      field: field,
      model: model
    });
  };
  Wrapper.propTypes = {
    field: _propTypes2.default.instanceOf(Object).isRequired
  };
  return Wrapper;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

var _Select = __webpack_require__(14);

var _Select2 = _interopRequireDefault(_Select);

var _Service = __webpack_require__(6);

var _Service2 = _interopRequireDefault(_Service);

var _models = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getText = function getText(model, x) {
  return x && (0, _models.getModelValue)(model, x) || model + ' (id: ' + x.id + ')';
};

var mapOption = function mapOption(model) {
  return function (x) {
    return {
      value: x.id,
      key: x.id,
      text: getText(model, x)
    };
  };
};

var styles = {
  addButton: {
    minWidth: 'fit-content',
    marginLeft: '1rem'
  },
  removeButton: {
    minWidth: 'fit-content',
    marginLeft: '1rem',
    float: 'right'
  },
  container: {
    border: '1px solid #ccc',
    borderRadius: '3px',
    padding: '1rem',
    textAlign: 'left',
    margin: '.5rem 0'
  },
  item: {
    lineHeight: '36px'
  }
};

var ModelsSelect = function (_Component) {
  _inherits(ModelsSelect, _Component);

  function ModelsSelect(props) {
    _classCallCheck(this, ModelsSelect);

    var _this = _possibleConstructorReturn(this, (ModelsSelect.__proto__ || Object.getPrototypeOf(ModelsSelect)).call(this, props));

    _this.state = {
      items: [],
      ids: [],
      id: null
    };
    _this.handleAdd = _this.handleAdd.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleRemove = _this.handleRemove.bind(_this);
    return _this;
  }

  _createClass(ModelsSelect, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var model = this.props.model;

      var service = (0, _Service2.default)(model);
      service.fetchAllItems({}).then(function (items) {
        _this2.setState({ items: items });
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var ids = nextProps.field.value && nextProps.field.value.map(function (x) {
        return x && x.id || x;
      }) || [];
      this.setState({ ids: ids });
    }
  }, {
    key: 'triggerOnChange',
    value: function triggerOnChange(evt, ids) {
      var field = this.props.field;

      var e = evt;
      e.target = {
        name: field.name,
        value: ids
      };
      field.onChange(e);
    }
  }, {
    key: 'handleAdd',
    value: function handleAdd(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      var _state = this.state,
          id = _state.id,
          ids = _state.ids;

      if (id) {
        var newIds = [].concat(_toConsumableArray(ids), [+id]);
        this.setState({ ids: newIds, id: null });
        this.triggerOnChange(evt, newIds);
      }
    }
  }, {
    key: 'handleRemove',
    value: function handleRemove(evt, id) {
      evt.preventDefault();
      evt.stopPropagation();

      var ids = this.state.ids;

      var filteredIds = ids.filter(function (x) {
        return x !== id;
      });
      this.setState({ ids: filteredIds });
      this.triggerOnChange(evt, filteredIds);
    }
  }, {
    key: 'handleChange',
    value: function handleChange(evt) {
      this.setState({ id: evt.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state2 = this.state,
          ids = _state2.ids,
          items = _state2.items,
          id = _state2.id;
      var model = this.props.model;

      return _react2.default.createElement(
        'div',
        { style: styles.container },
        _react2.default.createElement(
          _semanticUiReact.List,
          { divided: true, relaxed: true },
          ids.map(function (itemId) {
            return _react2.default.createElement(
              _semanticUiReact.List.Item,
              {
                key: itemId
              },
              _react2.default.createElement(
                _semanticUiReact.List.Content,
                { style: styles.item },
                getText(model, items.find(function (x) {
                  return x.id === itemId;
                })),
                '\xA0',
                _react2.default.createElement(_semanticUiReact.Button, {
                  color: 'red',
                  onClick: function onClick(evt) {
                    _this3.handleRemove(evt, itemId);
                  },
                  circular: true,
                  icon: 'close',
                  style: styles.removeButton
                })
              )
            );
          })
        ),
        _react2.default.createElement(_semanticUiReact.Divider, null),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Select2.default, {
            value: id,
            onChange: this.handleChange,
            options: items.map(mapOption(model))
          }),
          _react2.default.createElement(_semanticUiReact.Button, {
            color: 'green',
            onClick: this.handleAdd,
            icon: 'plus',
            circular: true,
            style: styles.addButton
          })
        )
      );
    }
  }]);

  return ModelsSelect;
}(_react.Component);

ModelsSelect.propTypes = {
  model: _propTypes2.default.string.isRequired,
  field: _propTypes2.default.shape({
    value: _propTypes2.default.instanceOf(Array)
  }).isRequired
};

exports.default = function (model) {
  var Wrapper = function Wrapper(_ref) {
    var field = _ref.field;
    return _react2.default.createElement(ModelsSelect, {
      field: field,
      model: model
    });
  };
  Wrapper.propTypes = {
    field: _propTypes2.default.instanceOf(Object).isRequired
  };
  return Wrapper;
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rightsSelector = __webpack_require__(46);

var _rightsSelector2 = _interopRequireDefault(_rightsSelector);

var _Service = __webpack_require__(6);

var _Service2 = _interopRequireDefault(_Service);

var _models = __webpack_require__(3);

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RightsItems = function (_Component) {
  _inherits(RightsItems, _Component);

  function RightsItems(props) {
    _classCallCheck(this, RightsItems);

    var _this = _possibleConstructorReturn(this, (RightsItems.__proto__ || Object.getPrototypeOf(RightsItems)).call(this, props));

    _this.state = {
      items: []
    };
    return _this;
  }

  _createClass(RightsItems, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var service = (0, _Service2.default)('crudright');
      service.fetchAllItems({}).then(function (items) {
        _this2.setState({ items: items });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var items = this.state.items;
      var children = this.props.children;

      return children(items);
    }
  }]);

  return RightsItems;
}(_react.Component);

RightsItems.propTypes = {
  children: _propTypes2.default.func.isRequired
};

var extractAction = function extractAction(r) {
  return r.replace(/(.+)::(.+)/, '$1');
};
var extractResource = function extractResource(r) {
  return r.replace(/(.+)::(.+)/, '$2');
};

var RightsRenderer = function RightsRenderer(_ref) {
  var field = _ref.field;
  return _react2.default.createElement(
    RightsItems,
    null,
    function (items) {
      var userRightsIds = (field.value || []).map(function (r) {
        return r.id || r;
      });
      var userRights = items.filter(function (r) {
        return userRightsIds.indexOf(r.id) >= 0;
      }).map(function (r) {
        return r.name;
      });

      var rightsToInject = {};
      userRights.forEach(function (r) {
        var action = extractAction(r);
        var resource = extractResource(r);
        rightsToInject[resource] = rightsToInject[resource] || {};
        rightsToInject[resource][action] = true;
      });

      var rights = items.map(function (r) {
        return r.name;
      });
      var actions = {};
      var resources = {};
      rights.forEach(function (r) {
        var action = extractAction(r);
        var resource = extractResource(r);
        actions[action] = action;
        resources[resource] = resource;
      });

      return _react2.default.createElement(_rightsSelector2.default, {
        rights: rightsToInject,
        actionsLabel: _constants2.default.LABELS.ACTIONS,
        resourcesLabel: _constants2.default.LABELS.RESOURCES,
        actions: Object.keys(actions).map(function (a) {
          return {
            label: a,
            value: a
          };
        }),
        resources: Object.keys(resources).map(function (a) {
          return {
            label: (0, _models.modelTitle)(a),
            value: a
          };
        }),
        onChange: function onChange(values) {
          var ids = [];
          Object.keys(values).forEach(function (resource) {
            Object.keys(values[resource]).forEach(function (action) {
              if (values[resource][action]) {
                var right = items.find(function (x) {
                  return x.name === action + '::' + resource;
                });
                if (right) {
                  ids.push(right.id);
                }
              }
            });
          });
          field.onChange({
            persist: function persist() {},
            target: {
              name: field.name,
              value: ids
            }
          });
        }
      });
    }
  );
};

RightsRenderer.propTypes = {
  field: _propTypes2.default.instanceOf(Object).isRequired
};

exports.default = RightsRenderer;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("rights-selector");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PasswordRenderer = function PasswordRenderer(_ref) {
  var field = _ref.field;
  return _react2.default.createElement('input', _extends({ type: 'password' }, field));
};

PasswordRenderer.propTypes = {
  field: _propTypes2.default.instanceOf(Object).isRequired
};

exports.default = PasswordRenderer;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Service = __webpack_require__(6);

var _Service2 = _interopRequireDefault(_Service);

var _ImagesSelect = __webpack_require__(49);

var _ImagesSelect2 = _interopRequireDefault(_ImagesSelect);

var _ResourceItem = __webpack_require__(50);

var _ResourceItem2 = _interopRequireDefault(_ResourceItem);

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var service = (0, _Service2.default)('crudasset');

var PictureRenderer = function PictureRenderer(modelName) {
  var Wrapper = function Wrapper(_ref) {
    var field = _ref.field;
    return _react2.default.createElement(
      _ResourceItem2.default,
      { data: service.fetchAllItems() },
      function (assets) {
        var imagesUrls = (assets || []).filter(function (a) {
          return a.type === _constants2.default.ASSETS_TYPES.PICTURE;
        }).filter(function (a) {
          return a.model === modelName;
        }).map(function (i) {
          return i.url;
        });
        return _react2.default.createElement(_ImagesSelect2.default, _extends({}, field, {
          images: imagesUrls
        }));
      }
    );
  };

  Wrapper.propTypes = {
    field: _propTypes2.default.instanceOf(Object).isRequired
  };

  return Wrapper;
};

exports.default = PictureRenderer;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  container: {
    margin: '1rem 0'
  },
  image: {
    width: '100%',
    maxWidth: '120px'
  }
};

var selectionClass = function selectionClass(selected) {
  return selected && 'selected-picture';
};

var ImagesSelect = function (_React$Component) {
  _inherits(ImagesSelect, _React$Component);

  function ImagesSelect(props) {
    _classCallCheck(this, ImagesSelect);

    var _this = _possibleConstructorReturn(this, (ImagesSelect.__proto__ || Object.getPrototypeOf(ImagesSelect)).call(this, props));

    _this.state = {
      selectedImage: null
    };
    return _this;
  }

  _createClass(ImagesSelect, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ selectedImage: nextProps.value });
    }
  }, {
    key: 'handleImageSelection',
    value: function handleImageSelection(selectedImage, evt) {
      var _props = this.props,
          name = _props.name,
          onChange = _props.onChange;

      this.setState({ selectedImage: selectedImage });
      var event = evt;
      event.target.value = selectedImage;
      event.target.name = name;
      onChange(event);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var images = this.props.images;
      var selectedImage = this.state.selectedImage;


      if (images.lenth <= 0) {
        return _react2.default.createElement(_semanticUiReact.Message, {
          info: true,
          icon: 'info',
          content: 'There are no items to show'
        });
      }

      return _react2.default.createElement(
        'div',
        { style: styles.container },
        _react2.default.createElement(
          _semanticUiReact.Card.Group,
          { itemsPerRow: 3 },
          images.map(function (image) {
            return _react2.default.createElement(_semanticUiReact.Card, {
              onClick: function onClick(evt) {
                _this2.handleImageSelection(image, evt);
              },
              raised: true,
              image: image,
              className: selectionClass(selectedImage === image),
              style: styles.image
            });
          })
        ),
        _react2.default.createElement(_semanticUiReact.Divider, null)
      );
    }
  }]);

  return ImagesSelect;
}(_react2.default.Component);

ImagesSelect.propTypes = {
  images: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  onChange: _propTypes2.default.func.isRequired,
  name: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.string.isRequired
};

exports.default = ImagesSelect;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResourceItem = function (_React$Component) {
  _inherits(ResourceItem, _React$Component);

  function ResourceItem(props) {
    _classCallCheck(this, ResourceItem);

    var _this = _possibleConstructorReturn(this, (ResourceItem.__proto__ || Object.getPrototypeOf(ResourceItem)).call(this, props));

    _this.state = {
      result: null
    };
    return _this;
  }

  _createClass(ResourceItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var data = this.props.data;

      data.then(function (result) {
        _this2.setState({ result: result });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          defaultValue = _props.defaultValue;
      var result = this.state.result;

      return _react2.default.createElement(
        'div',
        null,
        children(result || defaultValue)
      );
    }
  }]);

  return ResourceItem;
}(_react2.default.Component);

ResourceItem.propTypes = {
  data: _propTypes2.default.instanceOf(Promise).isRequired,
  children: _propTypes2.default.func.isRequired,
  defaultValue: _propTypes2.default.string.isRequired
};

exports.default = ResourceItem;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateRenderer = function DateRenderer(_ref) {
  var field = _ref.field;
  return _react2.default.createElement('input', _extends({ type: 'date' }, field));
};

DateRenderer.propTypes = {
  field: _propTypes2.default.instanceOf(Object).isRequired
};

exports.default = DateRenderer;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _AuthStore = __webpack_require__(5);

var _AuthStore2 = _interopRequireDefault(_AuthStore);

var _NavigationMenu = __webpack_require__(17);

var _NavigationMenu2 = _interopRequireDefault(_NavigationMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  wrapper: {
    backgroundColor: '#444',
    padding: '1rem',
    marginBottom: '3rem',
    borderRadius: 0
  }
};

var Header = function Header(_ref) {
  var onShowMenuClicked = _ref.onShowMenuClicked;
  return _react2.default.createElement(
    _semanticUiReact.Menu,
    {
      inverted: true,
      style: styles.wrapper
    },
    _react2.default.createElement(_semanticUiReact.Menu.Item, {
      header: true,
      content: _constants2.default.LABELS.WELCOME + ' ' + _AuthStore2.default.getUserName() + '!'
    }),
    _react2.default.createElement(_NavigationMenu2.default, { className: 'hide-mobile' }),
    _react2.default.createElement(_semanticUiReact.Button, {
      onClick: onShowMenuClicked,
      className: 'show-mobile menu-button',
      icon: 'bars',
      color: 'teal'
    })
  );
};

Header.propTypes = {
  onShowMenuClicked: _propTypes2.default.func.isRequired
};

exports.default = Header;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  wrapper: {
    padding: '5em 0em',
    marginTop: '4rem',
    backgroundColor: '#444',
    textAlign: 'center'
  }
};

var Footer = function Footer() {
  return _react2.default.createElement(
    _semanticUiReact.Segment,
    {
      inverted: true,
      vertical: true,
      style: styles.wrapper
    },
    _react2.default.createElement(
      _semanticUiReact.Container,
      null,
      _react2.default.createElement(
        _semanticUiReact.Grid,
        { divided: true, inverted: true, stackable: true },
        _react2.default.createElement(
          _semanticUiReact.Grid.Row,
          null,
          _react2.default.createElement(
            _semanticUiReact.Grid.Column,
            { width: 16 },
            _react2.default.createElement(
              _semanticUiReact.Header,
              { as: 'h2', inverted: true },
              'CRUD Admin'
            )
          )
        )
      )
    )
  );
};

exports.default = Footer;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

var _NavigationMenu = __webpack_require__(17);

var _NavigationMenu2 = _interopRequireDefault(_NavigationMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  pushable: { border: 0 }
};

var NavigationSidebar = function NavigationSidebar(_ref) {
  var sidebarVisible = _ref.sidebarVisible,
      children = _ref.children;
  return _react2.default.createElement(
    _semanticUiReact.Sidebar.Pushable,
    {
      as: _semanticUiReact.Segment,
      style: styles.pushable
    },
    _react2.default.createElement(
      _semanticUiReact.Sidebar,
      {
        as: _semanticUiReact.Menu,
        animation: 'push',
        width: 'thin',
        visible: sidebarVisible,
        icon: 'labeled',
        vertical: true,
        inverted: true
      },
      _react2.default.createElement(_NavigationMenu2.default, null)
    ),
    _react2.default.createElement(
      _semanticUiReact.Sidebar.Pusher,
      null,
      children
    )
  );
};

NavigationSidebar.propTypes = {
  children: _propTypes2.default.node.isRequired,
  sidebarVisible: _propTypes2.default.bool.isRequired
};

exports.default = NavigationSidebar;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LoggedInProtected = __webpack_require__(10);

var _LoggedInProtected2 = _interopRequireDefault(_LoggedInProtected);

var _ModelsNavigator = __webpack_require__(20);

var _ModelsNavigator2 = _interopRequireDefault(_ModelsNavigator);

var _Main = __webpack_require__(9);

var _Main2 = _interopRequireDefault(_Main);

var _models = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = (0, _LoggedInProtected2.default)(_Main2.default);

var PermissionsScreen = function PermissionsScreen(_ref) {
  var counts = _ref.counts;

  var models = Object.keys((0, _models.getModels)()).filter(_models.CRUD_MODELS_FILTER);
  return _react2.default.createElement(
    Main,
    null,
    _react2.default.createElement(_ModelsNavigator2.default, {
      models: models,
      counts: counts,
      area: 'permissions'
    })
  );
};

PermissionsScreen.propTypes = {
  counts: _propTypes2.default.instanceOf(Object).isRequired
};

exports.default = PermissionsScreen;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LoggedInProtected = __webpack_require__(10);

var _LoggedInProtected2 = _interopRequireDefault(_LoggedInProtected);

var _ModelsNavigator = __webpack_require__(20);

var _ModelsNavigator2 = _interopRequireDefault(_ModelsNavigator);

var _Main = __webpack_require__(9);

var _Main2 = _interopRequireDefault(_Main);

var _models = __webpack_require__(3);

var _config = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = (0, _LoggedInProtected2.default)(_Main2.default);

var ModelsScreen = function ModelsScreen(_ref) {
  var counts = _ref.counts;

  var models = Object.keys((0, _models.getModels)()).filter(_models.NON_CRUD_MODELS_FILTER).filter((0, _models.VISIBLE_MODELS_FILTER)((0, _config.getConfig)().models || {}));
  return _react2.default.createElement(
    Main,
    null,
    _react2.default.createElement(_ModelsNavigator2.default, {
      models: models,
      counts: counts
    })
  );
};

ModelsScreen.propTypes = {
  counts: _propTypes2.default.instanceOf(Object).isRequired
};

exports.default = ModelsScreen;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

var _Service = __webpack_require__(6);

var _Service2 = _interopRequireDefault(_Service);

var _LoggedInProtected = __webpack_require__(10);

var _LoggedInProtected2 = _interopRequireDefault(_LoggedInProtected);

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _Main = __webpack_require__(9);

var _Main2 = _interopRequireDefault(_Main);

var _UploadAssetModal = __webpack_require__(58);

var _UploadAssetModal2 = _interopRequireDefault(_UploadAssetModal);

var _AssetsList = __webpack_require__(63);

var _AssetsList2 = _interopRequireDefault(_AssetsList);

var _AuthStore = __webpack_require__(5);

var _AuthStore2 = _interopRequireDefault(_AuthStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = (0, _LoggedInProtected2.default)(_Main2.default);

var styles = {
  pane: { border: 0 }
};

var service = (0, _Service2.default)('crudasset');

var Assets = function (_React$Component) {
  _inherits(Assets, _React$Component);

  function Assets(props) {
    _classCallCheck(this, Assets);

    var _this = _possibleConstructorReturn(this, (Assets.__proto__ || Object.getPrototypeOf(Assets)).call(this, props));

    _this.state = {
      items: [],
      loading: true
    };
    _this.loadItems = _this.loadItems.bind(_this);
    return _this;
  }

  _createClass(Assets, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var canView = _AuthStore2.default.canViewAssets();
      if (canView) {
        this.loadItems();
      } else {
        this.setState({ loading: false });
      }
    }
  }, {
    key: 'loadItems',
    value: function loadItems() {
      var _this2 = this;

      var type = this.props.type;

      service.fetchAssets({ type: type }).then(function (items) {
        _this2.setState({ items: items, loading: false });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var type = this.props.type;
      var _state = this.state,
          loading = _state.loading,
          items = _state.items;


      if (loading) return _react2.default.createElement(_semanticUiReact.Loader, { active: true });

      var canUpload = _AuthStore2.default.canUploadAssets();
      var canView = _AuthStore2.default.canViewAssets();
      return _react2.default.createElement(
        'div',
        null,
        canUpload && _react2.default.createElement(_UploadAssetModal2.default, {
          type: type,
          onSuccess: this.loadItems
        }),
        _react2.default.createElement(_semanticUiReact.Divider, { hidden: true }),
        canView && _react2.default.createElement(_AssetsList2.default, {
          type: type,
          items: items
        }),
        !canView && _react2.default.createElement(_semanticUiReact.Message, {
          warning: true,
          icon: 'warning',
          content: 'You do not have permission for viewing assets!'
        })
      );
    }
  }]);

  return Assets;
}(_react2.default.Component);

Assets.propTypes = {
  type: _propTypes2.default.string.isRequired
};

var panes = [{
  menuItem: { key: 'pictures', icon: 'image', content: 'Pictures' },
  render: function render() {
    return _react2.default.createElement(
      _semanticUiReact.Tab.Pane,
      { style: styles.pane },
      _react2.default.createElement(Assets, { type: _constants2.default.ASSETS_TYPES.PICTURE })
    );
  }
}, {
  menuItem: { key: 'files', icon: 'file', content: 'Files' },
  render: function render() {
    return _react2.default.createElement(
      _semanticUiReact.Tab.Pane,
      { style: styles.pane },
      _react2.default.createElement(Assets, { type: _constants2.default.ASSETS_TYPES.FILE })
    );
  }
}];

var AssetsScreen = function AssetsScreen() {
  return _react2.default.createElement(
    Main,
    null,
    _react2.default.createElement(
      _semanticUiReact.Header,
      { as: 'h1' },
      _react2.default.createElement(_semanticUiReact.Icon, {
        name: 'image',
        color: 'teal'
      }),
      ' ',
      'Assets'
    ),
    _react2.default.createElement(_semanticUiReact.Tab, {
      menu: { pointing: true },
      panes: panes
    })
  );
};

AssetsScreen.propTypes = {};

exports.default = AssetsScreen;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

var _UploadAssetForm = __webpack_require__(59);

var _UploadAssetForm2 = _interopRequireDefault(_UploadAssetForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  content: { padding: '1.5rem 0' }
};

var UploadAssetModal = function (_React$Component) {
  _inherits(UploadAssetModal, _React$Component);

  function UploadAssetModal(props) {
    _classCallCheck(this, UploadAssetModal);

    var _this = _possibleConstructorReturn(this, (UploadAssetModal.__proto__ || Object.getPrototypeOf(UploadAssetModal)).call(this, props));

    _this.state = {
      open: false
    };
    _this.showModal = _this.showModal.bind(_this);
    _this.hideModal = _this.hideModal.bind(_this);
    return _this;
  }

  _createClass(UploadAssetModal, [{
    key: 'showModal',
    value: function showModal() {
      this.setState({ open: true });
    }
  }, {
    key: 'hideModal',
    value: function hideModal() {
      this.setState({ open: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          type = _props.type,
          onSuccess = _props.onSuccess;
      var open = this.state.open;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_semanticUiReact.Button, {
          color: 'blue',
          content: 'Upload ' + type,
          icon: 'upload',
          onClick: function onClick() {
            _this2.showModal();
          }
        }),
        _react2.default.createElement(
          _semanticUiReact.Modal,
          {
            open: open,
            onClose: function onClose() {
              _this2.hideModal();
            },
            size: 'tiny',
            closeIcon: true
          },
          _react2.default.createElement(
            _semanticUiReact.Modal.Header,
            null,
            _react2.default.createElement(_semanticUiReact.Icon, { name: 'upload', color: 'teal' }),
            'Uploading Asset'
          ),
          _react2.default.createElement(
            _semanticUiReact.Modal.Content,
            { style: styles.content },
            _react2.default.createElement(_UploadAssetForm2.default, {
              type: type,
              onSubmitSuccess: function onSubmitSuccess() {
                _this2.hideModal();
                onSuccess();
              }
            })
          )
        )
      );
    }
  }]);

  return UploadAssetModal;
}(_react2.default.Component);

UploadAssetModal.propTypes = {
  onSuccess: _propTypes2.default.func.isRequired,
  type: _propTypes2.default.string.isRequired
};

exports.default = UploadAssetModal;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _formik = __webpack_require__(15);

var _semanticUiReact = __webpack_require__(2);

var _FileInput = __webpack_require__(60);

var _FileInput2 = _interopRequireDefault(_FileInput);

var _ModelsSelect = __webpack_require__(61);

var _ModelsSelect2 = _interopRequireDefault(_ModelsSelect);

var _Service = __webpack_require__(6);

var _Service2 = _interopRequireDefault(_Service);

var _ErrorMessage = __webpack_require__(62);

var _ErrorMessage2 = _interopRequireDefault(_ErrorMessage);

var _AuthStore = __webpack_require__(5);

var _AuthStore2 = _interopRequireDefault(_AuthStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  field: {
    textAlign: 'left'
  }
};

var UploadAssetForm = function UploadAssetForm(props) {
  var values = props.values,
      touched = props.touched,
      errors = props.errors,
      isSubmitting = props.isSubmitting,
      handleChange = props.handleChange,
      handleBlur = props.handleBlur,
      handleSubmit = props.handleSubmit;

  return _react2.default.createElement(
    _semanticUiReact.Form,
    {
      onSubmit: handleSubmit,
      size: 'large'
    },
    _react2.default.createElement(
      'div',
      { className: 'crud-modal-form__fields' },
      _react2.default.createElement(
        _semanticUiReact.Form.Field,
        { style: styles.field },
        _react2.default.createElement(_ModelsSelect2.default, {
          fluid: true,
          name: 'model',
          label: 'Model',
          value: values.model,
          onChange: handleChange,
          onBlur: handleBlur,
          placeholder: 'Select model',
          filter: function filter(item) {
            return _AuthStore2.default.canUploadAssetsForModel(item.value);
          }
        }),
        _react2.default.createElement(_ErrorMessage2.default, {
          field: 'model',
          touched: touched,
          errors: errors
        })
      ),
      _react2.default.createElement(
        _semanticUiReact.Form.Field,
        { style: styles.field },
        _react2.default.createElement(_FileInput2.default, {
          fluid: true,
          name: 'file',
          icon: 'file',
          label: 'File',
          iconPosition: 'left',
          placeholder: 'Select file',
          value: values.file,
          onChange: handleChange,
          onBlur: handleBlur
        }),
        _react2.default.createElement(_ErrorMessage2.default, {
          field: 'file',
          touched: touched,
          errors: errors
        })
      ),
      _react2.default.createElement(
        _semanticUiReact.Form.Field,
        { style: styles.field },
        _react2.default.createElement(
          'label',
          { htmlFor: 'name' },
          'Name',
          _react2.default.createElement(_semanticUiReact.Input, {
            fluid: true,
            name: 'name',
            icon: 'file text',
            iconPosition: 'left',
            placeholder: 'Name',
            value: values.name,
            onChange: handleChange,
            onBlur: handleBlur
          })
        ),
        _react2.default.createElement(_ErrorMessage2.default, {
          field: 'name',
          touched: touched,
          errors: errors
        })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'crud-modal-form__footer' },
      _react2.default.createElement(
        _semanticUiReact.Button,
        {
          color: 'teal',
          icon: 'send',
          fluid: true,
          size: 'large',
          disabled: isSubmitting
        },
        _react2.default.createElement(_semanticUiReact.Icon, { name: 'send' }),
        ' ',
        'Send'
      )
    )
  );
};

UploadAssetForm.propTypes = {
  values: _propTypes2.default.instanceOf(Object).isRequired,
  touched: _propTypes2.default.instanceOf(Object).isRequired,
  errors: _propTypes2.default.instanceOf(Object).isRequired,
  isSubmitting: _propTypes2.default.bool.isRequired,
  handleChange: _propTypes2.default.func.isRequired,
  handleBlur: _propTypes2.default.func.isRequired,
  handleSubmit: _propTypes2.default.func.isRequired
};

exports.default = (0, _formik.withFormik)({
  mapPropsToValues: function mapPropsToValues(_ref) {
    var type = _ref.type;
    return {
      file: null,
      model: '',
      name: '',
      type: type
    };
  },
  validate: function validate(values) {
    var errors = {};
    if (!values.file) {
      errors.file = 'Please select the file!';
    }
    if (!values.model) {
      errors.model = 'Please select the model';
    }

    if (!values.type) {
      errors.type = 'Please select the type';
    }

    if (!values.name) {
      errors.name = 'Please insert the name';
    }

    return errors;
  },
  handleSubmit: function handleSubmit(values, _ref2) {
    var setSubmitting = _ref2.setSubmitting,
        setError = _ref2.setError,
        props = _ref2.props;
    return (0, _Service2.default)(values.model).upload(values).then(function (res) {
      var onSubmitSuccess = props.onSubmitSuccess;

      onSubmitSuccess(res);
      setSubmitting(false);
      return res;
    }).catch(function (err) {
      setError(err);
      setSubmitting(false);
    });
  },
  displayName: 'UploadAssetForm'
})(UploadAssetForm);

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileInput = function (_React$Component) {
  _inherits(FileInput, _React$Component);

  function FileInput(props) {
    _classCallCheck(this, FileInput);

    var _this = _possibleConstructorReturn(this, (FileInput.__proto__ || Object.getPrototypeOf(FileInput)).call(this, props));

    _this.state = { value: null };
    return _this;
  }

  _createClass(FileInput, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          label = _props.label,
          _onChange = _props.onChange;
      var value = this.state.value;

      return _react2.default.createElement(
        'label',
        { htmlFor: 'file' },
        label,
        _react2.default.createElement('input', _extends({}, this.props, {
          type: 'file',
          value: value,
          multiple: 'multiple',
          onChange: function onChange(event) {
            _this2.setState({ value: event.target.value });
            _onChange({
              persist: function persist() {},
              target: {
                name: event.target.name,
                type: event.target.type,
                value: event.target.files[0]
              }
            });
          }
        }))
      );
    }
  }]);

  return FileInput;
}(_react2.default.Component);

FileInput.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  label: _propTypes2.default.string.isRequired
};

exports.default = FileInput;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

var _models = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModelsSelect = function ModelsSelect(props) {
  var models = Object.keys((0, _models.getModels)()).filter(_models.NON_CRUD_MODELS_FILTER);
  var options = models.map(function (m) {
    return {
      key: m,
      value: m,
      text: (0, _models.modelTitle)(m)
    };
  });
  var _onChange = props.onChange,
      filter = props.filter,
      name = props.name;

  return _react2.default.createElement(_semanticUiReact.Form.Select, _extends({}, props, {
    options: options.filter(filter),
    search: true,
    onChange: function onChange(e, data) {
      _onChange({
        persist: function persist() {},
        target: {
          name: name,
          value: data.value
        }
      });
    }
  }));
};

ModelsSelect.defaultProps = {
  filter: function filter() {
    return true;
  }
};

ModelsSelect.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  filter: _propTypes2.default.func,
  name: _propTypes2.default.string.isRequired
};

exports.default = ModelsSelect;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorMessage = function ErrorMessage(_ref) {
  var field = _ref.field,
      errors = _ref.errors,
      touched = _ref.touched;

  if (!touched[field] || !errors[field]) return null;
  return _react2.default.createElement(
    _semanticUiReact.Label,
    { basic: true, color: 'red', pointing: true },
    errors[field]
  );
};

ErrorMessage.propTypes = {
  field: _propTypes2.default.string.isRequired,
  errors: _propTypes2.default.instanceOf(Object).isRequired,
  touched: _propTypes2.default.instanceOf(Object).isRequired
};

exports.default = ErrorMessage;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = __webpack_require__(13);

var _lodash2 = _interopRequireDefault(_lodash);

var _semanticUiReact = __webpack_require__(2);

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _models = __webpack_require__(3);

var _AuthStore = __webpack_require__(5);

var _AuthStore2 = _interopRequireDefault(_AuthStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  item: {
    fontSize: '1em',
    width: 'fit-content',
    display: 'inline-flex',
    border: '1px solid #ccc',
    margin: '.5rem',
    borderRadius: '5px',
    overflow: 'hidden',
    padding: '1rem'
  },
  picture: {
    width: '100%',
    maxWidth: '200px',
    maxHeight: '200px',
    objectFit: 'contain'
  }
};

var isPicture = function isPicture(type) {
  return _constants2.default.ASSETS_TYPES.PICTURE === type;
};

var AssetItem = function AssetItem(_ref) {
  var type = _ref.type,
      url = _ref.url,
      name = _ref.name;
  return _react2.default.createElement(
    _semanticUiReact.Card,
    { style: styles.item },
    isPicture(type) && _react2.default.createElement(
      _semanticUiReact.Card.Content,
      null,
      _react2.default.createElement(_semanticUiReact.Image, {
        src: url,
        style: styles.picture
      })
    ),
    !isPicture(type) && _react2.default.createElement(
      _semanticUiReact.Card.Content,
      null,
      _react2.default.createElement(_semanticUiReact.Icon, {
        size: 'huge',
        name: 'file outline'
      })
    ),
    _react2.default.createElement(
      _semanticUiReact.Card.Header,
      { textAlign: 'center' },
      name,
      !isPicture(type) && _react2.default.createElement(
        'a',
        { href: url },
        '\xA0\xA0',
        _react2.default.createElement(_semanticUiReact.Icon, { size: 'large', name: 'download' })
      )
    )
  );
};

AssetItem.propTypes = {
  type: _propTypes2.default.string.isRequired,
  url: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired
};

var AssetsList = function AssetsList(props) {
  var items = props.items,
      type = props.type;

  var filteredItems = items.filter(function (x) {
    return x.type === type;
  });
  var groupedItems = _lodash2.default.groupBy(filteredItems, 'model');
  var keys = Object.keys(groupedItems);

  return _react2.default.createElement(
    'div',
    null,
    keys.map(function (name) {
      if (!_AuthStore2.default.canViewAssetsForModel(name)) {
        return null;
      }

      return _react2.default.createElement(
        _semanticUiReact.Card,
        { fluid: true },
        _react2.default.createElement(
          _semanticUiReact.Card.Content,
          null,
          _react2.default.createElement(
            _semanticUiReact.Card.Header,
            null,
            (0, _models.modelTitle)(name),
            ' ',
            type,
            's'
          )
        ),
        _react2.default.createElement(
          _semanticUiReact.Card.Content,
          null,
          _react2.default.createElement(
            _semanticUiReact.Card.Group,
            null,
            groupedItems[name].map(function (item) {
              return _react2.default.createElement(AssetItem, _extends({}, item, {
                type: type
              }));
            })
          )
        )
      );
    })
  );
};

AssetsList.propTypes = {
  items: _propTypes2.default.instanceOf(Array).isRequired,
  type: _propTypes2.default.string.isRequired
};

exports.default = AssetsList;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(7);

var _semanticUiReact = __webpack_require__(2);

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _Main = __webpack_require__(9);

var _Main2 = _interopRequireDefault(_Main);

var _LoggedInProtected = __webpack_require__(10);

var _LoggedInProtected2 = _interopRequireDefault(_LoggedInProtected);

var _config = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import PropTypes from 'prop-types';
var Main = (0, _LoggedInProtected2.default)(_Main2.default);

var styles = {
  container: {
    margin: 'auto',
    width: 'fit-content'
  }
};

var views = (0, _config.getViews)();

var ViewScreen = function ViewScreen() {
  return _react2.default.createElement(
    Main,
    null,
    _react2.default.createElement(
      _semanticUiReact.Header,
      { as: 'h1' },
      _react2.default.createElement(_semanticUiReact.Icon, {
        name: 'code',
        color: 'teal'
      }),
      ' ',
      _constants2.default.LABELS.VIEWS
    ),
    _react2.default.createElement(
      'div',
      { style: styles.container },
      Object.keys(views).filter(function (k) {
        return !views[k].hide;
      }).map(function (key) {
        return _react2.default.createElement(
          _reactRouterDom.Link,
          {
            className: 'views-list-item',
            to: '/views/' + key,
            key: key
          },
          _react2.default.createElement(
            'div',
            { className: 'views-list-item__value' },
            _react2.default.createElement(_semanticUiReact.Icon, {
              name: views[key].icon
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'views-list-item__label' },
            key
          )
        );
      })
    )
  );
};

ViewScreen.propTypes = {};

exports.default = ViewScreen;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(2);

var _queryString = __webpack_require__(16);

var _queryString2 = _interopRequireDefault(_queryString);

var _Main = __webpack_require__(9);

var _Main2 = _interopRequireDefault(_Main);

var _MainBreadcrumb = __webpack_require__(18);

var _MainBreadcrumb2 = _interopRequireDefault(_MainBreadcrumb);

var _LoggedInProtected = __webpack_require__(10);

var _LoggedInProtected2 = _interopRequireDefault(_LoggedInProtected);

var _Service = __webpack_require__(6);

var _Service2 = _interopRequireDefault(_Service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = (0, _LoggedInProtected2.default)(_Main2.default);

var service = (0, _Service2.default)();

var styles = {
  container: {
    margin: 'auto',
    width: 'fit-content'
  }
};

var LoadingIndicator = function LoadingIndicator(_ref) {
  var active = _ref.active;
  return _react2.default.createElement(
    _semanticUiReact.Dimmer,
    { active: active, inverted: true },
    _react2.default.createElement(
      _semanticUiReact.Loader,
      { inverted: true },
      'Loading'
    )
  );
};

var ViewScreen = function (_React$Component) {
  _inherits(ViewScreen, _React$Component);

  function ViewScreen(props) {
    _classCallCheck(this, ViewScreen);

    var _this = _possibleConstructorReturn(this, (ViewScreen.__proto__ || Object.getPrototypeOf(ViewScreen)).call(this, props));

    _this.state = {
      content: '',
      loading: false
    };
    return _this;
  }

  _createClass(ViewScreen, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          match = _props.match,
          location = _props.location;
      var viewName = match.params.viewName;

      var data = _queryString2.default.parse(location.search);
      this.loadContent({ data: data, viewName: viewName });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _props2 = this.props,
          match = _props2.match,
          location = _props2.location;
      var viewName = match.params.viewName;

      var nextSearch = nextProps.location.search;
      var nextViewName = nextProps.match.params.viewName;
      if (location.search !== nextSearch || nextViewName !== viewName) {
        var data = _queryString2.default.parse(nextSearch);
        this.loadContent({ data: data, viewName: nextViewName });
      }
    }
  }, {
    key: 'loadContent',
    value: function loadContent(_ref2) {
      var _this2 = this;

      var viewName = _ref2.viewName,
          data = _ref2.data;

      this.setState({ loading: true });
      service.viewContent({ viewName: viewName, data: data }).then(function (_ref3) {
        var content = _ref3.content;

        _this2.setState({ content: content, loading: false });
      }).catch(function () {
        _this2.setState({
          content: '<h1>Error!</h1>',
          loading: false
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          content = _state.content,
          loading = _state.loading;
      var match = this.props.match;
      var viewName = match.params.viewName;

      return _react2.default.createElement(
        Main,
        null,
        _react2.default.createElement(_MainBreadcrumb2.default, {
          area: 'views',
          modelName: viewName
        }),
        _react2.default.createElement(LoadingIndicator, {
          active: loading
        }),
        _react2.default.createElement('div', {
          style: styles.container,
          dangerouslySetInnerHTML: {
            __html: content
          }
        })
      );
    }
  }]);

  return ViewScreen;
}(_react2.default.Component);

ViewScreen.propTypes = {
  match: _propTypes2.default.instanceOf(Object).isRequired,
  location: _propTypes2.default.instanceOf(Object).isRequired
};

exports.default = ViewScreen;

/***/ }),
/* 66 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);