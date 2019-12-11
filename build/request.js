"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defaultsDeep2 = _interopRequireDefault(require("lodash/defaultsDeep"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultOptions = {
  credentials: 'include',
  method: 'GET',
  headers: {
    'content-type': 'application/json'
  }
};

var request = function request(path, options) {
  return fetch(path, (0, _defaultsDeep2["default"])({}, options || {}, defaultOptions));
};

var _default = request;
exports["default"] = _default;