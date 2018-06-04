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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
var requester = __webpack_require__(14);

var URL = function URL(model, id) {
  return id ? '/' + model + '/' + id : '/' + model;
};
var COUNT_URL = '/administrator/model-count';
var SEARCH_URL = '/administrator/model-search';
var SEARCH_ALL_URL = '/administrator/model-search-all';
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
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getModels = exports.getModels = function getModels() {
  return typeof window !== 'undefined' && window.sailsModels ? window.sailsModels : {};
};

var getModel = exports.getModel = function getModel(name) {
  var models = getModels();
  return models[name] ? models[name] : {};
};

exports.default = {
  getModel: getModel,
  getModels: getModels
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(6);

var _Page = __webpack_require__(7);

var _Page2 = _interopRequireDefault(_Page);

var _App = __webpack_require__(8);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var body = (0, _server.renderToString)(_react2.default.createElement(_App2.default, null));

var title = 'Administrator';

module.exports.renderPage = function (injection) {
  return (0, _Page2.default)({
    title: title,
    body: body,
    injection: injection
  });
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(9);

var _reactDom = __webpack_require__(10);

var _Routes = __webpack_require__(11);

var _Routes2 = _interopRequireDefault(_Routes);

__webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  segment: {
    width: '95%',
    margin: '3rem auto 0 auto',
    paddingBottom: '4rem',
    border: 0,
    boxShadow: 'none'
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
        _react2.default.createElement(
          _semanticUiReact.Menu.Item,
          { as: 'div', header: true },
          'Admin'
        )
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
/* 9 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(12);

var _ModelDetails = __webpack_require__(13);

var _ModelDetails2 = _interopRequireDefault(_ModelDetails);

var _models = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = function Routes() {
  return _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'ul',
        { className: 'models-navigator' },
        Object.keys((0, _models.getModels)()).map(function (modelName) {
          return _react2.default.createElement(
            'li',
            { className: 'models-navigator__link' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/administrator/' + modelName },
              modelName
            )
          );
        })
      ),
      _react2.default.createElement('hr', { className: 'separator' }),
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/administrator', component: function component() {
          return null;
        } }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/administrator/:modelName', component: _ModelDetails2.default })
    )
  );
};

exports.default = Routes;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Service = __webpack_require__(2);

var _Service2 = _interopRequireDefault(_Service);

var _ModelCrud = __webpack_require__(15);

var _ModelCrud2 = _interopRequireDefault(_ModelCrud);

var _models = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  container: {
    margin: 'auto',
    width: 'fit-content'
  }
};

var ModelDetails = function ModelDetails(_ref) {
  var match = _ref.match;
  return _react2.default.createElement(
    'div',
    { style: styles.container },
    _react2.default.createElement(_ModelCrud2.default, {
      key: match.params.modelName,
      model: (0, _models.getModel)(match.params.modelName),
      service: (0, _Service2.default)(match.params.modelName),
      caption: match.params.modelName
    })
  );
};

exports.default = ModelDetails;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("simple-json-requester");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCrudTable = __webpack_require__(16);

var _reactCrudTable2 = _interopRequireDefault(_reactCrudTable);

var _validation = __webpack_require__(17);

var _object = __webpack_require__(18);

var _renderers = __webpack_require__(19);

var _renderers2 = _interopRequireDefault(_renderers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  container: { margin: 'auto', width: 'fit-content' }
};

var inCreationHiddenFields = function inCreationHiddenFields(field) {
  return ['createdAt', 'updatedAt', 'id'].indexOf(field) > -1;
};

var inUpdateHiddenFields = function inUpdateHiddenFields(field) {
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

var keysSorter = function keysSorter(a, b) {
  return weight(a) - weight(b);
};

var getType = function getType(model, field) {
  if (field === 'createdAt' || field === 'updatedAt') {
    return 'date';
  }
  return model[field].type;
};

var valueResolver = function valueResolver(model, field) {
  return function (item) {
    if (field === 'createdAt' || field === 'updatedAt') {
      return new Date(+item[field]).toLocaleString();
    }

    if (model[field].type === 'boolean') {
      return item[field] ? 'true' : 'false';
    }

    if (model[field].model || model[field].collection) {
      return JSON.stringify((0, _object.omit)(item[field], ['createdAt', 'updatedAt']));
    }

    return item[field];
  };
};

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.separateCamel = function () {
  return this.replace(/([a-z])([A-Z])/g, '$1 $2');
};

var ModelCrud = function ModelCrud(_ref) {
  var model = _ref.model,
      caption = _ref.caption,
      service = _ref.service;
  return _react2.default.createElement(
    'div',
    { style: styles.container },
    _react2.default.createElement(
      _reactCrudTable2.default,
      {
        caption: caption,
        fetchItems: function fetchItems(payload) {
          return service.fetchItems(payload);
        },
        showQueryBuilder: true
      },
      _react2.default.createElement(
        _reactCrudTable.Fields,
        null,
        model && Object.keys(model).sort(keysSorter).map(function (k) {
          return _react2.default.createElement(_reactCrudTable.Field, {
            name: k,
            label: k.separateCamel().capitalize(),
            hideInCreateForm: inCreationHiddenFields(k),
            hideInUpdateForm: inUpdateHiddenFields(k),
            type: getType(model, k),
            queryable: !!model[k].type,
            sortable: !!model[k].type,
            tableValueResolver: valueResolver(model, k),
            render: (0, _renderers2.default)(model, k)
          });
        })
      ),
      _react2.default.createElement(_reactCrudTable.CreateForm, {
        title: 'Create Item',
        message: 'Create a new item',
        trigger: 'Create',
        onSubmit: function onSubmit(task) {
          return service.create(task);
        },
        submitText: 'Create',
        validate: (0, _validation.validateModelRequiredValues)(model)
      }),
      _react2.default.createElement(_reactCrudTable.UpdateForm, {
        title: 'Update Item',
        message: 'Update an existing item',
        trigger: 'Update',
        onSubmit: function onSubmit(data) {
          var payload = data;
          Object.keys(payload).forEach(function (k) {
            if (model[k].collection) {
              payload[k] = payload[k].map(function (x) {
                return x.id;
              });
            }

            if (model[k].model) {
              payload[k] = payload[k].id || payload[k];
            }
          });
          return service.update(payload);
        },
        submitText: 'Update',
        validate: (0, _validation.validateModelRequiredValues)(model)
      }),
      _react2.default.createElement(_reactCrudTable.DeleteForm, {
        title: 'Remove an existing item',
        message: 'Are you sure you want to remove the item?',
        trigger: 'Remove',
        onSubmit: function onSubmit(task) {
          return service.delete(task);
        },
        submitText: 'Remove',
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
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-crud-table");

/***/ }),
/* 17 */
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
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DescriptionRenderer = __webpack_require__(20);

var _DescriptionRenderer2 = _interopRequireDefault(_DescriptionRenderer);

var _InputRenderer = __webpack_require__(21);

var _InputRenderer2 = _interopRequireDefault(_InputRenderer);

var _CheckboxRenderer = __webpack_require__(22);

var _CheckboxRenderer2 = _interopRequireDefault(_CheckboxRenderer);

var _EnumSelectRenderer = __webpack_require__(23);

var _EnumSelectRenderer2 = _interopRequireDefault(_EnumSelectRenderer);

var _ModelsSelectRenderer = __webpack_require__(24);

var _ModelsSelectRenderer2 = _interopRequireDefault(_ModelsSelectRenderer);

var _MultipleModelsSelectRenderer = __webpack_require__(25);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DescriptionRenderer = function DescriptionRenderer(_ref) {
  var field = _ref.field;
  return _react2.default.createElement('textarea', field);
};

DescriptionRenderer.propTypes = {};

exports.default = DescriptionRenderer;

/***/ }),
/* 21 */
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
/* 22 */
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
/* 23 */
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

var _Select = __webpack_require__(3);

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
/* 24 */
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

var _Select = __webpack_require__(3);

var _Select2 = _interopRequireDefault(_Select);

var _Service = __webpack_require__(2);

var _Service2 = _interopRequireDefault(_Service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapIdsToOptions = function mapIdsToOptions(model) {
  return function (x) {
    return {
      value: x.id,
      key: x.id,
      text: model + ' (id: ' + x.id + ')'
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
        options: this.state.items.map(mapIdsToOptions(this.props.model))
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

var _Select = __webpack_require__(3);

var _Select2 = _interopRequireDefault(_Select);

var _Service = __webpack_require__(2);

var _Service2 = _interopRequireDefault(_Service);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapIdsToOptions = function mapIdsToOptions(model) {
  return function (x) {
    return {
      value: x.id,
      key: x.id,
      text: model + ' (id: ' + x.id + ')'
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
      return _react2.default.createElement(
        'div',
        null,
        JSON.stringify(this.props.field)
      );
      // return (
      //   <Select
      //     {...this.props.field}
      //     options={this.state.items.map(mapIdsToOptions(this.props.model))}
      //   />
      // );
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
/* 26 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);