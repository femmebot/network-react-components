"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gothamBookUrl = exports.serif = exports.sans = exports.gothamFontFace = exports.sentinelFontFace = void 0;

var _GothamBook = _interopRequireDefault(require("../fonts/Gotham-Book.otf"));

var _GothamMedium = _interopRequireDefault(require("../fonts/Gotham-Medium.otf"));

var _SentinelBook = _interopRequireDefault(require("../fonts/Sentinel-Book.otf"));

var _SentinelMedium = _interopRequireDefault(require("../fonts/Sentinel-Medium.otf"));

var _SentinelMediumItal = _interopRequireDefault(require("../fonts/Sentinel-MediumItal.otf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fontUrl = function fontUrl(url) {
  return "url('".concat(url, "')");
};

var sentinelFontFace = [{
  fontFamily: 'Sentinel',
  src: fontUrl(_SentinelMedium["default"]),
  fontWeight: 'normal',
  fontStyle: 'normal'
}, {
  fontFamily: 'Sentinel',
  src: fontUrl(_SentinelMediumItal["default"]),
  fontWeight: 'normal',
  fontStyle: 'italic'
}, {
  fontFamily: 'Sentinel',
  src: fontUrl(_SentinelBook["default"]),
  fontWeight: 400,
  fontStyle: 'normal'
}];
exports.sentinelFontFace = sentinelFontFace;
var gothamFontFace = [{
  fontFamily: 'Gotham',
  src: fontUrl(_GothamMedium["default"]),
  fontWeight: 500,
  fontStyle: 'normal'
}, {
  fontFamily: 'Gotham',
  src: fontUrl(_GothamBook["default"]),
  fontWeight: 'normal',
  fontStyle: 'normal'
}];
exports.gothamFontFace = gothamFontFace;
var sans = '"Gotham", sans-serif';
exports.sans = sans;
var serif = '"Sentinel", serif'; // TODO: Remove me

exports.serif = serif;
var gothamBookUrl = _GothamBook["default"];
exports.gothamBookUrl = gothamBookUrl;