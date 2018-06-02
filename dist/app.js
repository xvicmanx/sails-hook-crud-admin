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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(3);

var _Page = __webpack_require__(4);

var _Page2 = _interopRequireDefault(_Page);

var _App = __webpack_require__(5);

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
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(6);

var _reactDom = __webpack_require__(7);

var _Routes = __webpack_require__(8);

var _Routes2 = _interopRequireDefault(_Routes);

__webpack_require__(18);

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
/* 6 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(9);

var _ModelDetails = __webpack_require__(10);

var _ModelDetails2 = _interopRequireDefault(_ModelDetails);

var _models = __webpack_require__(1);

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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Service = __webpack_require__(11);

var _Service2 = _interopRequireDefault(_Service);

var _ModelCrud = __webpack_require__(13);

var _ModelCrud2 = _interopRequireDefault(_ModelCrud);

var _models = __webpack_require__(1);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var requester = __webpack_require__(12);

var URL = function URL(model, id) {
  return id ? '/' + model + '/' + id : '/' + model;
};
var COUNT_URL = '/administrator/model-count';
var SEARCH_URL = '/administrator/model-search';

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
/* 12 */
/***/ (function(module, exports) {

module.exports = require("simple-json-requester");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCrudTable = __webpack_require__(14);

var _reactCrudTable2 = _interopRequireDefault(_reactCrudTable);

var _validation = __webpack_require__(15);

var _Select = __webpack_require__(16);

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DescriptionRenderer = function DescriptionRenderer(_ref) {
  var field = _ref.field;
  return _react2.default.createElement('textarea', field);
};
var InputRenderer = function InputRenderer(_ref2) {
  var field = _ref2.field;
  return _react2.default.createElement('input', field);
};
var CheckboxRenderer = function CheckboxRenderer(_ref3) {
  var field = _ref3.field;
  return _react2.default.createElement('input', _extends({}, field, {
    type: 'checkbox',
    checked: !!field.value
  }));
};

var EnumSelectRenderer = function EnumSelectRenderer(items) {
  return function (_ref4) {
    var field = _ref4.field;
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

var renderer = function renderer(model, field) {
  if (model[field].type === 'boolean') {
    return CheckboxRenderer;
  }

  if (model[field].validations && model[field].validations.isIn) {
    return EnumSelectRenderer(model[field].validations.isIn);
  }

  return InputRenderer;
};

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

    return item[field];
  };
};

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.separateCamel = function () {
  return this.replace(/([a-z])([A-Z])/g, '$1 $2');
};

var ModelCrud = function ModelCrud(_ref5) {
  var model = _ref5.model,
      caption = _ref5.caption,
      service = _ref5.service;
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
            tableValueResolver: valueResolver(model, k),
            render: renderer(model, k)
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
          return service.update(data);
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
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-crud-table");

/***/ }),
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(17);

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
/* 17 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 18 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);