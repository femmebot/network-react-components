"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "flexbox", {
  enumerable: true,
  get: function get() {
    return _flexbox["default"];
  }
});
Object.defineProperty(exports, "size", {
  enumerable: true,
  get: function get() {
    return _size["default"];
  }
});
Object.defineProperty(exports, "space", {
  enumerable: true,
  get: function get() {
    return _space["default"];
  }
});
exports.typography = exports.legacyColors = exports.creativeQualityColors = exports.colors = exports.flexboxStyles = exports.spaceStyles = exports.sizeStyles = void 0;

var _utils = require("./utils");

var colors = _interopRequireWildcard(require("./constants/colors"));

exports.colors = colors;

var creativeQualityColors = _interopRequireWildcard(require("./constants/creativeQualityColors"));

exports.creativeQualityColors = creativeQualityColors;

var legacyColors = _interopRequireWildcard(require("./constants/legacyColors"));

exports.legacyColors = legacyColors;

var _flexbox = _interopRequireDefault(require("./props/flexbox"));

var _size = _interopRequireDefault(require("./props/size"));

var _space = _interopRequireDefault(require("./props/space"));

var typography = _interopRequireWildcard(require("./typography"));

exports.typography = typography;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var sizeStyles = function sizeStyles(props) {
  return (0, _utils.styleObjectToTemplate)((0, _size["default"])(props));
};

exports.sizeStyles = sizeStyles;

var spaceStyles = function spaceStyles(props) {
  return (0, _space["default"])(props).map(_utils.styleObjectToTemplate).join('\n');
};

exports.spaceStyles = spaceStyles;

var flexboxStyles = function flexboxStyles(props) {
  return (0, _utils.styleObjectToTemplate)((0, _flexbox["default"])(props));
};

exports.flexboxStyles = flexboxStyles;