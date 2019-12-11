"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var objectifyOptions = function objectifyOptions(options) {
  return options.map(function (option) {
    if (typeof option !== 'string') {
      return option;
    }

    return {
      label: option,
      value: option
    };
  });
};

var _default = objectifyOptions;
exports["default"] = _default;