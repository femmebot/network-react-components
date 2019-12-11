"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@material-ui/core");

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _iconDownload = _interopRequireDefault(require("../../images/icon-download.svg"));

var _Typography = _interopRequireDefault(require("../atoms/Typography"));

var _FieldLabel = _interopRequireDefault(require("../atoms/FieldLabel"));

var _Section = _interopRequireDefault(require("../molecules/Section"));

var _formatters = require("../../utils/formatters");

var _styles = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Link = _styledComponents["default"].a.withConfig({
  displayName: "Link",
  componentId: "sc-1czw2hb-0"
})(["text-decoration:none;color:inherit;"]);

var StyledStatus = _styledComponents["default"].span.withConfig({
  displayName: "StyledStatus",
  componentId: "sc-1czw2hb-1"
})(["color:", ";"], function (_ref) {
  var children = _ref.children;
  return children === 'Pending' ? _styles.colors.silver : children === 'Failed' ? _styles.colors.error : 'inherit';
});

var Invoices = function Invoices(_ref2) {
  var invoices = _ref2.invoices,
      NoInvoicesComponent = _ref2.NoInvoicesComponent;
  return React.createElement(_Section["default"], {
    title: "Billing Statements"
  }, invoices.length > 0 ? React.createElement(React.Fragment, null, React.createElement(_core.Grid, {
    container: true,
    spacing: 40
  }, React.createElement(_core.Grid, {
    item: true,
    xs: 5
  }, React.createElement(_FieldLabel["default"], null, "Period")), React.createElement(_core.Grid, {
    item: true,
    xs: 3
  }, React.createElement(_FieldLabel["default"], null, "Total")), React.createElement(_core.Grid, {
    item: true,
    xs: 3
  }, React.createElement(_FieldLabel["default"], null, "Status")), React.createElement(_core.Grid, {
    item: true,
    xs: 1
  })), invoices.map(function (invoice) {
    return React.createElement(_Typography["default"], {
      variant: "paragraph",
      key: "invoice-".concat(invoice.id)
    }, React.createElement(_core.Grid, {
      container: true,
      spacing: 40
    }, React.createElement(_core.Grid, {
      item: true,
      xs: 5
    }, (0, _formatters.formatDate)((0, _formatters.dateParseISO)(invoice.period_start), 'MM/dd/yyyy'), "\u2013", (0, _formatters.formatDate)((0, _formatters.dateParseISO)(invoice.period_end), 'MM/dd/yyyy')), React.createElement(_core.Grid, {
      item: true,
      xs: 3
    }, (0, _formatters.formatAsDollarAmount)(invoice.amount)), React.createElement(_core.Grid, {
      item: true,
      xs: 3
    }, React.createElement(StyledStatus, null, invoice.status === 'paid' ? 'Paid' : invoice.status === 'unpaid' ? 'In-Progress' : 'Failed')), React.createElement(_core.Grid, {
      item: true,
      xs: 1
    }, React.createElement(Link, {
      href: "/print/invoices/".concat(invoice.id),
      target: "_blank"
    }, React.createElement(_iconDownload["default"], {
      height: 16
    })))));
  })) : NoInvoicesComponent ? React.createElement(NoInvoicesComponent, null) : null);
};

var _default = Invoices;
exports["default"] = _default;