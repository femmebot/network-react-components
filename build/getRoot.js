"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'root';
  var root = document.getElementById(id);
  if (!root) throw new Error('Could not find element with id="root"');
  return root;
};

exports["default"] = _default;