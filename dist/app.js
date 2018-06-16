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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
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
exports.updateRights = exports.removeRights = exports.createRights = exports.modelTitle = exports.CRUD_MODELS_FILTER = exports.NON_CRUD_MODELS_FILTER = exports.getFieldRenderer = exports.getFieldLabel = exports.valueResolver = exports.getModelValue = exports.getModelValueTemplate = exports.getFieldValueTemplate = exports.getType = exports.keysSorter = exports.inUpdateHiddenFields = exports.inCreationHiddenFields = exports.getModel = exports.getModels = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _simpleJsonTable = __webpack_require__(34);

var _simpleJsonTable2 = _interopRequireDefault(_simpleJsonTable);

var _lodash = __webpack_require__(18);

var _lodash2 = _interopRequireDefault(_lodash);

var _object = __webpack_require__(12);

var _config = __webpack_require__(8);

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

__webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var template = __webpack_require__(35);
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

    // if () {
    //   return (
    //     <img
    //       alt={item[field]}
    //       src={pictureURL(item[field])}
    //       width="80"
    //     />
    //   )
    //   // tableValueResolver={item => (

    //   // )}
    //   // render={({ field }) => <FileInput {...field} />}
    // }

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
  return (0, _config.getModelRelatedValue)(modelName + '.fields.' + field + '.label', field.separateCamel().asTitle());
};

var getFieldRenderer = exports.getFieldRenderer = function getFieldRenderer(modelName, field) {
  return (0, _config.getModelRelatedValue)(modelName + '.fields.' + field + '.renderer', field.separateCamel().asTitle());
};

var NON_CRUD_MODELS_FILTER = exports.NON_CRUD_MODELS_FILTER = function NON_CRUD_MODELS_FILTER(model) {
  return _constants2.default.CRUD_MODELS.indexOf(model) < 0;
};

var CRUD_MODELS_FILTER = exports.CRUD_MODELS_FILTER = function CRUD_MODELS_FILTER(model) {
  return _constants2.default.CRUD_MODELS.indexOf(model) >= 0;
};

var modelTitle = exports.modelTitle = function modelTitle(modelName) {
  return (0, _config.getModelRelatedValue)(modelName + '.label') || modelName.asTitle();
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
  removeRights: removeRights
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
    REMOVE_FORM_MESSAGE: (0, _config.getLabel)('removeFormMessage', 'Are you sure you want to remove the item?')
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

var _AuthStore = __webpack_require__(7);

var _AuthStore2 = _interopRequireDefault(_AuthStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requester = __webpack_require__(24);


var URL = function URL(model, id) {
  return id ? '/' + model + '/' + id : '/' + model;
};
var UPLOAD_URL = '/administrator/model-upload-asset';
var ASSET_URL = function ASSET_URL(id) {
  return '/administrator/crud-asset/' + id;
};
var COUNT_URL = '/administrator/model-count';
var SEARCH_URL = '/administrator/model-search';
var DELETE_URL = '/administrator/model-delete';
var CREATE_URL = '/administrator/model-create';
var UPDATE_URL = '/administrator/model-update';
var SEARCH_ALL_URL = '/administrator/model-search-all';
var COUNT_ALL_MODELS_URL = '/administrator/all-models-count';
var LOGIN_URL = '/administrator/login';

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
      var formData = new FormData();
      formData.append('file', data.file);
      formData.append('name', data.name);
      formData.append('model', data.model);
      formData.append('type', data.type);
      return fetch(UPLOAD_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: formData
      }).then(function (response) {
        return response.json();
      });
    },
    create: function create(item) {
      item.modelName = model;
      return requester.post(CREATE_URL, item, getConfig());
    },
    update: function update(data) {
      data.modelName = model;
      return requester.put(UPDATE_URL + '/' + data.id, data, getConfig());
    },
    delete: function _delete(data) {
      data.modelName = model;
      return requester.delete(DELETE_URL + '/' + data.id, data, getConfig());
    }
  };
};

exports.default = Service;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

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
  clear: function clear() {
    storeValue(KEYS.USER_DATA, null);
    storeValue(KEYS.TOKEN_INFO, null);
  }
};

