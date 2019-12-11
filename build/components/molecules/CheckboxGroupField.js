"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _core = require("@material-ui/core");

var _Box = _interopRequireDefault(require("../atoms/Box"));

var _FieldError = _interopRequireDefault(require("../atoms/FieldError"));

var _FieldLabel = _interopRequireDefault(require("../atoms/FieldLabel"));

var _styles = require("../../styles");

var _utils = require("../../styles/utils");

var _objectifyOptions = _interopRequireDefault(require("../../utils/objectifyOptions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var selectFontStyle = {
  fontFamily: _styles.typography.serif,
  fontSize: (0, _utils.pxToRem)(16),
  lineHeight: 1.1,
  letterSpacing: (0, _utils.pxToRem)(0.6),
  textTransform: 'inherit',
  fontWeight: 'normal'
};
/* need to type as any because textTransform and fontWeight arent typed
 * correctly on material-ui */

var menuItemStyles = {
  root: _objectSpread({}, selectFontStyle, {
    color: _styles.colors.grayBoulder,
    '&:hover': {
      color: _styles.colors.black,
      background: 'none'
    }
  }),
  selected: {
    background: "".concat(_styles.colors.white, " !important"),
    color: _styles.colors.black
  }
};

var BaseMenuItem = function BaseMenuItem(props) {
  return _react["default"].createElement(_core.MenuItem, props);
};

var MenuItem = (0, _core.withStyles)(menuItemStyles)(BaseMenuItem);
var FormControl = (0, _styledComponents["default"])(_core.FormControl).withConfig({
  displayName: "FormControl",
  componentId: "sc-17hd0kf-0"
})(["", ";", ";&& > div,&& input{", ";}"], _styles.sizeStyles, _styles.spaceStyles, (0, _utils.styleObjectToTemplate)(selectFontStyle));

var Checkbox = _styledComponents["default"].div.withConfig({
  displayName: "Checkbox",
  componentId: "sc-17hd0kf-1"
})(["width:16px;height:16px;border:1px solid currentColor;border-style:solid;border-width:1px;border-radius:2px;margin-right:", ";", ";"], (0, _utils.pxToRem)(8), function (props) {
  return props.checked ? 'background: currentColor' : "background: ".concat(_styles.colors.white);
});

var StyledMenuItem = (0, _styledComponents["default"])(MenuItem).withConfig({
  displayName: "StyledMenuItem",
  componentId: "sc-17hd0kf-2"
})(["&&{padding-left:0;}"]);

var CheckboxGroupField = function CheckboxGroupField(_ref) {
  var label = _ref.label,
      className = _ref.className,
      onChange = _ref.onChange,
      value = _ref.value,
      id = _ref.id,
      disabled = _ref.disabled,
      error = _ref.error,
      options = _ref.options,
      _onBlur = _ref.onBlur,
      styleProps = _objectWithoutProperties(_ref, ["label", "className", "onChange", "value", "id", "disabled", "error", "options", "onBlur"]);

  var objectOptions = (0, _objectifyOptions["default"])(options);
  return _react["default"].createElement(FormControl, _extends({}, styleProps, {
    disabled: disabled,
    error: !!error,
    className: className
  }), label && _react["default"].createElement(_FieldLabel["default"], {
    htmlFor: id
  }, label), _react["default"].createElement(_Box["default"], {
    pt: 20
  }, objectOptions.map(function (option) {
    return _react["default"].createElement(StyledMenuItem, {
      onClick: function onClick() {
        return onChange(value.includes(option.value) ? value.filter(function (i) {
          return i !== option.value;
        }) : value.concat([option.value]));
      },
      key: option.value,
      value: option.value
    }, _react["default"].createElement(Checkbox, {
      checked: value.includes(option.value)
    }), option.label);
  })), error && _react["default"].createElement(_FieldError["default"], null, error));
};

var _default = CheckboxGroupField;
exports["default"] = _default;