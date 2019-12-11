"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _themes = require("../../styles/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledVerticalDivider = (0, _themes.withTheme)(_styledComponents["default"].div.withConfig({
  displayName: "StyledVerticalDivider",
  componentId: "sc-1bxt2l-0"
})(["height:", ";width:", ";background:", ";"], function (_ref) {
  var _ref$height = _ref.height,
      height = _ref$height === void 0 ? '100%' : _ref$height;
  return height;
}, function (_ref2) {
  var width = _ref2.width,
      theme = _ref2.theme;
  return width ? width : theme.typography.pxToRem(1);
}, function (_ref3) {
  var theme = _ref3.theme,
      color = _ref3.color;
  return color ? color : theme.palette.divider;
}));

var VerticalDivider = function VerticalDivider(props) {
  return React.createElement(StyledVerticalDivider, props);
};

VerticalDivider.defaultProps = {
  height: '100%'
};
var _default = VerticalDivider;
exports["default"] = _default;