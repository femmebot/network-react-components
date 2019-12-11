"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentMethod = void 0;

var _BaseModel2 = _interopRequireDefault(require("./BaseModel"));

var _datx = require("datx");

var _util = require("./util");

var _dec, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _class2, _temp;

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

var PaymentMethod = (_dec = _datx.prop.identifier, (_class = (_temp = _class2 =
/*#__PURE__*/
function (_BaseModel) {
  _inherits(PaymentMethod, _BaseModel);

  function PaymentMethod() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PaymentMethod);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PaymentMethod)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _initializerDefineProperty(_this, "id", _descriptor, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "brand", _descriptor2, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "created_at", _descriptor3, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "exp_month", _descriptor4, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "exp_year", _descriptor5, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "last4", _descriptor6, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "default", _descriptor7, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "expired", _descriptor8, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "address_city", _descriptor9, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "address_country", _descriptor10, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "address_line1", _descriptor11, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "address_line2", _descriptor12, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "address_state", _descriptor13, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "address_zip", _descriptor14, _assertThisInitialized(_this));

    _initializerDefineProperty(_this, "payment_type", _descriptor15, _assertThisInitialized(_this));

    return _this;
  }

  return PaymentMethod;
}(_BaseModel2["default"]), _class2.type = 'payment_methods', _class2.endpoint = (0, _util.apiUrl)('payment_methods'), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "id", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "brand", [_datx.prop], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "created_at", [_datx.prop], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "exp_month", [_datx.prop], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "exp_year", [_datx.prop], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "last4", [_datx.prop], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "default", [_datx.prop], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "expired", [_datx.prop], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "address_city", [_datx.prop], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "address_country", [_datx.prop], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "address_line1", [_datx.prop], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "address_line2", [_datx.prop], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "address_state", [_datx.prop], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "address_zip", [_datx.prop], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "payment_type", [_datx.prop], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));
exports.PaymentMethod = PaymentMethod;