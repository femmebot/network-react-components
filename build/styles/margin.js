"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _spacing = _interopRequireDefault(require("./constants/spacing"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var margin = function margin(size) {
  return {
    margin: (0, _spacing["default"])(size)
  };
};

margin.top = function (size) {
  return {
    marginTop: (0, _spacing["default"])(size)
  };
};

margin.right = function (size) {
  return {
    marginRight: (0, _spacing["default"])(size)
  };
};

margin.bottom = function (size) {
  return {
    marginBottom: (0, _spacing["default"])(size)
  };
};

margin.left = function (size) {
  return {
    marginLeft: (0, _spacing["default"])(size)
  };
};

margin.x = function (size) {
  if (size === 'auto') {
    return {
      marginLeft: size,
      marginRight: size
    };
  }

  return {
    marginLeft: (0, _spacing["default"])(size),
    marginRight: (0, _spacing["default"])(size)
  };
};

margin.y = function (size) {
  return {
    marginTop: (0, _spacing["default"])(size),
    marginBottom: (0, _spacing["default"])(size)
  };
};

var _default = margin;
exports["default"] = _default;