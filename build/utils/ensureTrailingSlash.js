"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(value) {
  return value[value.length - 1] === '/' ? value : "".concat(value, "/");
};

exports["default"] = _default;