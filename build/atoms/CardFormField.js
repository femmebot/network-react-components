"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@material-ui/core");

var React = _interopRequireWildcard(require("react"));

var _iconQuestionmark = _interopRequireDefault(require("../../images/icon-questionmark.svg"));

var _Box = _interopRequireDefault(require("./Box"));

var _FieldError = _interopRequireDefault(require("./FieldError"));

var _FieldLabel = _interopRequireDefault(require("./FieldLabel"));

var _HorizontalDivider = _interopRequireDefault(require("./HorizontalDivider"));

var _styles = require("../../styles");

var _utils = require("../../styles/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CardFormField = function CardFormField(_ref) {
  var label = _ref.label,
      hr = _ref.hr,
      tooltip = _ref.tooltip,
      error = _ref.error,
      children = _ref.children;
  return React.createElement(_Box["default"], {
    mb: 5
  }, React.createElement(_Box["default"], {
    mb: 10
  }, React.createElement(_FieldLabel["default"], null, React.createElement(_Box["default"], {
    mb: 10
  }, tooltip ? React.createElement(_core.Grid, {
    container: true,
    alignItems: "center",
    spacing: 16
  }, React.createElement(_core.Grid, {
    item: true
  }, label), React.createElement(_core.Grid, {
    item: true
  }, React.createElement(_core.Tooltip, {
    title: tooltip,
    placement: "top"
  }, React.createElement(_iconQuestionmark["default"], {
    style: {
      fill: _styles.colors.grayBoulder
    },
    height: 11,
    width: 11
  })))) : label), children)), hr && React.createElement(_HorizontalDivider["default"], {
    height: (0, _utils.pxToRem)(1),
    color: _styles.colors.black
  }), error && React.createElement(_FieldError["default"], null, error));
};

var _default = CardFormField;
exports["default"] = _default;