exports.default = AuthStore;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getButtonText = exports.getModelRelatedValue = exports.getLabel = exports.getConfig = undefined;

var _object = __webpack_require__(12);

var getConfig = exports.getConfig = function getConfig() {
  return typeof window !== 'undefined' && window.crudAdminConfig ? window.crudAdminConfig : {};
};

var getLabel = exports.getLabel = function getLabel(prop, defaultValue) {
  var config = getConfig();
  return (0, _object.queryValue)(config, 'general.labels.' + prop, defaultValue);
};

var getModelRelatedValue = exports.getModelRelatedValue = function getModelRelatedValue(query, defaultValue) {
  var config = getConfig();
  return (0, _object.queryValue)(config, 'models.' + query, defaultValue);
};

var getButtonText = exports.getButtonText = function getButtonText(button, defaultValue) {
  var config = getConfig();
  return (0, _object.queryValue)(config, 'general.buttons.' + button, defaultValue);
};

exports.default = {
  getConfig: getConfig,
  getLabel: getLabel,
  getButtonText: getButtonText,
  getModelRelatedValue: getModelRelatedValue
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
String.prototype.asTitle = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.separateCamel = function () {
  return this.replace(/([a-z])([A-Z])/g, '$1 $2');
};

exports.default = {};

/***/ }),
/* 10 */
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

var _Header = __webpack_require__(46);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(47);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  segment: {
    width: '95%',
    margin: '0 auto',
    paddingBottom: '4rem',
    border: 0,
    boxShadow: 'none',
    paddingTop: 0
  }
};

var Main = function Main(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: 'content-top' },
      _react2.default.createElement(_Header2.default, null),
      _react2.default.createElement(
        _semanticUiReact.Segment,
        { style: styles.segment },
        children
      )
    ),
    _react2.default.createElement(_Footer2.default, null)
  );
};

Main.propTypes = {};

exports.default = Main;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _AuthStore = __webpack_require__(7);

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

var anyPropLike = exports.anyPropLike = function anyPropLike(props, value) {
  return function (obj) {
    if (!props || props.length <= 0) return true;
    return props.reduce(function (acc, x) {
      var target = ('' + queryValue(obj, x, '')).toLowerCase();
      var needle = ('' + value).toLowerCase();
      return acc || target.indexOf(needle) >= 0;
    }, false);
  };
};

var omit = exports.omit = function omit(source, props) {
  if (!source) return source;

  if (Array.isArray(source)) {
    var result = JSON.parse(JSON.stringify(source));
    result.forEach(function (element, index) {
      result[index] = omit(result[index], props);
    });
    return result;
  }

  return Object.keys(source).filter(function (k) {
    return props.indexOf(k) < 0;
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

var _reactRouterDom = __webpack_require__(6);

__webpack_require__(9);

var _config = __webpack_require__(8);

var _RightProtected = __webpack_require__(15);

var _RightProtected2 = _interopRequireDefault(_RightProtected);

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProtectedStat = (0, _RightProtected2.default)(null, null)(_semanticUiReact.Statistic);

var ModelsNavigator = function ModelsNavigator(props) {
  var queryString = '?area=' + props.area;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _semanticUiReact.Header,
      { size: 'huge' },
      _constants2.default.LABELS[props.area.toUpperCase()]
    ),
    _react2.default.createElement(
      _semanticUiReact.Statistic.Group,
      {
        size: 'mini',
        className: 'models-navigator'
      },
      props.models.map(function (modelName) {
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
            props.counts[modelName] || 0
          ),
          _react2.default.createElement(
            _semanticUiReact.Statistic.Label,
            null,
            (0, _config.getModelRelatedValue)(modelName + '.label') || modelName.asTitle()
          )
        );
      })
    )
  );
};

ModelsNavigator.defaultProps = {
  models: [],
  area: 'home'
};

ModelsNavigator.propTypes = {};

