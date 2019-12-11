"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Invoice = void 0;

var _BaseModel2 = _interopRequireDefault(require("./BaseModel"));

var _datx = require("datx");

var _InvoiceItem = require("./InvoiceItem");

var _PaymentMethod = require("./PaymentMethod");

var _util = require("./util");

var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

var Invoice = (_dec = _datx.prop.identifier, _dec2 = _datx.prop.toMany(_InvoiceItem.InvoiceItem), _dec3 = _datx.prop.toMany(_PaymentMethod.PaymentMethod), (_class = (_temp = _class2 =
/*#__PURE__*/
function (_BaseModel) {
  _inherits(Invoice, _BaseModel);

  function Invoice() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Invoice);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Invoice)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _initializerDefineProperty(_this, "id", _descriptor, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "period_start", _descriptor2, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "period_end", _descriptor3, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "status", _descriptor4, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "amount", _descriptor5, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "subtotal", _descriptor6, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "invoice_items", _descriptor7, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "payment_methods", _descriptor8, _assertThisInitialized(_this));

    return _this;
  }

  return Invoice;
}(_BaseModel2["default"]), _class2.type = 'invoices', _class2.endpoint = (0, _util.apiUrl)('invoices'), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "id", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "period_start", [_datx.prop], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "period_end", [_datx.prop], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "status", [_datx.prop], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "amount", [_datx.prop], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "subtotal", [_datx.prop], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "invoice_items", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "payment_methods", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));
exports.Invoice = Invoice;