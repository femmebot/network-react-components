"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@material-ui/core");

var React = _interopRequireWildcard(require("react"));

var _reactStripeElements = require("react-stripe-elements");

var _apiNetwork = require("../../api.network.v1");

var _Box = _interopRequireDefault(require("../atoms/Box"));

var _CardBrandIcon = _interopRequireDefault(require("../atoms/CardBrandIcon"));

var _CardFormField = _interopRequireDefault(require("../atoms/CardFormField"));

var _Flex = _interopRequireDefault(require("../atoms/Flex"));

var _Typography = _interopRequireDefault(require("../atoms/Typography"));

var _TextField = _interopRequireDefault(require("../molecules/TextField"));

var _TypeAheadSelectField = _interopRequireDefault(require("../molecules/TypeAheadSelectField"));

var _countryOptions = _interopRequireDefault(require("../../utils/countryOptions"));

var _handleError = _interopRequireDefault(require("../../utils/handleError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var brandMap = new Map([['amex', _apiNetwork.Brand.Amex], ['discover', _apiNetwork.Brand.Discover], ['mastercard', _apiNetwork.Brand.MasterCard], ['visa', _apiNetwork.Brand.Visa], ['paypal', _apiNetwork.Brand.Paypal]]);
var stripeFonts = [{
  family: '"Gotham-Book"',
  weight: 'normal',
  style: 'normal',
  src: "url(https://s3.amazonaws.com/assets.creativedifference/Gotham-Book.otf) format('opentype')"
}];

var createOptions = function createOptions() {
  return {
    style: {
      base: {
        fontFamily: '"Gotham-Book", sans',
        fontWeight: 'normal',
        fontStyle: 'normal'
      }
    }
  };
};

var CardForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CardForm, _React$Component);

  function CardForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CardForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CardForm)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      brand: _apiNetwork.Brand.Placeholder,
      name: '',
      country: '',
      processing: false,
      errors: {
        card: undefined,
        cvv: undefined,
        zip: undefined,
        expiry: undefined
      }
    };

    _this.handleChangeOfCountry = function (value) {
      _this.setState({
        country: value || ''
      });
    };

    _this.handleChangeOfCardName = function (value) {
      _this.setState({
        name: value
      });
    };

    _this.processing = function () {
      _this.setState({
        processing: true
      });
    };

    _this.processed = function () {
      _this.setState({
        processing: false
      });
    };

    _this.resolveBrand = function (value) {
      var brand = brandMap.get(value);

      if (!brand) {
        return _apiNetwork.Brand.Placeholder;
      }

      return brand;
    };

    _this.handleChangeOfCardNumber = function (value) {
      _this.setState({
        brand: _this.resolveBrand(value.brand)
      });
    };

    _this.handleApiError = function (error) {
      (0, _handleError["default"])(error);
      _this.props.onError && _this.props.onError();
    };

    _this.createStripeToken = function _callee(name) {
      var payload;
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_this.props.stripe) {
                _context.next = 2;
                break;
              }

              throw Error("Stripe.js hasn't loaded yet.");

            case 2:
              _context.next = 4;
              return regeneratorRuntime.awrap(_this.props.stripe.createToken({
                name: name
              }));

            case 4:
              payload = _context.sent;

              if (!payload.token) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", payload.token);

            case 7:
              if (!payload.error) {
                _context.next = 9;
                break;
              }

              throw Error(payload.error.message);

            case 9:
              throw Error('Something went wrong, no token reveived');

            case 10:
            case "end":
              return _context.stop();
          }
        }
      });
    };

    _this.handleSubmit = function _callee2(ev) {
      var stripeToken;
      return regeneratorRuntime.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              ev.preventDefault();

              if (_this.props.stripe) {
                _context2.next = 4;
                break;
              }

              (0, _handleError["default"])("Stripe.js hasn't loaded yet.");
              return _context2.abrupt("return");

            case 4:
              _context2.prev = 4;

              _this.processing();

              _context2.next = 8;
              return regeneratorRuntime.awrap(_this.createStripeToken(_this.state.name));

            case 8:
              stripeToken = _context2.sent;
              _context2.next = 11;
              return regeneratorRuntime.awrap(_this.props.onTokenCreated(stripeToken));

            case 11:
              _this.processed();

              _context2.next = 18;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](4);

              _this.processed();

              _this.handleApiError(_context2.t0);

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[4, 14]]);
    };

    _this.onChange = function (key, event) {
      _this.setState({
        errors: _objectSpread({}, _this.state.errors, _defineProperty({}, key, event.error && event.error.message || undefined))
      });
    };

    return _this;
  }

  _createClass(CardForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var errors = this.state.errors;
      return React.createElement(_Box["default"], {
        pt: 40
      }, React.createElement("form", {
        onSubmit: this.handleSubmit
      }, React.createElement(_core.Grid, {
        container: true,
        spacing: 32
      }, React.createElement(_core.Grid, {
        item: true,
        xs: 12
      }, React.createElement(_CardFormField["default"], {
        label: "Card number",
        error: errors.card,
        hr: true
      }, React.createElement(_Flex["default"], {
        alignItems: "center"
      }, React.createElement(_CardBrandIcon["default"], {
        brand: this.state.brand
      }), React.createElement(_Box["default"], {
        width: "100%"
      }, React.createElement(_reactStripeElements.CardNumberElement, _extends({
        placeholder: "",
        onChange: function onChange(event) {
          _this2.onChange('card', event);

          _this2.handleChangeOfCardNumber(event);
        }
      }, createOptions())))))), React.createElement(_core.Grid, {
        item: true,
        xs: 12
      }, React.createElement(_CardFormField["default"], {
        label: "Name on card"
      }, React.createElement(_Typography["default"], null, React.createElement(_TextField["default"], {
        required: true,
        inheritFont: true,
        width: 1,
        id: "name",
        value: this.state.name,
        onChange: function onChange(event) {
          _this2.handleChangeOfCardName(event.target.value);
        }
      })))), React.createElement(_core.Grid, {
        item: true,
        sm: 6,
        xs: 12
      }, React.createElement(_CardFormField["default"], {
        label: "Expiry",
        hr: true,
        error: errors.expiry
      }, React.createElement(_reactStripeElements.CardExpiryElement, _extends({
        onChange: function onChange(event) {
          return _this2.onChange('expiry', event);
        }
      }, createOptions())))), React.createElement(_core.Grid, {
        item: true,
        sm: 6,
        xs: 12
      }, React.createElement(_CardFormField["default"], {
        label: "CVV",
        tooltip: "The CVV Number on you credit card or debit card is a 3 digit number located on the back of the card",
        error: errors.cvv,
        hr: true
      }, React.createElement(_reactStripeElements.CardCVCElement, _extends({
        placeholder: "",
        onChange: function onChange(event) {
          return _this2.onChange('cvv', event);
        }
      }, createOptions())))), React.createElement(_core.Grid, {
        item: true,
        sm: 6,
        xs: 12
      }, React.createElement(_CardFormField["default"], {
        label: "Country"
      }, React.createElement(_Typography["default"], null, React.createElement(_TypeAheadSelectField["default"], {
        id: "country",
        value: this.state.country,
        onChange: this.handleChangeOfCountry,
        options: _countryOptions["default"]
      })))), React.createElement(_core.Grid, {
        item: true,
        sm: 6,
        xs: 12
      }, React.createElement(_CardFormField["default"], {
        label: "Zip code",
        error: errors.zip,
        hr: true
      }, React.createElement(_reactStripeElements.PostalCodeElement, _extends({
        placeholder: "",
        onChange: function onChange(event) {
          return _this2.onChange('zip', event);
        }
      }, createOptions()))))), this.props.children(this.state.processing)));
    }
  }]);

  return CardForm;
}(React.Component);

var PreparedCardForm = (0, _reactStripeElements.injectStripe)(CardForm);

var StripeForm =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(StripeForm, _React$Component2);

  function StripeForm() {
    _classCallCheck(this, StripeForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(StripeForm).apply(this, arguments));
  }

  _createClass(StripeForm, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(_reactStripeElements.StripeProvider, {
        apiKey: window.CONFIG.stripeApiKey
      }, React.createElement(_reactStripeElements.Elements, {
        fonts: stripeFonts
      }, React.createElement(PreparedCardForm, {
        onTokenCreated: this.props.onTokenCreated,
        onError: this.props.onError
      }, function (processing) {
        return _this3.props.children(processing);
      })));
    }
  }]);

  return StripeForm;
}(React.Component);

var _default = StripeForm;
exports["default"] = _default;