exports.default = ModelsNavigator;

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
    key: 'handleChange',
    value: function handleChange(evt) {
      this.props.onChange(evt, {
        value: evt.target.value
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.props.value) {
        this.setState({ value: nextProps.value });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'select',
        {
          name: this.props.name,
          onChange: this.handleChange,
          value: this.props.value || ''
        },
        _react2.default.createElement(
          'option',
          {
            value: '',
            selected: !this.state.value
          },
          this.props.placeholder
        ),
        this.props.options.map(function (option) {
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
  value: _propTypes2.default.any,
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _AuthStore = __webpack_require__(7);

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
  var right = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var failValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return function (TargetComponent) {
    return function (props) {

      var allowed = isAllowed(props.right || right || '');

      if (!allowed) return failValue;

      return _react2.default.createElement(TargetComponent, props);
    };
  };
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(20);

var _Page = __webpack_require__(21);

var _Page2 = _interopRequireDefault(_Page);

var _App = __webpack_require__(22);

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
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 21 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _Routes = __webpack_require__(23);

var _Routes2 = _interopRequireDefault(_Routes);

__webpack_require__(58);

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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _Service = __webpack_require__(5);

var _Service2 = _interopRequireDefault(_Service);

var _ModelsNavigator = __webpack_require__(13);

var _ModelsNavigator2 = _interopRequireDefault(_ModelsNavigator);

var _LoginScreen = __webpack_require__(25);

var _LoginScreen2 = _interopRequireDefault(_LoginScreen);

var _LogoutScreen = __webpack_require__(28);

var _LogoutScreen2 = _interopRequireDefault(_LogoutScreen);

var _ModelDetailsScreen = __webpack_require__(29);

var _ModelDetailsScreen2 = _interopRequireDefault(_ModelDetailsScreen);

var _PermissionsScreen = __webpack_require__(49);

var _PermissionsScreen2 = _interopRequireDefault(_PermissionsScreen);

var _ModelsScreen = __webpack_require__(50);

var _ModelsScreen2 = _interopRequireDefault(_ModelsScreen);

var _AssetsScreen = __webpack_require__(51);

var _AssetsScreen2 = _interopRequireDefault(_AssetsScreen);

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
    key: 'updateCounts',
    value: function updateCounts() {
      var _this2 = this;

      (0, _Service2.default)().countAllModels().then(function (counts) {
        _this2.setState({ counts: counts });
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      this.updateCounts();
      this.props.history.listen(function (data) {
        if (NAVIGATOR_PATHS.indexOf(data.pathname) >= 0) {
          _this3.updateCounts();
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

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
              counts: _this4.state.counts
            });
          }
        }),
        _react2.default.createElement(_reactRouterDom.Route, {
          exact: true,
          path: '/permissions',
          component: function component() {
            return _react2.default.createElement(_PermissionsScreen2.default, {
              counts: _this4.state.counts
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

var AppRoutes = (0, _reactRouterDom.withRouter)(Routes);

exports.default = function () {
  return _react2.default.createElement(
    _reactRouterDom.HashRouter,
    null,
    _react2.default.createElement(AppRoutes, null)
  );
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("simple-json-requester");

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

var _semanticUiReact = __webpack_require__(2);

var _reactRouter = __webpack_require__(26);

var _LoginForm = __webpack_require__(27);

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _AuthStore = __webpack_require__(7);

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
      if (this.state.loggedIn) {
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
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _formik = __webpack_require__(17);

var _semanticUiReact = __webpack_require__(2);

var _Service = __webpack_require__(5);

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
/* 28 */
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

var _reactRouterDom = __webpack_require__(6);

var _AuthStore = __webpack_require__(7);

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
      if (this.state.done) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
      }
      return _react2.default.createElement(_semanticUiReact.Header, { content: 'Processing...' });
    }
  }]);

  return LogoutScreen;
}(_react.Component);

exports.default = LogoutScreen;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _queryString = __webpack_require__(30);

var _queryString2 = _interopRequireDefault(_queryString);

var _Service = __webpack_require__(5);

var _Service2 = _interopRequireDefault(_Service);

var _ModelCrud = __webpack_require__(31);

var _ModelCrud2 = _interopRequireDefault(_ModelCrud);

var _models = __webpack_require__(3);

var _Main = __webpack_require__(10);

var _Main2 = _interopRequireDefault(_Main);

var _MainBreadcrumb = __webpack_require__(48);

var _MainBreadcrumb2 = _interopRequireDefault(_MainBreadcrumb);

var _RightProtected = __webpack_require__(15);

var _RightProtected2 = _interopRequireDefault(_RightProtected);

var _LoggedInProtected = __webpack_require__(11);

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

exports.default = ModelDetailsScreen;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCrudTable = __webpack_require__(32);

var _reactCrudTable2 = _interopRequireDefault(_reactCrudTable);

var _validation = __webpack_require__(33);

var _models = __webpack_require__(3);

var _config = __webpack_require__(8);

__webpack_require__(9);

var _renderers = __webpack_require__(36);

var _renderers2 = _interopRequireDefault(_renderers);

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _AuthStore = __webpack_require__(7);

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
    key: 'handleCreateSubmit',
    value: function handleCreateSubmit(item) {
      var _props = this.props,
          service = _props.service,
          onChange = _props.onChange;

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
      var _props2 = this.props,
          model = _props2.model,
          service = _props2.service;

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
      var _props3 = this.props,
          onChange = _props3.onChange,
          service = _props3.service;

      return new Promise(function (resolve) {
        service.delete(item).then(function (result) {
          onChange();
          resolve(result);
        });
      });
    }
  }, {
    key: 'getCreateForm',
    value: function getCreateForm() {
      var _props4 = this.props,
          model = _props4.model,
          modelName = _props4.modelName;

      var allowed = _AuthStore2.default.hasAnyOfRights((0, _models.createRights)(modelName));

      if (!allowed) return null;

      return _react2.default.createElement(_reactCrudTable.CreateForm, {
        title: _constants2.default.LABELS.CREATE_FORM_TITLE,
        message: _constants2.default.LABELS.CREATE_FORM_MESSAGE,
        trigger: _constants2.default.BUTTONS.CREATE,
        onSubmit: this.handleCreateSubmit,
        submitText: _constants2.default.BUTTONS.CREATE,
        validate: (0, _validation.validateModelRequiredValues)(model)
      });
    }
  }, {
    key: 'getUpdateForm',
    value: function getUpdateForm() {
      var _props5 = this.props,
          modelName = _props5.modelName,
          model = _props5.model;

      var allowed = _AuthStore2.default.hasAnyOfRights((0, _models.updateRights)(modelName));

      if (!allowed) return null;

      return _react2.default.createElement(_reactCrudTable.UpdateForm, {
        title: _constants2.default.LABELS.UPDATE_FORM_TITLE,
        message: _constants2.default.LABELS.UPDATE_FORM_MESSAGE,
        trigger: _constants2.default.BUTTONS.UPDATE,
        onSubmit: this.handleUpdateSubmit,
        submitText: _constants2.default.BUTTONS.UPDATE,
        validate: (0, _validation.validateModelRequiredValues)(model)
      });
    }
  }, {
    key: 'getDeleteForm',
    value: function getDeleteForm() {
      var _props6 = this.props,
          model = _props6.model,
          modelName = _props6.modelName,
          service = _props6.service,
          onChange = _props6.onChange;

      var allowed = _AuthStore2.default.hasAnyOfRights((0, _models.removeRights)(modelName));

      if (!allowed) return null;

      return _react2.default.createElement(_reactCrudTable.DeleteForm, {
        title: _constants2.default.LABELS.REMOVE_FORM_TITLE,
        message: _constants2.default.LABELS.REMOVE_FORM_MESSAGE,
        trigger: _constants2.default.BUTTONS.REMOVE,
        onSubmit: this.handleDeleteSubmit,
        submitText: _constants2.default.BUTTONS.REMOVE,
        validate: _validation.validateModelDeletion
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props7 = this.props,
          model = _props7.model,
          modelName = _props7.modelName,
          caption = _props7.caption,
          service = _props7.service,
          onChange = _props7.onChange;

      return _react2.default.createElement(
        'div',
        { style: styles.container },
        _react2.default.createElement(
          _reactCrudTable2.default,
          {
            caption: (0, _models.modelTitle)(modelName),
            fetchItems: function fetchItems(payload) {
              return service.fetchItems(payload);
            },
            showQueryBuilder: true,
            actionsLabel: _constants2.default.LABELS.ACTIONS
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

ModelCrud.propTypes = {};

exports.default = ModelCrud;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-crud-table");

/***/ }),
/* 33 */
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
/* 34 */
/***/ (function(module, exports) {

module.exports = require("simple-json-table");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("lodash.template");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = __webpack_require__(3);

var _DescriptionRenderer = __webpack_require__(37);

var _DescriptionRenderer2 = _interopRequireDefault(_DescriptionRenderer);

var _InputRenderer = __webpack_require__(38);

var _InputRenderer2 = _interopRequireDefault(_InputRenderer);

var _CheckboxRenderer = __webpack_require__(39);

var _CheckboxRenderer2 = _interopRequireDefault(_CheckboxRenderer);

var _EnumSelectRenderer = __webpack_require__(40);

var _EnumSelectRenderer2 = _interopRequireDefault(_EnumSelectRenderer);

var _ModelsSelectRenderer = __webpack_require__(41);

var _ModelsSelectRenderer2 = _interopRequireDefault(_ModelsSelectRenderer);

var _MultipleModelsSelectRenderer = __webpack_require__(42);

var _MultipleModelsSelectRenderer2 = _interopRequireDefault(_MultipleModelsSelectRenderer);

var _RightsRenderer = __webpack_require__(43);

var _RightsRenderer2 = _interopRequireDefault(_RightsRenderer);

var _PasswordRenderer = __webpack_require__(45);

var _PasswordRenderer2 = _interopRequireDefault(_PasswordRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RENDERERS = {
  textarea: function textarea(model) {
    return _DescriptionRenderer2.default;
  },
  input: function input(model) {
    return _InputRenderer2.default;
  },
  password: function password(model) {
    return _PasswordRenderer2.default;
  },
  checkbox: function checkbox(model) {
    return _CheckboxRenderer2.default;
  },
  rights: function rights(model) {
    return _RightsRenderer2.default;
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
    return RENDERERS[rendererType](model, field);
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

  return RENDERERS.input(model);;
};

exports.default = renderer;

/***/ }),
/* 37 */
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

DescriptionRenderer.propTypes = {};

exports.default = DescriptionRenderer;

/***/ }),
/* 38 */
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

var InputRenderer = function InputRenderer(_ref) {
  var field = _ref.field;
  return _react2.default.createElement('input', field);
};

InputRenderer.propTypes = {};

exports.default = InputRenderer;

/***/ }),
/* 39 */
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

CheckboxRenderer.propTypes = {};

exports.default = CheckboxRenderer;

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

var _Select = __webpack_require__(14);

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EnumSelectRenderer = function EnumSelectRenderer(items) {
  return function (_ref) {
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
};

EnumSelectRenderer.propTypes = {};

exports.default = EnumSelectRenderer;

/***/ }),
/* 41 */
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

var _Service = __webpack_require__(5);

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

      var service = (0, _Service2.default)(this.props.model);
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
  model: _propTypes2.default.string.isRequired
};

exports.default = function (model) {
  return function (_ref) {
    var field = _ref.field;
    return _react2.default.createElement(ModelsSelect, {
      field: field,
      model: model
    });
  };
};

/***/ }),
/* 42 */
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

var _Service = __webpack_require__(5);

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
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var ids = nextProps.field.value && nextProps.field.value.map(function (x) {
        return x && x.id || x;
      }) || [];
      this.setState({ ids: ids });
    }
  }, {
    key: 'handleRemove',
    value: function handleRemove(evt, id) {
      evt.preventDefault();
      evt.stopPropagation();

      var ids = this.state.ids.filter(function (x) {
        return x !== id;
      });
      this.setState({ ids: ids });
      this.triggerOnChange(evt, ids);
    }
  }, {
    key: 'handleChange',
    value: function handleChange(evt) {
      this.setState({ id: evt.target.value });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var service = (0, _Service2.default)(this.props.model);
      service.fetchAllItems({}).then(function (items) {
        _this2.setState({ items: items });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { style: styles.container },
        _react2.default.createElement(
          _semanticUiReact.List,
          { divided: true, relaxed: true },
          this.state.ids.map(function (id) {
            return _react2.default.createElement(
              _semanticUiReact.List.Item,
              {
                key: id
              },
              _react2.default.createElement(
                _semanticUiReact.List.Content,
                { style: styles.item },
                getText(_this3.props.model, _this3.state.items.find(function (x) {
                  return x.id === id;
                })),
                '\xA0',
                _react2.default.createElement(_semanticUiReact.Button, {
                  color: 'red',
                  onClick: function onClick(evt) {
                    _this3.handleRemove(evt, id);
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
            value: this.state.id,
            onChange: this.handleChange,
            options: this.state.items.map(mapOption(this.props.model))
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
  model: _propTypes2.default.string.isRequired
};

exports.default = function (model) {
  return function (_ref) {
    var field = _ref.field;
    return _react2.default.createElement(ModelsSelect, {
      field: field,
      model: model
    });
  };
};

/***/ }),
/* 43 */
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

var _Service = __webpack_require__(5);

var _Service2 = _interopRequireDefault(_Service);

var _rightsSelector = __webpack_require__(44);

var _rightsSelector2 = _interopRequireDefault(_rightsSelector);

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

      return this.props.children(items);
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

exports.default = function (_ref) {
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

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("rights-selector");

/***/ }),
/* 45 */
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

PasswordRenderer.propTypes = {};

exports.default = PasswordRenderer;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(6);

var _semanticUiReact = __webpack_require__(2);

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _AuthStore = __webpack_require__(7);

var _AuthStore2 = _interopRequireDefault(_AuthStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  wrapper: {
    backgroundColor: '#444',
    padding: '1rem',
    marginBottom: '3rem',
    borderRadius: 0
  }
};

var Header = function Header() {
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
    _react2.default.createElement(
      _semanticUiReact.Container,
      null,
      _react2.default.createElement(_semanticUiReact.Menu.Item, {
        as: _reactRouterDom.Link,
        header: true,
        to: '/model',
        content: _constants2.default.LABELS.HOME
      }),
      _AuthStore2.default.canAccessPermissionsArea() && _react2.default.createElement(_semanticUiReact.Menu.Item, {
        as: _reactRouterDom.Link,
        header: true,
        to: '/permissions',
        content: _constants2.default.LABELS.PERMISSIONS
      }),
      _react2.default.createElement(_semanticUiReact.Menu.Item, {
        as: _reactRouterDom.Link,
        header: true,
        to: '/assets',
        content: _constants2.default.LABELS.ASSETS
      }),
      _react2.default.createElement(_semanticUiReact.Menu.Item, {
        as: _reactRouterDom.Link,
        header: true,
        to: '/logout',
        content: _constants2.default.LABELS.LOGOUT
      })
    )
  );
};

Header.propTypes = {};

exports.default = Header;

/***/ }),
/* 47 */
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

var styles = {
  wrapper: {
    padding: '5em 0em',
    marginTop: '4rem',
    backgroundColor: '#444',
    textAlign: 'center'
  }
};

var Footer = function Footer(props) {
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

Footer.propTypes = {};

exports.default = Footer;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _semanticUiReact = __webpack_require__(2);

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

__webpack_require__(9);

var _config = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  container: { marginBottom: '2rem' }
};

var backLink = function backLink(area) {
  return area === 'home' ? '/model' : '/permissions';
};

var modelTitle = function modelTitle(modelName) {
  return (0, _config.getModelRelatedValue)(modelName + '.label') || modelName.asTitle();
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
      _constants2.default.LABELS[area.toUpperCase()]
    ),
    _react2.default.createElement(_semanticUiReact.Breadcrumb.Divider, { icon: 'right angle' }),
    _react2.default.createElement(
      _semanticUiReact.Breadcrumb.Section,
      { active: true },
      modelTitle(modelName)
    )
  );
};

MainBreadcrumb.defaultProps = {
  area: 'home'
};

exports.default = MainBreadcrumb;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LoggedInProtected = __webpack_require__(11);

var _LoggedInProtected2 = _interopRequireDefault(_LoggedInProtected);

var _ModelsNavigator = __webpack_require__(13);

var _ModelsNavigator2 = _interopRequireDefault(_ModelsNavigator);

var _Main = __webpack_require__(10);

var _Main2 = _interopRequireDefault(_Main);

var _models = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = (0, _LoggedInProtected2.default)(_Main2.default);

var PermissionsScreen = function PermissionsScreen(props) {
  var models = Object.keys((0, _models.getModels)()).filter(_models.CRUD_MODELS_FILTER);
  return _react2.default.createElement(
    Main,
    null,
    _react2.default.createElement(_ModelsNavigator2.default, {
      models: models,
      counts: props.counts,
      area: 'permissions'
    })
  );
};

PermissionsScreen.propTypes = {
  counts: _propTypes2.default.instanceOf(Object)
};

exports.default = PermissionsScreen;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LoggedInProtected = __webpack_require__(11);

var _LoggedInProtected2 = _interopRequireDefault(_LoggedInProtected);

var _ModelsNavigator = __webpack_require__(13);

var _ModelsNavigator2 = _interopRequireDefault(_ModelsNavigator);

var _Main = __webpack_require__(10);

var _Main2 = _interopRequireDefault(_Main);

var _models = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = (0, _LoggedInProtected2.default)(_Main2.default);

var ModelsScreen = function ModelsScreen(props) {
  var models = Object.keys((0, _models.getModels)()).filter(_models.NON_CRUD_MODELS_FILTER);
  return _react2.default.createElement(
    Main,
    null,
    _react2.default.createElement(_ModelsNavigator2.default, {
      models: models,
      counts: props.counts
    })
  );
};

ModelsScreen.propTypes = {
  counts: _propTypes2.default.instanceOf(Object)
};

exports.default = ModelsScreen;

/***/ }),
/* 51 */
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

var _Service = __webpack_require__(5);

var _Service2 = _interopRequireDefault(_Service);

var _LoggedInProtected = __webpack_require__(11);

var _LoggedInProtected2 = _interopRequireDefault(_LoggedInProtected);

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _Main = __webpack_require__(10);

var _Main2 = _interopRequireDefault(_Main);

var _UploadAssetModal = __webpack_require__(52);

var _UploadAssetModal2 = _interopRequireDefault(_UploadAssetModal);

var _AssetsList = __webpack_require__(57);

var _AssetsList2 = _interopRequireDefault(_AssetsList);

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
    key: 'loadItems',
    value: function loadItems() {
      var _this2 = this;

      service.fetchAllItems().then(function (items) {
        _this2.setState({ items: items, loading: false });
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadItems();
    }
  }, {
    key: 'render',
    value: function render() {
      var type = this.props.type;


      if (this.state.loading) return _react2.default.createElement(_semanticUiReact.Loader, { active: true });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_UploadAssetModal2.default, {
          type: type,
          onSuccess: this.loadItems
        }),
        _react2.default.createElement(_semanticUiReact.Divider, { hidden: true }),
        _react2.default.createElement(_AssetsList2.default, {
          type: type,
          items: this.state.items
        })
      );
    }
  }]);

  return Assets;
}(_react2.default.Component);

