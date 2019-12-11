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

var _Button = _interopRequireDefault(require("../atoms/Button"));

var _Flex = _interopRequireDefault(require("../atoms/Flex"));

var _IconButton = _interopRequireDefault(require("../atoms/IconButton"));

var _Typography = _interopRequireDefault(require("../atoms/Typography"));

var _Modal = _interopRequireDefault(require("./Modal"));

var _styles = require("../../styles");

var _utils = require("../../styles/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var ContentWrapper = (0, _styledComponents["default"])(_core.Paper).withConfig({
  displayName: "ContentWrapper",
  componentId: "sc-1eyefqm-0"
})(["&&{width:", ";max-width:", ";background:", ";outline:none;}"], (0, _utils.pxToRem)(380), (0, _utils.pxToRem)(800), _styles.colors.ctaPrimary);

var ConfirmationModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ConfirmationModal, _React$Component);

  function ConfirmationModal() {
    _classCallCheck(this, ConfirmationModal);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConfirmationModal).apply(this, arguments));
  }

  _createClass(ConfirmationModal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          buttonText = _this$props.buttonText,
          Icon = _this$props.icon,
          onConfirmed = _this$props.onConfirmed,
          modalProps = _objectWithoutProperties(_this$props, ["children", "buttonText", "icon", "onConfirmed"]);

      return React.createElement(_Modal["default"], _extends({}, modalProps, {
        container: ContentWrapper
      }), function (closeModal) {
        return React.createElement(React.Fragment, null, React.createElement(_Flex["default"], {
          p: 16,
          justifyContent: "flex-end"
        }, React.createElement(_IconButton["default"], {
          onClick: closeModal
        }, React.createElement(_iconClose["default"], {
          width: "16px",
          height: "16"
        }))), React.createElement(_Flex["default"], {
          pb: 16,
          px: 32,
          flexDirection: "column"
        }, Icon && React.createElement(_Flex["default"], {
          justifyContent: "center",
          mb: 32
        }, React.createElement(Icon, {
          height: "45"
        })), React.createElement(_Box["default"], {
          mb: 32
        }, React.createElement(_Typography["default"], {
          align: "center"
        }, children)), React.createElement(_Flex["default"], {
          justifyContent: "space-between"
        }, React.createElement(_Button["default"], {
          onClick: closeModal
        }, "Cancel"), React.createElement(_Button["default"], {
          "data-cy": "confirmation-modal-button",
          onClick: function onClick() {
            return onConfirmed(closeModal);
          }
        }, buttonText))));
      });
    }
  }]);

  return ConfirmationModal;
}(React.Component);

var _default = ConfirmationModal;
exports["default"] = _default;