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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFieldLabel = exports.valueResolver = exports.getModelValue = exports.getModelValueTemplate = exports.getFieldValueTemplate = exports.getType = exports.keysSorter = exports.inUpdateHiddenFields = exports.inCreationHiddenFields = exports.getModel = exports.getModels = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(3);

var _simpleJsonTable = __webpack_require__(22);

var _simpleJsonTable2 = _interopRequireDefault(_simpleJsonTable);

var _lodash = __webpack_require__(23);

var _lodash2 = _interopRequireDefault(_lodash);

var _object = __webpack_require__(10);

var _config = __webpack_require__(5);

var _constants = __webpack_require__(6);

var _constants2 = _interopRequireDefault(_constants);

__webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var template = __webpack_require__(24);
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

var keysSorter = exports.keysSorter = function keysSorter(a, b) {
  return weight(a) - weight(b);
};

var getType = exports.getType = function getType(model, field) {
  if (field === 'createdAt' || field === 'updatedAt') {
    return 'date';
  }
  return model[field].type;
};

var getFieldValueTemplate = exports.getFieldValueTemplate = function getFieldValueTemplate(modelName, field) {
  return (0, _config.getModelRelatedValue)(modelName + '.fields.' + field + '.valueTemplate', null);
};

var getModelValueTemplate = exports.getModelValueTemplate = function getModelValueTemplate(modelName) {
  return (0, _config.getModelRelatedValue)(modelName + '.valueTemplate', null);
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
    if (tpl) {
      var _compiler2;

      var compiler = template(tpl);
      return compiler((_compiler2 = {}, _defineProperty(_compiler2, field, item[field]), _defineProperty(_compiler2, '_', _lodash2.default), _compiler2));
    }

    if (field === 'createdAt' || field === 'updatedAt') {
      return new Date(+item[field]).toLocaleString();
    }

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

exports.default = {
  getModel: getModel,
  getModels: getModels,
  inCreationHiddenFields: inCreationHiddenFields,
  inUpdateHiddenFields: inUpdateHiddenFields,
  keysSorter: keysSorter,
  getType: getType,
  valueResolver: valueResolver,
  getFieldLabel: getFieldLabel,
  getModelValue: getModelValue
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var requester = __webpack_require__(18);

var URL = function URL(model, id) {
  return id ? '/' + model + '/' + id : '/' + model;
};
var COUNT_URL = '/administrator/model-count';
var SEARCH_URL = '/administrator/model-search';
var SEARCH_ALL_URL = '/administrator/model-search-all';
var COUNT_ALL_MODELS_URL = '/administrator/all-models-count';
var getDirection = function getDirection(d) {
  return d === 'ascending' ? 'ASC' : 'DESC';
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
      });
    },
    fetchAllItems: function fetchAllItems() {
      return requester.get(SEARCH_ALL_URL, { modelName: model });
    },
    countAllModels: function countAllModels() {
      return requester.get(COUNT_ALL_MODELS_URL, {});
    },
    countItems: function countItems(payload) {
      return requester.post(COUNT_URL, {
        modelName: model,
        queryRules: payload.queryRules
      });
    },
    create: function create(item) {
      return requester.post(URL(model), item);
    },
    update: function update(data) {
      return requester.put(URL(model, data.id), data);
    },
    delete: function _delete(data) {
      return requester.delete(URL(model, data.id));
    }
  };
};

exports.default = Service;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getButtonText = exports.getModelRelatedValue = exports.getLabel = exports.getConfig = undefined;

var _object = __webpack_require__(10);

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__(5);