var panes = [{
  menuItem: 'Pictures',
  render: function render() {
    return _react2.default.createElement(
      _semanticUiReact.Tab.Pane,
      { style: styles.pane },
      _react2.default.createElement(Assets, { type: _constants2.default.ASSETS_TYPES.PICTURE })
    );
  }
}, {
  menuItem: 'Files',
  render: function render() {
    return _react2.default.createElement(
      _semanticUiReact.Tab.Pane,
      { style: styles.pane },
      _react2.default.createElement(Assets, { type: _constants2.default.ASSETS_TYPES.FILE })
    );
  }
}];

var AssetsScreen = function AssetsScreen(props) {
  return _react2.default.createElement(
    Main,
    null,
    _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', content: 'Assets' }),
    _react2.default.createElement(_semanticUiReact.Tab, {
      menu: { pointing: true },
      panes: panes
    })
  );
};

AssetsScreen.propTypes = {};

exports.default = AssetsScreen;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(2);

var _UploadAssetForm = __webpack_require__(53);

var _UploadAssetForm2 = _interopRequireDefault(_UploadAssetForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_semanticUiReact.Button, {
          color: 'blue',
          content: 'Upload Asset',
          onClick: function onClick() {
            _this2.showModal();
          }
        }),
        _react2.default.createElement(
          _semanticUiReact.Modal,
          {
            open: this.state.open,
            onClose: function onClose() {
              _this2.hideModal();
            }
          },
          _react2.default.createElement(
            _semanticUiReact.Modal.Header,
            null,
            'Uploading Asset'
          ),
          _react2.default.createElement(
            _semanticUiReact.Modal.Content,
            null,
            _react2.default.createElement(_UploadAssetForm2.default, {
              type: this.props.type,
              onSubmitSuccess: function onSubmitSuccess() {
                _this2.hideModal();
                _this2.props.onSuccess();
              }
            })
          )
        )
      );
    }
  }]);

  return UploadAssetModal;
}(_react2.default.Component);

