"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pick2 = _interopRequireDefault(require("lodash/pick"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var flexProperties = ['alignContent', 'alignItems', 'alignSelf', 'display', 'flex', 'flexBasis', 'flexDirection', 'flexGrow', 'flexShrink', 'flexWrap', 'justifyContent', 'order'];

var flexbox = function flexbox(props) {
  return (0, _pick2["default"])(props, flexProperties);
};

var _default = flexbox;
exports["default"] = _default;