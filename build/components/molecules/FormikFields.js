"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MaterialCheckboxGroupField = exports.MaterialSelectField = exports.MaterialTextField = void 0;

var _CheckboxGroupField = _interopRequireDefault(require("./CheckboxGroupField"));

var _InputAdapter = _interopRequireDefault(require("./InputAdapter"));

var _SelectField = _interopRequireDefault(require("./SelectField"));

var _TextField = _interopRequireDefault(require("./TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MaterialTextField = (0, _InputAdapter["default"])(_TextField["default"]);
exports.MaterialTextField = MaterialTextField;
var MaterialSelectField = (0, _InputAdapter["default"])(_SelectField["default"]);
exports.MaterialSelectField = MaterialSelectField;
var MaterialCheckboxGroupField = (0, _InputAdapter["default"])(_CheckboxGroupField["default"], {
  setFieldValue: true
});
exports.MaterialCheckboxGroupField = MaterialCheckboxGroupField;