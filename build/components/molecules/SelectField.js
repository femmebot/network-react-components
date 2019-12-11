"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isArray2 = _interopRequireDefault(require("lodash/isArray"));

var _find2 = _interopRequireDefault(require("lodash/find"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _core = require("@material-ui/core");

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
  fontFamily: _styles.typography.sans,
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
  componentId: "sc-2zd6tl-0"
})(["", ";", ";&& > div,&& input{", ";}"], _styles.sizeStyles, _styles.spaceStyles, (0, _utils.styleObjectToTemplate)(selectFontStyle));

var PlaceholderValue = _styledComponents["default"].div.withConfig({
  displayName: "PlaceholderValue",
  componentId: "sc-2zd6tl-1"
})(["color:", ";text-overflow:ellipsis;overflow:hidden;"], _styles.colors.silver);

var Checkbox = _styledComponents["default"].div.withConfig({
  displayName: "Checkbox",
  componentId: "sc-2zd6tl-2"
})(["width:16px;height:16px;border:1px solid currentColor;border-style:solid;border-width:1px;border-radius:2px;margin-right:", ";", ";"], (0, _utils.pxToRem)(8), function (props) {
  return props.checked ? 'background: currentColor' : "background: ".concat(_styles.colors.white);
});

var PLACEHOLDER_VALUE = 'PLACEHOLDER';

var selectValue = function selectValue(options) {
  return function (v) {
    var option = options.find(function (_ref) {
      var value = _ref.value;
      return value === v;
    });

    if (option) {
      return option.label;
    }

    return undefined;
  };
};

var renderSelectedValue = function renderSelectedValue(options, placeholder) {
  return function (selected) {
    if (!selected) {
      return undefined;
    }

    if (typeof selected === 'string' || typeof selected === 'number') {
      if (selected === PLACEHOLDER_VALUE && placeholder) {
        return _react["default"].createElement(PlaceholderValue, null, placeholder);
      }

      return selectValue(options)(selected);
    }

    if (!(0, _isArray2["default"])(selected)) {
      return '';
    } // selected values that are not options get thrown out


    selected = selected.filter(function (i) {
      return (0, _find2["default"])(options, function (o) {
        return typeof o === 'string' ? o === i : o.value === i;
      });
    });

    if (selected.length === 0 && placeholder) {
      return _react["default"].createElement(PlaceholderValue, null, placeholder);
    }

    return selected.map(selectValue(options)).filter(function (v) {
      return v;
    }).join(', ');
  };
};

var setInitialValue = function setInitialValue(value) {
  if (typeof value === 'string') {
    return value === '' ? PLACEHOLDER_VALUE : value;
  }

  return value.length === 0 ? [PLACEHOLDER_VALUE] : value;
};

var filterSinglePlaceholderOnChange = function filterSinglePlaceholderOnChange(onChange) {
  return function (event) {
    if (event.target.value === PLACEHOLDER_VALUE) {
      event.target.value = '';
    }

    onChange(event);
  };
};

var filterMultiPlaceholderOnChange = function filterMultiPlaceholderOnChange(onChange) {
  return function (event) {
    if ((0, _isArray2["default"])(event.target.value)) {
      event.target.value = event.target.value.filter(function (v) {
        return v !== PLACEHOLDER_VALUE;
      });
    }

    onChange(event);
  };
};

var StyledSelect = (0, _styledComponents["default"])(function (_ref2) {
  var _tallLabel = _ref2.tallLabel,
      props = _objectWithoutProperties(_ref2, ["tallLabel"]);

  return _react["default"].createElement(_core.Select, props);
}).withConfig({
  displayName: "StyledSelect",
  componentId: "sc-2zd6tl-3"
})(["&&{> div > div{border-bottom:1px solid ", ";}[role='button']{text-transform:none;}label + &{margin-top:", ";}}"], _styles.colors.black, function (_ref3) {
  var tallLabel = _ref3.tallLabel;
  return tallLabel ? (0, _utils.pxToRem)(36) : '';
});

var SelectField = function SelectField(_ref4) {
  var label = _ref4.label,
      className = _ref4.className,
      onChange = _ref4.onChange,
      value = _ref4.value,
      id = _ref4.id,
      disabled = _ref4.disabled,
      error = _ref4.error,
      multiple = _ref4.multiple,
      options = _ref4.options,
      name = _ref4.name,
      placeholder = _ref4.placeholder,
      tallLabel = _ref4.tallLabel,
      fullWidth = _ref4.fullWidth,
      _onBlur = _ref4.onBlur,
      styleProps = _objectWithoutProperties(_ref4, ["label", "className", "onChange", "value", "id", "disabled", "error", "multiple", "options", "name", "placeholder", "tallLabel", "fullWidth", "onBlur"]);

  var objectOptions = (0, _objectifyOptions["default"])(options);
  var filterPlaceholder = multiple ? filterMultiPlaceholderOnChange : filterSinglePlaceholderOnChange;
  return _react["default"].createElement(FormControl, _extends({
    id: "form-control-".concat(id)
  }, styleProps, {
    disabled: disabled,
    fullWidth: fullWidth,
    error: !!error,
    className: className
  }), label && _react["default"].createElement(_FieldLabel["default"], {
    htmlFor: id
  }, label), _react["default"].createElement(StyledSelect, {
    id: id,
    error: !!error,
    disabled: disabled,
    disableUnderline: true,
    multiple: multiple,
    renderValue: renderSelectedValue(objectOptions, placeholder),
    name: name,
    inputProps: {
      onChange: filterPlaceholder(onChange)
    },
    value: setInitialValue(value),
    tallLabel: tallLabel
  }, objectOptions.map(function (option) {
    return _react["default"].createElement(MenuItem, {
      key: option.value,
      value: option.value
    }, multiple && _react["default"].createElement(Checkbox, {
      checked: value.includes(option.value)
    }), option.label);
  })), error && _react["default"].createElement(_FieldError["default"], null, error));
};

var _default = SelectField;
exports["default"] = _default;