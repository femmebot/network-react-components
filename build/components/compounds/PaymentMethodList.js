"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _core = require("@material-ui/core");

var React = _interopRequireWildcard(require("react"));

var _FieldLabel = _interopRequireDefault(require("../atoms/FieldLabel"));

var _PaymentMethodActionMenu = _interopRequireDefault(require("./PaymentMethodActionMenu"));

var _CardExpirationField = _interopRequireDefault(require("../molecules/CardExpirationField"));

var _CardNameField = _interopRequireDefault(require("../molecules/CardNameField"));

var _CardStateField = _interopRequireDefault(require("../molecules/CardStateField"));

var _InAppPurchaseField = _interopRequireDefault(require("../molecules/InAppPurchaseField"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PaymentMethodList = function PaymentMethodList(_ref) {
  var paymentMethods = _ref.paymentMethods,
      updatePaymentMethod = _ref.updatePaymentMethod,
      makePaymentMethodDefault = _ref.makePaymentMethodDefault,
      destroyPaymentMethod = _ref.destroyPaymentMethod;
  return !(0, _isEmpty2["default"])(paymentMethods) ? React.createElement(React.Fragment, null, React.createElement(_core.Grid, {
    container: true,
    spacing: 40
  }, React.createElement(_core.Grid, {
    item: true,
    xs: 3
  }, React.createElement(_FieldLabel["default"], null, "Cards on file")), React.createElement(_core.Grid, {
    item: true,
    xs: 3
  }, React.createElement(_FieldLabel["default"], null, "Expiry")), React.createElement(_core.Grid, {
    item: true,
    xs: 3
  }, React.createElement(_FieldLabel["default"], null, "In-App Purchases")), React.createElement(_core.Grid, {
    item: true,
    xs: 3
  }, React.createElement(_FieldLabel["default"], null, "Status"))), paymentMethods.map(function (paymentMethod) {
    return React.createElement(_core.Grid, {
      container: true,
      spacing: 40,
      key: paymentMethod.id
    }, React.createElement(_core.Grid, {
      item: true,
      xs: 3
    }, React.createElement(_CardNameField["default"], {
      paymentMethod: paymentMethod
    })), React.createElement(_core.Grid, {
      item: true,
      xs: 3
    }, React.createElement(_CardExpirationField["default"], {
      paymentMethod: paymentMethod
    })), React.createElement(_core.Grid, {
      item: true,
      xs: 3
    }, React.createElement(_InAppPurchaseField["default"], {
      paymentMethod: paymentMethod
    })), React.createElement(_core.Grid, {
      item: true,
      xs: 2
    }, React.createElement(_CardStateField["default"], {
      paymentMethod: paymentMethod
    })), React.createElement(_core.Grid, {
      item: true,
      xs: 1
    }, React.createElement(_PaymentMethodActionMenu["default"], {
      paymentMethod: paymentMethod,
      updatePaymentMethod: updatePaymentMethod,
      makePaymentMethodDefault: makePaymentMethodDefault,
      destroyPaymentMethod: destroyPaymentMethod
    })));
  })) : null;
};

var _default = PaymentMethodList;
exports["default"] = _default;