exports.default = UploadAssetModal;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _formik = __webpack_require__(17);

var _semanticUiReact = __webpack_require__(2);

var _FileInput = __webpack_require__(54);

var _FileInput2 = _interopRequireDefault(_FileInput);

var _ModelsSelect = __webpack_require__(55);

var _ModelsSelect2 = _interopRequireDefault(_ModelsSelect);

var _Service = __webpack_require__(5);

var _Service2 = _interopRequireDefault(_Service);

var _ErrorMessage = __webpack_require__(56);

var _ErrorMessage2 = _interopRequireDefault(_ErrorMessage);

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
      _semanticUiReact.Form.Field,
      { style: styles.field },
      _react2.default.createElement(_ModelsSelect2.default, {
        fluid: true,
        name: 'model',
        value: values.model,
        onChange: handleChange,
        onBlur: handleBlur,
        placeholder: 'Select model'
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
      _react2.default.createElement(_semanticUiReact.Input, {
        fluid: true,
        name: 'name',
        icon: 'file text',
        iconPosition: 'left',
        placeholder: 'Name',
        value: values.name,
        onChange: handleChange,
        onBlur: handleBlur
      }),
      _react2.default.createElement(_ErrorMessage2.default, {
        field: 'name',
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
      'Send'
    )
  );
};

exports.default = (0, _formik.withFormik)({
  mapPropsToValues: function mapPropsToValues(props) {
    return {
      file: null,
      model: '',
      name: '',
      type: props.type
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
  handleSubmit: function handleSubmit(values, _ref) {
    var setSubmitting = _ref.setSubmitting,
        setErrors = _ref.setErrors,
        setError = _ref.setError,
        props = _ref.props;

    return (0, _Service2.default)(values.model).upload(values).then(function (res) {
      props.onSubmitSuccess(res);
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
/* 54 */
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

      return _react2.default.createElement('input', _extends({}, this.props, {
        type: 'file',
        value: this.state.value,
        multiple: 'multiple',
        onChange: function onChange(event) {
          _this2.setState({ value: event.target.value });
          _this2.props.onChange({
            persist: function persist() {},
            target: {
              name: event.target.name,
              type: event.target.type,
              value: event.target.files[0]
            }
          });
        }
      }));
    }
  }]);

  return FileInput;
}(_react2.default.Component);

FileInput.propTypes = {
  onChange: _propTypes2.default.func.isRequired
};

exports.default = FileInput;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

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
  return _react2.default.createElement(_semanticUiReact.Form.Select, _extends({}, props, {
    options: options,
    search: true,
    onChange: function onChange(e, data) {
      props.onChange({
        persist: function persist() {},
        target: {
          name: props.name,
          value: data.value
        }
      });
    }
  }));
};

exports.default = ModelsSelect;

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

ErrorMessage.propTypes = {};

exports.default = ErrorMessage;

/***/ }),
/* 57 */
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

var _lodash = __webpack_require__(18);

var _lodash2 = _interopRequireDefault(_lodash);

var _semanticUiReact = __webpack_require__(2);

var _constants = __webpack_require__(4);

var _constants2 = _interopRequireDefault(_constants);

var _models = __webpack_require__(3);

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
      _react2.default.createElement(_semanticUiReact.Icon, { size: 'huge', name: 'file outline' })
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

var AssetsList = function AssetsList(props) {
  var items = props.items,
      type = props.type;

  var filteredItems = items.filter(function (x) {
    return x.type === props.type;
  });
  var groupedItems = _lodash2.default.groupBy(filteredItems, 'model');
  var keys = Object.keys(groupedItems);

  return _react2.default.createElement(
    'div',
    null,
    keys.map(function (name) {
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
            props.type,
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
                type: props.type
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
/* 58 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);