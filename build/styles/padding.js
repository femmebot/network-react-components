"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _spacing = _interopRequireDefault(require("./constants/spacing"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var padding = function padding(size) {
  return {
    padding: (0, _spacing["default"])(size)
  };
};

padding.top = function (size) {
  return {
    paddingTop: (0, _spacing["default"])(size)
  };
};

padding.right = function (size) {
  return {
    paddingRight: (0, _spacing["default"])(size)
  };
};

padding.bottom = function (size) {
  return {
    paddingBottom: (0, _spacing["default"])(size)
  };
};

padding.left = function (size) {
  return {
    paddingLeft: (0, _spacing["default"])(size)
  };
};

padding.x = function (size) {
  return {
    paddingLeft: (0, _spacing["default"])(size),
    paddingRight: (0, _spacing["default"])(size)
  };
};

padding.y = function (size) {
  return {
    paddingTop: (0, _spacing["default"])(size),
    paddingBottom: (0, _spacing["default"])(size)
  };
};

var _default = padding;
exports["default"] = _default;