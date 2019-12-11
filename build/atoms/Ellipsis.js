"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Ellipsis = _styledComponents["default"].div.withConfig({
  displayName: "Ellipsis",
  componentId: "sc-1lv1zo-0"
})(["white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"]);

var _default = Ellipsis;
exports["default"] = _default;