"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Button = _interopRequireDefault(require("@material-ui/core/Button/Button"));

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styles = require("../../styles");

var _utils = require("../../styles/utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var outlineOverrides = function outlineOverrides() {
  return "\n  border: solid ".concat((0, _utils.pxToRem)(2), " currentColor;\n  border-radius: ").concat((0, _utils.pxToRem)(2), ";\n");
};

var commitOverrides = function commitOverrides() {
  return "\n  background: ".concat(_styles.colors.ctaPrimary, ";\n  &:hover {\n    background: ").concat(_styles.colors.ctaSecondary, ";\n  }\n}\n");
};

var variantOverrides = function variantOverrides(variant) {
  if (!variant) {
    return;
  }

  if (variant === 'outline') {
    return outlineOverrides();
  }

  if (variant === 'commit') {
    return commitOverrides();
  }

  return;
};

var StyledButton = (0, _styledComponents["default"])(function (_ref) {
  var _variant = _ref.variant,
      _wide = _ref.wide,
      props = _objectWithoutProperties(_ref, ["variant", "wide"]);

  return React.createElement(_Button["default"], _extends({
    variant: "flat"
  }, props));
}).withConfig({
  displayName: "StyledButton",
  componentId: "qoincd-0"
})(["&&{display:inline-flex;align-items:center;color:", ";padding:", ";min-width:", ";svg{margin-right:", ";}", ";}"], function (props) {
  return props.disabled ? 'gray' : 'black';
}, (0, _utils.pxToRem)(8), function (props) {
  return props.wide ? (0, _utils.pxToRem)(220) : undefined;
}, (0, _utils.pxToRem)(8), function (props) {
  return variantOverrides(props.variant);
});

var Button = function Button(_ref2) {
  var children = _ref2.children,
      variant = _ref2.variant,
      props = _objectWithoutProperties(_ref2, ["children", "variant"]);

  return React.createElement(StyledButton, _extends({
    variant: variant
  }, props), children);
};

var _default = Button;
exports["default"] = _default;