var Constants = {
  BUTTONS: {
    CREATE: (0, _config.getButtonText)('create', 'Create'),
    UPDATE: (0, _config.getButtonText)('update', 'Update'),
    REMOVE: (0, _config.getButtonText)('remove', 'Remove'),
    SEE_DETAILS: (0, _config.getButtonText)('seeDetails', 'See details')
  },
  LABELS: {
    HOME: (0, _config.getLabel)('home', 'Home'),
    ACTIONS: (0, _config.getLabel)('actions', 'Actions'),
    CREATE_FORM_TITLE: (0, _config.getLabel)('createFormTitle', 'Create Item'),
    UPDATE_FORM_TITLE: (0, _config.getLabel)('updateFormTitle', 'Update Item'),
    REMOVE_FORM_TITLE: (0, _config.getLabel)('removeFormTitle', 'Remove existing Item'),
    CREATE_FORM_MESSAGE: (0, _config.getLabel)('createFormMessage', 'Create a new item'),
    UPDATE_FORM_MESSAGE: (0, _config.getLabel)('updateFormMessage', 'Update an existing item'),
    REMOVE_FORM_MESSAGE: (0, _config.getLabel)('removeFormMessage', 'Are you sure you want to remove the item?')
  }
};

exports.default = Constants;

/***/ }),
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(12);

var _Page = __webpack_require__(13);

var _Page2 = _interopRequireDefault(_Page);

var _App = __webpack_require__(14);

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
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(3);

var _reactDom = __webpack_require__(15);

var _Routes = __webpack_require__(16);

var _Routes2 = _interopRequireDefault(_Routes);

var _constants = __webpack_require__(6);

var _constants2 = _interopRequireDefault(_constants);

__webpack_require__(33);

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

var isBrowser = function isBrowser() {
  return typeof window !== 'undefined' && window.document;
};

var App = function App() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _semanticUiReact.Menu,
      null,
      _react2.default.createElement(
        _semanticUiReact.Container,
        null,
        _react2.default.createElement(_semanticUiReact.Menu.Item, {
          as: 'a', header: true,
          href: '/administrator',
          content: _constants2.default.LABELS.HOME
        })
      )
    ),
    _react2.default.createElement(
      _semanticUiReact.Segment,
      {
        as: 'div',
        style: styles.segment
      },
      isBrowser() && _react2.default.createElement(_Routes2.default, null)
    )
  );
};

if (typeof window !== 'undefined' && typeof window.document !== 'undefined' && window.document.getElementById('app')) {
  (0, _reactDom.render)(_react2.default.createElement(App, null), window.document.getElementById('app'));
}

exports.default = App;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(9);

var _semanticUiReact = __webpack_require__(3);

var _ModelDetails = __webpack_require__(17);

var _ModelDetails2 = _interopRequireDefault(_ModelDetails);

var _models = __webpack_require__(2);

var _AllModelsNavigator = __webpack_require__(32);

var _AllModelsNavigator2 = _interopRequireDefault(_AllModelsNavigator);

var _Service = __webpack_require__(4);

var _Service2 = _interopRequireDefault(_Service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Routes = function (_React$Component) {
  _inherits(Routes, _React$Component);

  function Routes(props) {
    _classCallCheck(this, Routes);

    var _this = _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).call(this, props));

    _this.state = {
      counts: {}
    };
    _this.handleChange = _this.handleChange.bind(_this);
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
      this.updateCounts();
    }
  }, {
    key: 'handleChange',
    value: function handleChange() {
      this.updateCounts();
    }
  }, {
    key: 'render',
    value: function render() {
      var parent = this;
      return _react2.default.createElement(
        _reactRouterDom.HashRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_reactRouterDom.Route, {
            path: '/',
            component: function component() {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_AllModelsNavigator2.default, { counts: parent.state.counts }),
                _react2.default.createElement('hr', { className: 'separator' }),
                _react2.default.createElement(_reactRouterDom.Route, {
                  path: '/model/:modelName',
                  component: function component(_ref) {
                    var match = _ref.match;
                    return _react2.default.createElement(_ModelDetails2.default, {
                      onChange: parent.handleChange,
                      modelName: match.params.modelName
                    });
                  }
                })
              );
            }
          })
        )
      );
    }
  }]);

  return Routes;
}(_react2.default.Component);

exports.default = Routes;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Service = __webpack_require__(4);

var _Service2 = _interopRequireDefault(_Service);

var _ModelCrud = __webpack_require__(19);

