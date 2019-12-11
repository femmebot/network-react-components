"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@material-ui/core");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var React = _interopRequireWildcard(require("react"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = _interopRequireDefault(require("../atoms/Box"));

var _FieldLabel = _interopRequireDefault(require("../atoms/FieldLabel"));

var _styles = require("../../styles");

var _utils = require("../../styles/utils");

var _objectifyOptions = _interopRequireDefault(require("../../utils/objectifyOptions"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function NoOptionsMessage(props) {
  return React.createElement(_Box["default"], {
    p: 10
  }, props.children);
}

var InputComponent = _styledComponents["default"].div.withConfig({
  displayName: "InputComponent",
  componentId: "kg7a80-0"
})(["&&{> *:last-child{position:absolute;right:0;top:", ";}padding:0;}"], (0, _utils.pxToRem)(-10));

var StyledTextInput = (0, _styledComponents["default"])(_TextField["default"]).withConfig({
  displayName: "StyledTextInput",
  componentId: "kg7a80-1"
})(["&&{border-bottom:1px solid ", ";text-transform:none;}"], _styles.colors.black);

function Control(props) {
  return React.createElement(StyledTextInput, _extends({
    fullWidth: true,
    autoComplete: "off",
    InputProps: {
      inputComponent: InputComponent,
      disableUnderline: true,
      inputProps: _objectSpread({
        inputRef: props.innerRef,
        children: props.children
      }, props.innerProps)
    }
  }, props.selectProps.textFieldProps));
}

function Option(props) {
  return React.createElement(MenuItem // @ts-ignore
  , _extends({
    buttonRef: props.innerRef,
    selected: props.isFocused
  }, props.innerProps), props.children);
}

var SingleValue = (0, _styledComponents["default"])('div').withConfig({
  displayName: "SingleValue",
  componentId: "kg7a80-2"
})(["position:absolute;left:0;top:0;font-family:", ";font-size:", ";line-height:1.1;letter-spacing:", ";"], _styles.typography.sans, (0, _utils.pxToRem)(16), (0, _utils.pxToRem)(0.6));
var Placeholder = (0, _styledComponents["default"])('div').withConfig({
  displayName: "Placeholder",
  componentId: "kg7a80-3"
})(["color:", ";position:absolute;left:0;top:0;font-family:", ";font-size:", ";line-height:1.1;letter-spacing:", ";"], _styles.colors.silver, _styles.typography.sans, (0, _utils.pxToRem)(16), (0, _utils.pxToRem)(0.6));
var ValueContainer = (0, _styledComponents["default"])('div').withConfig({
  displayName: "ValueContainer",
  componentId: "kg7a80-4"
})(["position:relative;"]);
var MenuWrapper = (0, _styledComponents["default"])(_Paper["default"]).withConfig({
  displayName: "MenuWrapper",
  componentId: "kg7a80-5"
})(["position:absolute;z-index:1;"]);

var Menu = function Menu(props) {
  return React.createElement(MenuWrapper, _extends({
    square: true
  }, props.innerProps), props.children);
};

var selectFontStyle = {
  fontFamily: _styles.typography.sans,
  fontSize: (0, _utils.pxToRem)(16),
  lineHeight: 1.1,
  letterSpacing: (0, _utils.pxToRem)(0.6),
  textTransform: 'inherit',
  fontWeight: 'normal'
};
var menuItemStyles = {
  root: _objectSpread({}, selectFontStyle, {
    color: _styles.colors.grayBoulder,
    textTransform: 'none',
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
  return React.createElement(_core.MenuItem, props);
};

var MenuItem = (0, _core.withStyles)(menuItemStyles)(BaseMenuItem);
var FormControl = (0, _styledComponents["default"])(_core.FormControl).withConfig({
  displayName: "FormControl",
  componentId: "kg7a80-6"
})(["", ";", ";&& > div,&& input{", ";}"], _styles.sizeStyles, _styles.spaceStyles, (0, _utils.styleObjectToTemplate)(selectFontStyle));

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "Wrapper",
  componentId: "kg7a80-7"
})([""]);

var components = {
  Option: Option,
  Control: Control,
  NoOptionsMessage: NoOptionsMessage,
  Placeholder: Placeholder,
  SingleValue: SingleValue,
  ValueContainer: ValueContainer,
  Menu: Menu
};

var TypeAheadSelectField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TypeAheadSelectField, _React$Component);

  function TypeAheadSelectField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TypeAheadSelectField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TypeAheadSelectField)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      value: null
    };

    _this.handleChange = function (selected) {
      _this.setState({
        value: selected
      });

      _this.props.onChange(selected ? selected.value : null);
    };

    return _this;
  }

  _createClass(TypeAheadSelectField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var objectOptions = (0, _objectifyOptions["default"])(this.props.options);
      var value = objectOptions.find(function (x) {
        return typeof _this2.props.value === 'string' ? x.value === _this2.props.value : x === _this2.props.value;
      });

      if (value) {
        this.setState({
          value: value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var objectOptions = (0, _objectifyOptions["default"])(this.props.options);

      var _this$props = this.props,
          id = _this$props.id,
          disabled = _this$props.disabled,
          error = _this$props.error,
          name = _this$props.name,
          className = _this$props.className,
          label = _this$props.label,
          placeholder = _this$props.placeholder,
          onChange = _this$props.onChange,
          styleProps = _objectWithoutProperties(_this$props, ["id", "disabled", "error", "name", "className", "label", "placeholder", "onChange"]);

      return React.createElement(FormControl, _extends({
        id: "form-control-".concat(id)
      }, styleProps, {
        disabled: disabled,
        error: !!error,
        className: className,
        fullWidth: true
      }), label && React.createElement(_Box["default"], {
        mb: 18
      }, React.createElement(_FieldLabel["default"], {
        htmlFor: id
      }, label)), React.createElement(Wrapper, null, React.createElement(_reactSelect["default"], {
        name: name,
        options: objectOptions,
        components: components,
        value: this.state.value,
        onChange: this.handleChange,
        onFocus: function onFocus() {
          return _this3.setState({
            value: null
          });
        },
        placeholder: placeholder || '',
        isClearable: true
      })));
    }
  }]);

  return TypeAheadSelectField;
}(React.Component);

var _default = TypeAheadSelectField;
exports["default"] = _default;