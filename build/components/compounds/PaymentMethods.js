"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@material-ui/core");

var React = _interopRequireWildcard(require("react"));

var _iconPlus = _interopRequireDefault(require("../../images/icon-plus.svg"));

var _CardForm = _interopRequireDefault(require("./CardForm"));

var _Box = _interopRequireDefault(require("../atoms/Box"));

var _Button = _interopRequireDefault(require("../atoms/Button"));

var _PaymentMethodList = _interopRequireDefault(require("./PaymentMethodList"));

var _Modal = _interopRequireDefault(require("../molecules/Modal"));

var _Section = _interopRequireDefault(require("../molecules/Section"));

var colors = _interopRequireWildcard(require("../../styles/constants/colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var PaymentMethods = function PaymentMethods(_ref) {
  var tokenCreated = _ref.tokenCreated,
      paymentMethods = _ref.paymentMethods,
      updatePaymentMethod = _ref.updatePaymentMethod,
      makePaymentMethodDefault = _ref.makePaymentMethodDefault,
      destroyPaymentMethod = _ref.destroyPaymentMethod,
      NoPaymentMethodsComponent = _ref.NoPaymentMethodsComponent,
      FinePrintComponent = _ref.FinePrintComponent,
      BackdropComponent = _ref.BackdropComponent,
      ModalContainer = _ref.ModalContainer,
      openImmediately = _ref.openImmediately;
  return React.createElement(React.Fragment, null, React.createElement(_Section["default"], {
    title: "Payment Methods"
  }, React.createElement(_Box["default"], {
    mb: 20
  }, paymentMethods.length > 0 ? React.createElement(_PaymentMethodList["default"], {
    paymentMethods: paymentMethods,
    updatePaymentMethod: updatePaymentMethod,
    makePaymentMethodDefault: makePaymentMethodDefault,
    destroyPaymentMethod: destroyPaymentMethod
  }) : NoPaymentMethodsComponent ? React.createElement(NoPaymentMethodsComponent, null) : null), React.createElement(_Modal["default"], {
    title: "Add new card",
    container: ModalContainer,
    backdrop: BackdropComponent,
    trigger: React.createElement(_Button["default"], {
      wide: true,
      href: "#"
    }, React.createElement(_iconPlus["default"], {
      width: 15,
      style: {
        fill: colors.black
      }
    }), "Add payment method"),
    openImmediately: openImmediately
  }, function (closeModal) {
    return React.createElement("div", null, React.createElement(_CardForm["default"], {
      onTokenCreated: tokenCreated(closeModal)
    }, function (processing) {
      return React.createElement(React.Fragment, null, FinePrintComponent && React.createElement(FinePrintComponent, null), React.createElement(_core.Grid, {
        container: true,
        justify: "center",
        spacing: 32
      }, React.createElement(_core.Grid, {
        item: true
      }, React.createElement(_Button["default"], {
        disabled: processing,
        onClick: closeModal,
        wide: true
      }, "Cancel")), React.createElement(_core.Grid, {
        item: true
      }, React.createElement(_Button["default"], {
        disabled: processing,
        variant: "commit",
        type: "submit",
        wide: true
      }, "Add card"))));
    }));
  })));
};

var _default = PaymentMethods;
exports["default"] = _default;