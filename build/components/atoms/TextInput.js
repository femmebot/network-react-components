"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Input = _interopRequireDefault(require("@material-ui/core/Input/Input"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styles = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TextInput = (0, _styledComponents["default"])(_Input["default"]).withConfig({
  displayName: "TextInput",
  componentId: "ur6sez-0"
})(["font:inherit;", ";", ";input[type='number']{-moz-appearance:textfield;}input[type='number']::-webkit-inner-spin-button,input[type='number']::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}"], _styles.sizeStyles, _styles.spaceStyles);
var _default = TextInput;
exports["default"] = _default;