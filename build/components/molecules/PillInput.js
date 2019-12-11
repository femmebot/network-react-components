"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uniq2 = _interopRequireDefault(require("lodash/uniq"));

var _core = require("@material-ui/core");

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _iconClose = _interopRequireDefault(require("../../images/icon-close.svg"));

var _Flex = _interopRequireDefault(require("../atoms/Flex"));

var _TextField = _interopRequireDefault(require("./TextField"));

var _styles = require("../../styles");

var _themes = require("../../styles/themes");

var _typography = require("../../styles/typography");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Pills = _styledComponents["default"].div.withConfig({
  displayName: "Pills",
  componentId: "sc-1jbaoih-0"
})(["font-family:", ";"], _typography.serif);

var Pill = (0, _themes.withTheme)((0, _styledComponents["default"])(_Flex["default"]).withConfig({
  displayName: "Pill",
  componentId: "sc-1jbaoih-1"
})(["background:", ";position:relative;&:hover{button{display:block;}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.palette.grey[300];
}));
var PillButton = (0, _themes.withTheme)(_styledComponents["default"].button.withConfig({
  displayName: "PillButton",
  componentId: "sc-1jbaoih-2"
})(["position:absolute;right:0;top:0;bottom:0;color:", ";border:0;background:", ";display:none;cursor:pointer;&:hover{color:black;}"], _styles.colors.silver, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.grey[300];
}));
var StyledTextField = (0, _styledComponents["default"])(_TextField["default"]).withConfig({
  displayName: "StyledTextField",
  componentId: "sc-1jbaoih-3"
})(["&&{min-width:350px;}"]);

var PillInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PillInput, _React$Component);

  function PillInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PillInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PillInput)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      input: ''
    };

    _this.addPills = function (value) {
      var validValue = value.filter(function (item) {
        return _this.validateInput(item);
      });

      if (validValue.length < 1) {
        return;
      }

      var newValue = (0, _uniq2["default"])([].concat(_toConsumableArray(_this.props.value), _toConsumableArray(validValue)));

      _this.setState({
        input: ''
      });

      _this.props.onChange(newValue);
    };

    _this.commit = function (e) {
      var item = e.target.value;

      _this.addPills([item]);
    };

    _this.handleChange = function (e) {
      _this.handleInput(e.target.value);
    };

    _this.maybeCommit = function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();

        _this.addPills([_this.state.input]);
      }
    };

    _this.handleInput = function (input) {
      var separator = _this.props.separator || ',';

      if (input.match(separator)) {
        _this.addPills(input.split(separator).filter(function (x) {
          return x;
        }));
      } else {
        _this.setState({
          input: input
        });
      }
    };

    _this.removeItem = function (item) {
      return function () {
        var remainingValue = _this.props.value.filter(function (i) {
          return item !== i;
        });

        _this.props.onChange(remainingValue);
      };
    };

    _this.validateInput = function (value) {
      if (!_this.props.validator) {
        return true;
      }

      return _this.props.validator(value);
    };

    return _this;
  }

  _createClass(PillInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(Pills, null, React.createElement(_core.Grid, {
        container: true,
        spacing: 8,
        alignItems: "center",
        "data-cy": "email-pill-container"
      }, this.props.value.map(function (item) {
        return React.createElement(_core.Grid, {
          item: true,
          key: item
        }, React.createElement(Pill, {
          px: 10,
          py: 8,
          justifyContent: "center",
          alignItems: "center",
          "data-cy": "email-pill"
        }, item, React.createElement(PillButton, {
          onClick: _this2.removeItem(item)
        }, React.createElement(_iconClose["default"], {
          width: "11px",
          height: "11px"
        }))));
      }), React.createElement(_core.Grid, {
        item: true
      }, React.createElement(StyledTextField, _extends({
        type: "text",
        id: "pill-input",
        placeholder: this.props.value.length === 0 ? this.props.emptyPlaceholder : this.props.nonEmptyPlaceholder,
        onBlur: this.commit,
        onChange: this.handleChange,
        onKeyPress: this.maybeCommit,
        value: this.state.input
      }, this.props.textFieldProps)))));
    }
  }]);

  return PillInput;
}(React.Component);

var _default = PillInput;
exports["default"] = _default;