var _ModelCrud2 = _interopRequireDefault(_ModelCrud);

var _models = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  container: {
    margin: 'auto',
    width: 'fit-content'
  }
};

var ModelDetails = function ModelDetails(_ref) {
  var modelName = _ref.modelName,
      onChange = _ref.onChange;
  return _react2.default.createElement(
    'div',
    { style: styles.container },
    _react2.default.createElement(_ModelCrud2.default, {
      key: modelName,
      model: (0, _models.getModel)(modelName),
      service: (0, _Service2.default)(modelName),
      modelName: modelName,
      onChange: onChange
    })
  );
};

exports.default = ModelDetails;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("simple-json-requester");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCrudTable = __webpack_require__(20);

var _reactCrudTable2 = _interopRequireDefault(_reactCrudTable);

var _validation = __webpack_require__(21);

var _models = __webpack_require__(2);

var _config = __webpack_require__(5);

__webpack_require__(7);

var _renderers = __webpack_require__(25);

var _renderers2 = _interopRequireDefault(_renderers);

var _constants = __webpack_require__(6);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  container: { margin: 'auto', width: 'fit-content' }
};

var ModelCrud = function ModelCrud(_ref) {
  var model = _ref.model,
      modelName = _ref.modelName,
      caption = _ref.caption,
      service = _ref.service,
      onChange = _ref.onChange;
  return _react2.default.createElement(
    'div',
    { style: styles.container },
    _react2.default.createElement(
      _reactCrudTable2.default,
      {
        caption: (0, _config.getModelRelatedValue)(modelName + '.label') || modelName.asTitle(),
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
            render: (0, _renderers2.default)(model, k)
          });
        })
      ),
      _react2.default.createElement(_reactCrudTable.CreateForm, {
        title: _constants2.default.LABELS.CREATE_FORM_TITLE,
        message: _constants2.default.LABELS.CREATE_FORM_MESSAGE,
        trigger: _constants2.default.BUTTONS.CREATE,
        onSubmit: function onSubmit(task) {
          return new Promise(function (resolve) {
            service.create(task).then(function (result) {
              onChange();
              resolve(result);
            });
          });
        },
        submitText: _constants2.default.BUTTONS.CREATE,
        validate: (0, _validation.validateModelRequiredValues)(model)
      }),
      _react2.default.createElement(_reactCrudTable.UpdateForm, {
        title: _constants2.default.LABELS.UPDATE_FORM_TITLE,
        message: _constants2.default.LABELS.UPDATE_FORM_MESSAGE,
        trigger: _constants2.default.BUTTONS.UPDATE,
        onSubmit: function onSubmit(data) {
          var payload = data;
          Object.keys(payload).forEach(function (k) {
            if (model[k].collection) {
              payload[k] = payload[k].map(function (x) {
                return x.id || x;
              });
            }

            if (model[k].model) {
              payload[k] = payload[k].id || payload[k];
            }
          });
          return service.update(payload);
        },
        submitText: _constants2.default.BUTTONS.UPDATE,
        validate: (0, _validation.validateModelRequiredValues)(model)
      }),
      _react2.default.createElement(_reactCrudTable.DeleteForm, {
        title: _constants2.default.LABELS.REMOVE_FORM_TITLE,
        message: _constants2.default.LABELS.REMOVE_FORM_MESSAGE,
        trigger: _constants2.default.BUTTONS.REMOVE,
        onSubmit: function onSubmit(task) {
          return new Promise(function (resolve) {
            service.delete(task).then(function (result) {
              onChange();
              resolve(result);
            });
          });
        },
        submitText: _constants2.default.BUTTONS.REMOVE,
        validate: _validation.validateModelDeletion
      }),
      _react2.default.createElement(_reactCrudTable.Pagination, {
        fetchTotalOfItems: function fetchTotalOfItems(payload) {
          return service.countItems(payload);
        },
        itemsPerPage: 10,
        activePage: 1
      })
    )
  );
};

ModelCrud.propTypes = {};

exports.default = ModelCrud;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-crud-table");

