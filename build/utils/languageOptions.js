"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = window.CONFIG.supportedLanguages.map(function (language) {
  return {
    value: language.handle,
    label: language.string
  };
});

exports["default"] = _default;