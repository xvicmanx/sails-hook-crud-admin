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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(2);

var _Page = __webpack_require__(3);

var _Page2 = _interopRequireDefault(_Page);

var _Example = __webpack_require__(4);

var _Example2 = _interopRequireDefault(_Example);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var body = (0, _server.renderToString)(_react2.default.createElement(_Example2.default, null));

var title = 'Hello my friend';

module.exports.renderPage = function (injection) {
  return (0, _Page2.default)({
    title: title,
    body: body,
    injection: injection
  });
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Page = function Page(_ref) {
  var body = _ref.body,
      title = _ref.title,
      injection = _ref.injection;
  return "\n  <!DOCTYPE html>\n  <html>\n    <head>\n      <title>" + title + "</title>\n    </head>\n    <body style=\"margin:0\">\n      <div id=\"app\">" + body + "</div>\n      <script>\n        " + injection + "\n      </script>\n      <script src=\"/administrator/client.js\"> </script>\n    </body>\n  </html>\n";
};

exports.default = Page;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _reactCrudTable = __webpack_require__(6);

var _reactCrudTable2 = _interopRequireDefault(_reactCrudTable);

var _Service = __webpack_require__(7);

var _Service2 = _interopRequireDefault(_Service);

var _validation = __webpack_require__(8);

__webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DescriptionRenderer = function DescriptionRenderer(_ref) {
  var field = _ref.field;
  return _react2.default.createElement('textarea', field);
};

// Component's Base CSS


var service = (0, _Service2.default)('foo');

var styles = {
  container: { margin: 'auto', width: 'fit-content' }
};

var inCreationHiddenFields = function inCreationHiddenFields(field) {
  return ['createdAt', 'updatedAt', 'id'].indexOf(field) > -1;
};

var inUpdateHiddenFields = function inUpdateHiddenFields(field) {
  return ['createdAt', 'updatedAt', 'id'].indexOf(field) > -1;
};

var getModel = function getModel(name) {
  var models = typeof window !== 'undefined' && window.sailsModels ? window.sailsModels : {};
  return models[name] ? models[name] : {};
};

var Example = function Example(_ref2) {
  var model = _ref2.model;
  return _react2.default.createElement(
    'div',
    { style: styles.container },
    _react2.default.createElement(
      _reactCrudTable2.default,
      {
        caption: 'Foos',
        fetchItems: function fetchItems(payload) {
          return service.fetchItems(payload);
        }
      },
      _react2.default.createElement(
        _reactCrudTable.Fields,
        null,
        model && Object.keys(model).map(function (k) {
          return _react2.default.createElement(_reactCrudTable.Field, {
            name: k,
            label: k,
            hideInCreateForm: inCreationHiddenFields(k),
            hideInUpdateForm: inUpdateHiddenFields(k)
          });
        })
      ),
      _react2.default.createElement(_reactCrudTable.CreateForm, {
        title: 'Creation',
        message: 'Create!',
        trigger: 'Create',
        onSubmit: function onSubmit(task) {
          return service.create(task);
        },
        submitText: 'Create',
        validate: (0, _validation.validateModelRequiredValues)(model)
      }),
      _react2.default.createElement(_reactCrudTable.UpdateForm, {
        title: 'Update Process',
        message: 'Update',
        trigger: 'Update',
        onSubmit: function onSubmit(data) {
          return service.update(data);
        },
        submitText: 'Update',
        validate: (0, _validation.validateModelRequiredValues)(model)
      }),
      _react2.default.createElement(_reactCrudTable.DeleteForm, {
        title: 'Delete Process',
        message: 'Are you sure you want to delete the item?',
        trigger: 'Delete',
        onSubmit: function onSubmit(task) {
          return service.delete(task);
        },
        submitText: 'Delete',
        validate: _validation.validateModelDeletion
      }),
      _react2.default.createElement(_reactCrudTable.Pagination, { totalOfItems: 10 })
    )
  );
};

Example.propTypes = {};

if (typeof window !== 'undefined' && typeof window.document !== 'undefined' && window.document.getElementById('app')) {
  (0, _reactDom.render)(_react2.default.createElement(Example, { model: getModel('foo') }), window.document.getElementById('app'));
}

exports.default = Example;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-crud-table");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Service = function Service(model) {
  return {
    fetchItems: function fetchItems(payload) {
      return fetch("/" + model).then(function (r) {
        return r.json();
      });
    },
    create: function create(item) {
      return fetch("/" + model, {
        method: "POST",
        body: JSON.stringify(item)
      });
    },
    update: function update(data) {
      return fetch("/" + model + "/" + data.id, {
        method: "PUT",
        body: JSON.stringify(data)
      });
    },
    delete: function _delete(data) {
      return fetch("/" + model + "/" + data.id, {
        method: "DELETE"
      });
    }
  };
};

exports.default = Service;

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);