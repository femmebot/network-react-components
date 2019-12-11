"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _MenuList = _interopRequireDefault(require("@material-ui/core/MenuList"));

var React = _interopRequireWildcard(require("react"));

var _iconArchive = _interopRequireDefault(require("../../images/icon-archive.svg"));

var _iconDotMenu = _interopRequireDefault(require("../../images/icon-dot-menu.svg"));

var _ContextMenuItem = _interopRequireDefault(require("../atoms/ContextMenuItem"));

var _IconButton = _interopRequireDefault(require("../atoms/IconButton"));

var _Typography = _interopRequireDefault(require("../atoms/Typography"));

var _UpdateCardInfoModal = _interopRequireDefault(require("./UpdateCardInfoModal"));

var _ConfirmationModal = _interopRequireDefault(require("../molecules/ConfirmationModal"));

var _Dropdown = _interopRequireDefault(require("../molecules/Dropdown"));

var colors = _interopRequireWildcard(require("../../styles/constants/colors"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var InvoiceActionMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InvoiceActionMenu, _React$Component);

  function InvoiceActionMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InvoiceActionMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InvoiceActionMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      openUpdateCardInfo: false,
      openRemoveCardConfirmation: false
    };

    _this.openUpdateCardInfo = function (menuProps) {
      menuProps.closeMenu();

      _this.setState({
        openUpdateCardInfo: true
      });
    };

    _this.openRemoveCardConfirmation = function (menuProps) {
      menuProps.closeMenu();

      _this.setState({
        openRemoveCardConfirmation: true
      });
    };

    _this.closeUpdateCardInfo = function () {
      _this.setState({
        openUpdateCardInfo: false
      });
    };

    _this.makeDefaultCard = function _callee(menuProps) {
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              menuProps.closeMenu();
              _context.next = 3;
              return regeneratorRuntime.awrap(_this.props.makePaymentMethodDefault(_this.props.paymentMethod));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      });
    };

    _this.removeCardConfirmation = function _callee2() {
      return regeneratorRuntime.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(_this.props.destroyPaymentMethod(_this.props.paymentMethod));

            case 2:
              _this.setState({
                openRemoveCardConfirmation: false
              });

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      });
    };

    _this.closeRemoveCardConfirmation = function () {
      _this.setState({
        openRemoveCardConfirmation: false
      });
    };

    _this.getMakeDefaultMenuItem = function (menuProps) {
      return React.createElement(_ContextMenuItem["default"], {
        key: "make-default",
        onClick: function onClick() {
          return _this.makeDefaultCard(menuProps);
        }
      }, React.createElement(_Typography["default"], {
        variant: "instructional",
        style: {
          color: colors.grayBoulder
        }
      }, "Make default"));
    };

    _this.getUpdateInfoMenuItem = function (menuProps) {
      return React.createElement(_ContextMenuItem["default"], {
        key: "update-info",
        onClick: function onClick() {
          return _this.openUpdateCardInfo(menuProps);
        }
      }, React.createElement(_Typography["default"], {
        variant: "instructional",
        style: {
          color: colors.grayBoulder
        }
      }, "Update info"));
    };

    _this.getRemoveMenuItem = function (menuProps) {
      return React.createElement(_ContextMenuItem["default"], {
        key: "remove",
        onClick: function onClick() {
          return _this.openRemoveCardConfirmation(menuProps);
        }
      }, React.createElement(_Typography["default"], {
        variant: "instructional",
        style: {
          color: colors.error
        }
      }, "Remove"));
    };

    _this.getMenuItems = function (menuProps) {
      if (_this.props.paymentMethod.expired) {
        return [_this.getUpdateInfoMenuItem(menuProps), _this.getRemoveMenuItem(menuProps)];
      }

      if (_this.props.paymentMethod["default"]) {
        return [_this.getUpdateInfoMenuItem(menuProps)];
      }

      return [_this.getMakeDefaultMenuItem(menuProps), _this.getUpdateInfoMenuItem(menuProps), _this.getRemoveMenuItem(menuProps)];
    };

    _this.getMenu = function (menuProps) {
      return React.createElement(_MenuList["default"], {
        role: "menu"
      }, _this.getMenuItems(menuProps));
    };

    return _this;
  }

  _createClass(InvoiceActionMenu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(_Dropdown["default"], {
        renderMenu: this.getMenu
      }, function (_ref) {
        var showMenu = _ref.showMenu,
            targetRef = _ref.targetRef;
        return React.createElement("div", {
          ref: function ref(_ref2) {
            targetRef(_ref2);
          }
        }, React.createElement(_ConfirmationModal["default"], {
          icon: _iconArchive["default"],
          buttonText: "Yes, Remove",
          open: _this2.state.openRemoveCardConfirmation,
          onConfirmed: _this2.removeCardConfirmation,
          onClose: _this2.closeRemoveCardConfirmation
        }, "Are you sure you want to remove this credit card from your account?"), React.createElement(_UpdateCardInfoModal["default"], {
          key: "updateCardInfoModal",
          updatePaymentMethod: _this2.props.updatePaymentMethod,
          paymentMethod: _this2.props.paymentMethod,
          open: _this2.state.openUpdateCardInfo,
          onClose: _this2.closeUpdateCardInfo
        }), React.createElement(_IconButton["default"], {
          "aria-haspopup": "true",
          onClick: showMenu
        }, React.createElement(_iconDotMenu["default"], {
          height: 16
        })));
      });
    }
  }]);

  return InvoiceActionMenu;
}(React.Component);

var _default = InvoiceActionMenu;
exports["default"] = _default;