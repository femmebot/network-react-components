"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Radio = _interopRequireDefault(require("@material-ui/core/Radio"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styles = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RadioInput = (0, _styledComponents["default"])(_Radio["default"]).withConfig({
  displayName: "RadioInput",
  componentId: "sc-1c6988x-0"
})(["font:inherit;", ";", ";"], _styles.sizeStyles, _styles.spaceStyles);
var _default = RadioInput;
exports["default"] = _default;