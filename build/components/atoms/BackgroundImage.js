"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var backgroundStyles = function backgroundStyles(_ref) {
  var repeat = _ref.repeat,
      src = _ref.src;
  return "\n  background: url('".concat(src, "');\n  background-repeat: ").concat(repeat ? 'repeat' : 'no-repeat', ";\n  background-size: ").concat(repeat ? 'auto' : 'cover', ";\n  background-position: center;\n");
};

var StyledBackgroundImage = _styledComponents["default"].div.withConfig({
  displayName: "StyledBackgroundImage",
  componentId: "sc-14n2veu-0"
})(["width:100%;height:100%;", ";"], backgroundStyles);

var BackgroundImage = function BackgroundImage(props) {
  return _react["default"].createElement(StyledBackgroundImage, props);
};

var _default = BackgroundImage;
exports["default"] = _default;