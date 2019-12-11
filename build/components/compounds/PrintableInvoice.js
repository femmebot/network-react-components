"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sumBy2 = _interopRequireDefault(require("lodash/sumBy"));

var _sortBy2 = _interopRequireDefault(require("lodash/sortBy"));

var _partition4 = _interopRequireDefault(require("lodash/partition"));

var React = _interopRequireWildcard(require("react"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid/Grid"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = _interopRequireDefault(require("../atoms/Box"));

var _Center = _interopRequireDefault(require("../atoms/Center"));

var _HorizontalDivider = _interopRequireDefault(require("../atoms/HorizontalDivider"));

var _Typography = _interopRequireDefault(require("../atoms/Typography"));

var _FieldLabel = _interopRequireDefault(require("../atoms/FieldLabel"));

var _styles = require("../../styles");

var _utils = require("../../styles/utils");

var _formatters = require("../../utils/formatters");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "Wrapper",
  componentId: "sc-130g55-0"
})(["padding:", " ", ";max-width:", ";margin:0 auto;@media print{max-width:100%;padding:0;}"], (0, _utils.pxToRem)(90), (0, _utils.pxToRem)(20), (0, _utils.pxToRem)(900));

var AddressItem = _styledComponents["default"].div.withConfig({
  displayName: "AddressItem",
  componentId: "sc-130g55-1"
})(["line-height:1;"]);

var LabelValue = function LabelValue(_ref) {
  var label = _ref.label,
      children = _ref.children;
  return React.createElement(_Grid["default"], {
    item: true,
    container: true,
    alignItems: "center"
  }, React.createElement(_Grid["default"], {
    item: true,
    xs: 4
  }, React.createElement(_FieldLabel["default"], null, label)), React.createElement(_Grid["default"], {
    container: true,
    item: true,
    xs: 8,
    justify: "flex-end"
  }, React.createElement(_Typography["default"], {
    variant: "paragraph"
  }, children)));
};

var Subtotal = function Subtotal(_ref2) {
  var items = _ref2.items;
  return React.createElement(React.Fragment, null, React.createElement(_HorizontalDivider["default"], null), React.createElement(_Grid["default"], {
    container: true
  }, React.createElement(_Grid["default"], {
    item: true,
    xs: 6
  }, React.createElement(_FieldLabel["default"], null, "Subtotal")), React.createElement(_Grid["default"], {
    item: true,
    xs: 6,
    container: true,
    justify: "flex-end"
  }, React.createElement(_Typography["default"], {
    variant: "paragraph"
  }, React.createElement("strong", null, (0, _formatters.formatAsDollarAmount)((0, _sumBy2["default"])(items, 'amount')))))));
};

var CouponLine = function CouponLine(_ref3) {
  var coupon = _ref3.coupon,
      invoice = _ref3.invoice;
  var discountAmount = coupon.amount_off ? coupon.amount_off : invoice.amount * (coupon.percent_off / 100.0);
  return React.createElement(_Grid["default"], {
    container: true,
    spacing: 24
  }, React.createElement(_Grid["default"], {
    item: true,
    xs: 10
  }, React.createElement(_FieldLabel["default"], null, "Promo Code Applied")), React.createElement(_Grid["default"], {
    item: true,
    xs: 2,
    container: true,
    justify: "flex-end"
  }, React.createElement(_Typography["default"], {
    variant: "paragraph"
  }, "(", (0, _formatters.formatAsDollarAmount)(discountAmount), ")")));
};

var Address = function Address(address) {
  return React.createElement(React.Fragment, null, React.createElement(AddressItem, null, address.street1), address.street2 && React.createElement(AddressItem, null, address.street2), React.createElement(AddressItem, null, address.cityStateZip));
};

var guardedDivide = function guardedDivide(amount, quantity) {
  return quantity === 0 ? 0 : amount / quantity;
};

var defaultAddress = {
  street1: '501 The Embarcadero',
  street2: 'Pier 28 Annex',
  cityStateZip: 'San Francisco, CA 94105'
};

