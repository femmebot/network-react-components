"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.castToArray = castToArray;
exports.apiUrl = apiUrl;

var _ensureTrailingSlash = _interopRequireDefault(require("../utils/ensureTrailingSlash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function castToArray(data) {
  if (data == null) {
    var emptyArray = new Array();
    return emptyArray;
  }

  if (data instanceof Array) {
    return data;
  }

  return [data];
}

function apiUrl(type) {
  return "".concat((0, _ensureTrailingSlash["default"])(window.IdeoSSO.baseApiUrl)).concat(type);
}