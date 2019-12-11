"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pick2 = _interopRequireDefault(require("lodash/pick"));

var _mapValues2 = _interopRequireDefault(require("lodash/mapValues"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setSize = function setSize(dim) {
  return dim > 1 ? "".concat(dim, "px") : "".concat(dim * 100, "%");
};

var sizeProperties = ['width', 'height'];

var size = function size(props) {
  var sizeProps = (0, _pick2["default"])(props, sizeProperties);
  return (0, _mapValues2["default"])(sizeProps, function (value) {
    return typeof value === 'number' ? setSize(value) : value;
  });
};

var _default = size;
exports["default"] = _default;