var PrintableInvoice = function PrintableInvoice(_ref4) {
  var organization = _ref4.organization,
      invoice = _ref4.invoice,
      subscription = _ref4.subscription,
      logo = _ref4.logo,
      brandTitle = _ref4.brandTitle,
      _ref4$address = _ref4.address,
      address = _ref4$address === void 0 ? defaultAddress : _ref4$address;
  var coupon = subscription ? subscription.coupon : null;
  var paymentMethod = invoice.invoice_items && invoice.invoice_items[0].payment_method;

  var _partition2 = (0, _partition4["default"])(invoice.invoice_items, 'prorated'),
      _partition3 = _slicedToArray(_partition2, 2),
      proRatedItems = _partition3[0],
      items = _partition3[1];

  return React.createElement(Wrapper, null, React.createElement(_Center["default"], {
    mb: 40
  }, React.createElement(_Typography["default"], {
    variant: "heading-2"
  }, "Billing Statement")), logo && React.createElement(_Box["default"], {
    mb: 15
  }, React.createElement("img", {
    src: logo,
    style: {
      width: (0, _utils.pxToRem)(64)
    }
  })), React.createElement(_Box["default"], {
    mb: 50
  }, React.createElement(_Typography["default"], {
    variant: "paragraph"
  }, brandTitle && React.createElement(_Box["default"], {
    mb: 10
  }, React.createElement(AddressItem, null, React.createElement("strong", null, brandTitle))), address && React.createElement(Address, address))), React.createElement(_Grid["default"], {
    container: true
  }, React.createElement(_Grid["default"], {
    item: true,
    xs: 5
  }, React.createElement(LabelValue, {
    label: "Customer"
  }, organization.name_display), React.createElement(LabelValue, {
    label: "Date Paid"
  }, (0, _formatters.formatDate)((0, _formatters.dateParseISO)(invoice.period_end), 'MM/dd/yyyy')), paymentMethod && React.createElement(LabelValue, {
    label: "Payment Method"
  }, paymentMethod.brand, " ending in ", paymentMethod.last4)), React.createElement(_Grid["default"], {
    item: true,
    xs: 2
  }), React.createElement(_Grid["default"], {
    item: true,
    xs: 5
  }, React.createElement(LabelValue, {
    label: "Statement Date"
  }, (0, _formatters.formatDate)((0, _formatters.dateParseISO)(invoice.period_end), 'MM/dd/yyyy')), React.createElement(LabelValue, {
    label: "Statement #"
  }, invoice.id), React.createElement(LabelValue, {
    label: "Billing Period"
  }, (0, _formatters.formatDate)((0, _formatters.dateParseISO)(invoice.period_start), 'MM/dd/yyyy'), " \u2013", (0, _formatters.formatDate)((0, _formatters.dateParseISO)(invoice.period_end), 'MM/dd/yyyy')))), React.createElement(_Box["default"], {
    mt: 80,
    mb: 20
  }, React.createElement(_Typography["default"], {
    variant: "heading-2"
  }, "Summary"), React.createElement(_HorizontalDivider["default"], null)), !!items.length && React.createElement(React.Fragment, null, React.createElement(_Grid["default"], {
    container: true,
    spacing: 24
  }, React.createElement(_Grid["default"], {
    item: true,
    xs: 5
  }, React.createElement(_FieldLabel["default"], null, "Description")), React.createElement(_Grid["default"], {
    item: true,
    xs: 3,
    container: true,
    justify: "flex-end"
  }, React.createElement(_FieldLabel["default"], null, "Unit Price")), React.createElement(_Grid["default"], {
    item: true,
    xs: 2,
    container: true,
    justify: "flex-end"
  }, React.createElement(_FieldLabel["default"], null, "Quantity")), React.createElement(_Grid["default"], {
    item: true,
    xs: 2,
    container: true,
    justify: "flex-end",
    style: {
      textAlign: 'right'
    }
  }, React.createElement(_FieldLabel["default"], null, "Amount"))), items.map(function (invoiceItem) {
    return React.createElement(_Grid["default"], {
      key: "invoice-item-".concat(invoiceItem.id),
      container: true,
      spacing: 24
    }, React.createElement(_Grid["default"], {
      item: true,
      xs: 5
    }, React.createElement(_Typography["default"], {
      variant: "paragraph"
    }, invoiceItem.description)), React.createElement(_Grid["default"], {
      item: true,
      xs: 3,
      container: true,
      justify: "flex-end"
    }, invoiceItem.quantity && React.createElement(_Typography["default"], {
      variant: "paragraph"
    }, (0, _formatters.formatAsDollarAmount)(guardedDivide(invoiceItem.amount, invoiceItem.quantity)))), React.createElement(_Grid["default"], {
      item: true,
      xs: 2,
      container: true,
      justify: "flex-end"
    }, React.createElement(_Typography["default"], {
      variant: "paragraph"
    }, invoiceItem.quantity)), React.createElement(_Grid["default"], {
      item: true,
      xs: 2,
      container: true,
      justify: "flex-end"
    }, React.createElement(_Typography["default"], {
      variant: "paragraph"
    }, (0, _formatters.formatAsDollarAmount)(invoiceItem.amount))));
  }), React.createElement(Subtotal, {
    items: items
  })), !!proRatedItems.length && React.createElement(React.Fragment, null, React.createElement(_Box["default"], {
    mt: 50
  }, React.createElement(_Grid["default"], {
    container: true,
    spacing: 24
  }, React.createElement(_Grid["default"], {
    item: true,
    xs: 5
  }, React.createElement(_FieldLabel["default"], null, "Description")), React.createElement(_Grid["default"], {
    item: true,
    xs: 3,
    container: true,
    justify: "flex-end"
  }, React.createElement(_FieldLabel["default"], null, "Price Per User Day")), React.createElement(_Grid["default"], {
    item: true,
    xs: 2,
    container: true,
    justify: "flex-end"
  }, React.createElement(_FieldLabel["default"], null, "User Days")), React.createElement(_Grid["default"], {
    item: true,
    xs: 2,
    container: true,
    justify: "flex-end"
  }, React.createElement(_FieldLabel["default"], null, "Amount")))), React.createElement(_Box["default"], {
    my: 10
  }, React.createElement(_Typography["default"], {
    variant: "paragraph"
  }, subscription.plan.name, " - prorated user days")), (0, _sortBy2["default"])(proRatedItems, function (x) {
    return new Date(x.period_start).getTime();
  }).map(function (invoiceItem) {
    return React.createElement(_Grid["default"], {
      key: "invoice-item-".concat(invoiceItem.id),
      container: true,
      spacing: 24
    }, React.createElement(_Grid["default"], {
      item: true,
      xs: 6
    }, React.createElement(_Typography["default"], {
      variant: "paragraph"
    }, React.createElement(_Box["default"], {
      ml: 15
    }, invoiceItem.description))), React.createElement(_Grid["default"], {
      item: true,
      xs: 2,
      container: true,
      justify: "flex-end"
    }, React.createElement(_Typography["default"], {
      variant: "paragraph"
    }, (0, _formatters.formatAsDollarAmount)(invoiceItem.unit_amount))), React.createElement(_Grid["default"], {
      item: true,
      xs: 2,
      container: true,
      justify: "flex-end"
    }, React.createElement(_Typography["default"], {
      variant: "paragraph"
    }, invoiceItem.quantity)), React.createElement(_Grid["default"], {
      item: true,
      xs: 2,
      container: true,
      justify: "flex-end"
    }, React.createElement(_Typography["default"], {
      variant: "paragraph"
    }, (0, _formatters.formatAsDollarAmount)(invoiceItem.amount))));
  }), React.createElement(Subtotal, {
    items: proRatedItems
  })), React.createElement(_Box["default"], {
    mt: 50
  }, React.createElement(_Grid["default"], {
    container: true,
    spacing: 24
  }, React.createElement(_Grid["default"], {
    item: true,
    xs: 10
  }, React.createElement(_FieldLabel["default"], null, "Total")), React.createElement(_Grid["default"], {
    item: true,
    xs: 2,
    container: true,
    justify: "flex-end"
  }, React.createElement(_Typography["default"], {
    variant: "paragraph"
  }, React.createElement("strong", null, (0, _formatters.formatAsDollarAmount)(invoice.subtotal))))), coupon && React.createElement(CouponLine, {
    coupon: coupon,
    invoice: invoice
  }), React.createElement(_HorizontalDivider["default"], {
    color: _styles.colors.black
  }), React.createElement(_Grid["default"], {
    container: true,
    spacing: 24,
    alignItems: "flex-end"
  }, React.createElement(_Grid["default"], {
    item: true,
    xs: 10,
    container: true,
    justify: "flex-end"
  }, React.createElement(_Typography["default"], {
    variant: "heading-2"
  }, "Amount Due")), React.createElement(_Grid["default"], {
    item: true,
    xs: 2,
    container: true,
    justify: "flex-end"
  }, React.createElement(_Typography["default"], {
    variant: "paragraph"
  }, React.createElement("strong", null, (0, _formatters.formatAsDollarAmount)(invoice.amount)))))), React.createElement(_Box["default"], {
    mt: 80
  }, React.createElement(_Typography["default"], {
    variant: "instructional"
  }, "You can cancel at any time by accessing your Account Settings or by contacting us at productsupport@ideo.com. If you cancel, you still may be charged for the current billing period.")));
};

var _default = PrintableInvoice;
exports["default"] = _default;