/***/ }),
/* 21 */
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

exports.default = {
  validateModelRequiredValues: validateModelRequiredValues,
  validateModelDeletion: validateModelDeletion
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("simple-json-table");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("lodash.template");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DescriptionRenderer = __webpack_require__(26);

var _DescriptionRenderer2 = _interopRequireDefault(_DescriptionRenderer);

var _InputRenderer = __webpack_require__(27);

var _InputRenderer2 = _interopRequireDefault(_InputRenderer);

var _CheckboxRenderer = __webpack_require__(28);

var _CheckboxRenderer2 = _interopRequireDefault(_CheckboxRenderer);

var _EnumSelectRenderer = __webpack_require__(29);

var _EnumSelectRenderer2 = _interopRequireDefault(_EnumSelectRenderer);

var _ModelsSelectRenderer = __webpack_require__(30);

var _ModelsSelectRenderer2 = _interopRequireDefault(_ModelsSelectRenderer);

var _MultipleModelsSelectRenderer = __webpack_require__(31);

var _MultipleModelsSelectRenderer2 = _interopRequireDefault(_MultipleModelsSelectRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderer = function renderer(model, field) {
  if (model[field].type === 'boolean') {
    return _CheckboxRenderer2.default;
  }

  if (model[field].validations && model[field].validations.isIn) {
    return (0, _EnumSelectRenderer2.default)(model[field].validations.isIn);
  }

  if (model[field].model) {
    return (0, _ModelsSelectRenderer2.default)(model[field].model);
  }

  if (model[field].collection) {
    return (0, _MultipleModelsSelectRenderer2.default)(model[field].collection);
  }

  return _InputRenderer2.default;
};

exports.default = renderer;

/***/ }),
/* 26 */
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
/* 27 */
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
/* 28 */
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
/* 29 */
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

var _Select = __webpack_require__(8);

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
/* 30 */
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

var _Select = __webpack_require__(8);

var _Select2 = _interopRequireDefault(_Select);

var _Service = __webpack_require__(4);

var _Service2 = _interopRequireDefault(_Service);

var _models = __webpack_require__(2);

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
      return _react2.default.createElement(_Select2.default, _extends({}, this.props.field, {
        value: this.props.field.value && this.props.field.value.id || this.props.field.value,
        options: this.state.items.map(mapOptions(this.props.model))
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
    return _react2.default.createElement(ModelsSelect, { field: field, model: model });
  };
};

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

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = __webpack_require__(3);

var _Select = __webpack_require__(8);

var _Select2 = _interopRequireDefault(_Select);

var _Service = __webpack_require__(4);

var _Service2 = _interopRequireDefault(_Service);

var _models = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getText = function getText(model, x) {
  return (0, _models.getModelValue)(model, x) || model + ' (id: ' + x.id + ')';
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
      var ids = [].concat(_toConsumableArray(this.state.ids), [+this.state.id]);
      this.setState({ ids: ids, id: null });
      this.triggerOnChange(evt, ids);
    }
  }, {
    key: 'triggerOnChange',
    value: function triggerOnChange(evt, ids) {
      var e = evt;
      e.target = {
        name: this.props.field.name,
        value: ids
      };
      this.props.field.onChange(e);
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
    return _react2.default.createElement(ModelsSelect, { field: field, model: model });
  };
};

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

var _semanticUiReact = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(9);

var _models = __webpack_require__(2);

__webpack_require__(7);

var _config = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AllModelsNavigator = function AllModelsNavigator(props) {
  return _react2.default.createElement(
    _semanticUiReact.Statistic.Group,
    {
      size: 'mini',
      className: 'models-navigator'
    },
    Object.keys((0, _models.getModels)()).map(function (modelName) {
      return _react2.default.createElement(
        _semanticUiReact.Statistic,
        {
          className: 'models-navigator__link',
          as: _reactRouterDom.Link,
          to: '/model/' + modelName
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
  );
};

AllModelsNavigator.propTypes = {};

exports.default = AllModelsNavigator;

/***/ }),
/* 33 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);