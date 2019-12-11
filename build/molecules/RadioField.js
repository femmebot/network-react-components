"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Radio = _interopRequireDefault(require("@material-ui/core/Radio"));

var _RadioGroup = _interopRequireDefault(require("@material-ui/core/RadioGroup"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _FieldError = _interopRequireDefault(require("../atoms/FieldError"));

var _FieldLabel = _interopRequireDefault(require("../atoms/FieldLabel"));

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
  componentId: "sc-1frgxof-0"
})(["", ";", ";&& input{border-bottom:1px solid ", ";}&& > div,&& input{", ";}"], _styles.sizeStyles, _styles.spaceStyles, _styles.colors.black, fontStyles);

var RadioField = function RadioField(_ref3) {
  var label = _ref3.label,
      className = _ref3.className,
      _onChange = _ref3.onChange,
      options = _ref3.options,
      value = _ref3.value,
      name = _ref3.name,
      id = _ref3.id,
      _ref3$labelPlacement = _ref3.labelPlacement,
      labelPlacement = _ref3$labelPlacement === void 0 ? 'end' : _ref3$labelPlacement,
      disabled = _ref3.disabled,
      error = _ref3.error,
      format = _ref3.format,
      styleProps = _objectWithoutProperties(_ref3, ["label", "className", "onChange", "options", "value", "name", "id", "labelPlacement", "disabled", "error", "format"]);

  return _react["default"].createElement(FormControl, _extends({}, styleProps, {
    disabled: disabled,
    error: !!error,
    className: className
  }), label && _react["default"].createElement(_FieldLabel["default"], {
    htmlFor: id
  }, label), _react["default"].createElement(_RadioGroup["default"], {
    name: name,
    onChange: function onChange(event, eventValue) {
      return _onChange && _onChange(event, eventValue);
    },
    value: format && value ? format(value) : value,
    row: true
  }, options.map(function (option) {
    return _react["default"].createElement(_FormControlLabel["default"], {
      key: option,
      value: option,
      label: option,
      control: _react["default"].createElement(_Radio["default"], {
        color: "primary"
      }),
      labelPlacement: labelPlacement,
      "data-cy": "".concat(name, "-").concat(option)
    });
  })), error && _react["default"].createElement(_FieldError["default"], null, error));
};

var _default = RadioField;
exports["default"] = _default;