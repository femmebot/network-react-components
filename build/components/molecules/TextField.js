"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FieldError = _interopRequireDefault(require("../atoms/FieldError"));

var _FieldLabel = _interopRequireDefault(require("../atoms/FieldLabel"));

var _TextInput = _interopRequireDefault(require("../atoms/TextInput"));

var _styles = require("../../styles");

var _utils = require("../../styles/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var fontStyles = function fontStyles(_ref) {
  var _ref$inheritFont = _ref.inheritFont,
      inheritFont = _ref$inheritFont === void 0 ? false : _ref$inheritFont;

  if (inheritFont) {
    return "\n      font: inherit;\n      color: inherit;\n      letter-spacing: inherit;\n      line-height: inherit;\n    ";
  }

  return "\n    font-family: ".concat(_styles.typography.sans, ";\n    font-size: ").concat((0, _utils.pxToRem)(16), ";\n    line-height: 1.1;\n    letter-spacing: ").concat((0, _utils.pxToRem)(0.6), ";\n  ");
};

var FormControl = (0, _styledComponents["default"])(function (_ref2) {
  var children = _ref2.children,
      disabled = _ref2.disabled,
      error = _ref2.error,
      className = _ref2.className;
  return _react["default"].createElement(_FormControl["default"], {
    disabled: disabled,
    error: error,
    className: className
  }, children);
}).withConfig({
  displayName: "FormControl",
  componentId: "tbufsz-0"
})(["", ";", ";&& input{border-bottom:1px solid ", ";}&& > div,&& input{", ";}&& input#pill-input{border-bottom:none;&:focus{border-bottom:1px solid ", " !important;}}"], _styles.sizeStyles, _styles.spaceStyles, _styles.colors.black, fontStyles, _styles.colors.black);

var TextField = function TextField(_ref3) {
  var autoComplete = _ref3.autoComplete,
      label = _ref3.label,
      placeholder = _ref3.placeholder,
      className = _ref3.className,
      onChange = _ref3.onChange,
      autoFocus = _ref3.autoFocus,
      value = _ref3.value,
      id = _ref3.id,
      onPaste = _ref3.onPaste,
      onKeyPress = _ref3.onKeyPress,
      onBlur = _ref3.onBlur,
      onFocus = _ref3.onFocus,
      _ref3$type = _ref3.type,
      type = _ref3$type === void 0 ? 'text' : _ref3$type,
      disabled = _ref3.disabled,
      error = _ref3.error,
      multiline = _ref3.multiline,
      rowsMax = _ref3.rowsMax,
      format = _ref3.format,
      startAdornment = _ref3.startAdornment,
      endAdornment = _ref3.endAdornment,
      readOnly = _ref3.readOnly,
      required = _ref3.required,
      styleProps = _objectWithoutProperties(_ref3, ["autoComplete", "label", "placeholder", "className", "onChange", "autoFocus", "value", "id", "onPaste", "onKeyPress", "onBlur", "onFocus", "type", "disabled", "error", "multiline", "rowsMax", "format", "startAdornment", "endAdornment", "readOnly", "required"]);

  return _react["default"].createElement(FormControl, _extends({}, styleProps, {
    disabled: disabled,
    error: !!error,
    className: className
  }), label && _react["default"].createElement(_FieldLabel["default"], {
    htmlFor: id
  }, label), _react["default"].createElement(_TextInput["default"], {
    id: id,
    error: !!error,
    autoFocus: autoFocus,
    disabled: disabled,
    placeholder: placeholder,
    multiline: multiline,
    rowsMax: rowsMax,
    disableUnderline: true,
    inputProps: {
      readOnly: readOnly,
      onChange: onChange,
      onPaste: onPaste,
      onKeyPress: onKeyPress,
      onBlur: onBlur,
      onFocus: onFocus,
      required: required,
      autoComplete: autoComplete
    },
    startAdornment: startAdornment,
    endAdornment: endAdornment,
    type: type,
    value: format && value ? format(value) : value
  }), error && _react["default"].createElement(_FieldError["default"], null, error));
};

var _default = TextField;
exports["default"] = _default;