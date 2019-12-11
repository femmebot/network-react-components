"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toPairs2 = _interopRequireDefault(require("lodash/toPairs"));

var _findIndex2 = _interopRequireDefault(require("lodash/findIndex"));

var _i18nIsoCountries = _interopRequireDefault(require("i18n-iso-countries"));

var _en = _interopRequireDefault(require("i18n-iso-countries/langs/en.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_i18nIsoCountries["default"].registerLocale(_en["default"]);

var supportedCountries = (0, _toPairs2["default"])(_i18nIsoCountries["default"].getNames('en')).map(function (pair) {
  return {
    code: pair[0],
    name: pair[1]
  };
}); // iteration order of toPairs is not guaranteed

supportedCountries.sort(function (c1, c2) {
  return c1.name.localeCompare(c2.name);
});
var usaIndex = (0, _findIndex2["default"])(supportedCountries, ['code', 'US']);
var usa = supportedCountries[usaIndex];
var nonUsCountries = supportedCountries.filter(function (c) {
  return c.code !== 'US';
});
nonUsCountries.unshift(usa);

var _default = nonUsCountries.map(function (c) {
  return {
    value: c.code,
    label: c.name
  };
});

exports["default"] = _default;