"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@material-ui/core");

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _iconClose = _interopRequireDefault(require("../../images/icon-close.svg"));

var _Box = _interopRequireDefault(require("../atoms/Box"));

var _IconButton = _interopRequireDefault(require("../atoms/IconButton"));

var _Typography = _interopRequireDefault(require("../atoms/Typography"));

var _styles = require("../../styles");

var _utils = require("../../styles/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ModalWrapper = (0, _styledComponents["default"])(_core.Modal).withConfig({
  displayName: "ModalWrapper",
  componentId: "l6jkyg-0"
})(["&&{display:flex;justify-content:center;align-items:center;}"]);
var DefaultContainer = (0, _styledComponents["default"])(function (_ref) {
  var _maxWidth = _ref.maxWidth,
      rest = _objectWithoutProperties(_ref, ["maxWidth"]);

  return React.createElement(_core.Paper, rest);
}).withConfig({
  displayName: "DefaultContainer",
  componentId: "l6jkyg-1"
})(["padding:", ";margin:", ";width:80vw;max-width:", ";color:", ";outline:none;"], (0, _utils.pxToRem)(32), (0, _utils.pxToRem)(16), function (_ref2) {
  var maxWidth = _ref2.maxWidth;
  return (0, _utils.pxToRem)(maxWidth ? maxWidth : 640);
}, _styles.colors.black);

var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, props));
    _this.state = {
      open: false
    };
    _this.mounted = false;

    _this.open = function () {
      _this.mounted && _this.setState({
        open: true
      });
    };

    _this.close = function () {
      if (!_this.mounted) {
        return;
      }

      _this.setState({
        open: false
      });

      _this.props.onClose && _this.props.onClose();
    };

    if (_this.props.openImmediately) _this.state = {
      open: true
    };
    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.hasOwnProperty('open') && !!this.props.open !== this.state.open) {
        this.setState({
          open: !!this.props.open
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Container = _this$props.container,
          backdrop = _this$props.backdrop;
      return React.createElement(React.Fragment, null, this.props.trigger && React.createElement("div", {
        onClick: this.open
      }, this.props.trigger), React.createElement(ModalWrapper, {
        open: this.state.open,
        onClose: this.close,
        BackdropComponent: backdrop,
        "data-cy": "modal"
      }, Container ? React.createElement(Container, {
        close: this.close
      }, this.props.children(this.close)) : React.createElement(DefaultContainer, {
        maxWidth: this.props.maxWidth
      }, React.createElement(_core.Grid, {
        container: true
      }, React.createElement(_core.Grid, {
        item: true,
        xs: 11
      }, React.createElement(_Box["default"], {
        mb: 16
      }, React.createElement(_Typography["default"], {
        variant: "heading-2",
        "data-cy": "modal-title"
      }, this.props.title))), React.createElement(_core.Grid, {
        item: true,
        xs: 1
      }, React.createElement(_Typography["default"], {
        align: "right"
      }, React.createElement(_IconButton["default"], {
        onClick: this.close,
        "data-cy": "modal-close-button"
      }, React.createElement(_iconClose["default"], {
        width: "16px",
        height: "16px"
      }))))), this.props.children(this.close))));
    }
  }]);

  return Modal;
}(React.Component);

var _default = Modal;
exports["default"] = _default;