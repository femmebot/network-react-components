"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Typography = _interopRequireDefault(require("./Typography"));

var _utils = require("../../styles/utils");

var _formatters = require("../../utils/formatters");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Sup = _styledComponents["default"].span.withConfig({
  displayName: "Sup",
  componentId: "esw3f7-0"
})(["position:relative;font-size:65%;top:", ";padding-left:", ";"], (0, _utils.pxToRem)(-8), (0, _utils.pxToRem)(5));

var FancyDollarAmount = function FancyDollarAmount(_ref) {
  var children = _ref.children;
  var values = (0, _formatters.formatAsDollarAmount)(Number(children)).split('.');
  return React.createElement(_Typography["default"], {
    variant: "emphasis"
  }, values[0], React.createElement(Sup, null, ".".concat(values[1])));
};

var _default = FancyDollarAmount;
exports["default"] = _default;