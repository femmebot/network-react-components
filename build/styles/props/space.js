"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isUndefined2 = _interopRequireDefault(require("lodash/isUndefined"));

var _margin = _interopRequireDefault(require("../margin"));

var _padding = _interopRequireDefault(require("../padding"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var REG = /^[mp][trblxy]?$/;
var properties = {
  m: _margin["default"],
  p: _padding["default"]
};
var directions = {
  t: 'top',
  r: 'right',
  b: 'bottom',
  l: 'left',
  x: 'x',
  y: 'y'
};

var getProperty = function getProperty(key) {
  var _key$split = key.split(''),
      _key$split2 = _slicedToArray(_key$split, 2),
      a = _key$split2[0],
      b = _key$split2[1];

  var prop = properties[a];
  var dir = directions[b];
  var func = dir ? prop[dir] : prop;
  return func;
};

var space = function space(props) {
  var keys = Object.keys(props).filter(function (key) {
    return REG.test(key);
  }).sort();
  return keys.map(function (key) {
    var value = props[key];

    if ((0, _isUndefined2["default"])(value)) {
      return {};
    }

    var property = getProperty(key);
    return property(value);
  });
};

var _default = space;
exports["default"] = _default;