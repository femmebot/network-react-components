"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@material-ui/core");

var _formik = require("formik");

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../atoms/Button"));

var _CardNameField = _interopRequireDefault(require("../molecules/CardNameField"));

var _FormikFields = require("../molecules/FormikFields");

var _Modal = _interopRequireDefault(require("../molecules/Modal"));

var _countryOptions = _interopRequireDefault(require("../../utils/countryOptions"));

var _formatters = require("../../utils/formatters");

var _handleError = _interopRequireDefault(require("../../utils/handleError"));

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

var UpdateCardInfoModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UpdateCardInfoModal, _React$Component);

  function UpdateCardInfoModal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, UpdateCardInfoModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UpdateCardInfoModal)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      open: false
    };

    _this.update = function _callee(values, closeModal) {
      var expirationDate;
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              expirationDate = _this.getExpirationDate(values.expiration);
              _this.props.paymentMethod.address_country = values.country;
              _this.props.paymentMethod.address_zip = values.zipCode;
              _this.props.paymentMethod.exp_year = expirationDate.year;
              _this.props.paymentMethod.exp_month = expirationDate.month;
              _context.next = 8;
              return regeneratorRuntime.awrap(_this.props.updatePaymentMethod(_this.props.paymentMethod));

            case 8:
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              (0, _handleError["default"])(_context.t0);

            case 13:
              closeModal();

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 10]]);
    };

    _this.getExpirationDate = function (expiration) {
      if (!_this.isValidExpirationFormat(expiration)) {
        throw new Error('Expiration date is invalid');
      }

      var parts = expiration.split('/');
      var month = parts[0].trim();
      var year = String(new Date().getFullYear()).substr(0, 2) + parts[1].trim();
      return {
        year: Number(year),
        month: Number(month)
      };
    };

    _this.isValidExpirationFormat = function (expiration) {
      return expiration.match('^(0[1-9]|1[0-2]) / ([0-9]{2})$');
    };

    _this.isValidExpirationDate = function (expiration) {
      try {
        var expirationDate = _this.getExpirationDate(expiration); // The argument monthIndex is 0-based.


        var expDate = new Date(expirationDate.year, expirationDate.month - 1);
        return expDate.getTime() > new Date().getTime();
      } catch (e) {
        return false;
      }
    };

    _this.validate = function (values) {
      var initialValues = {}; // this method run earlier than the format method of expiration

      var expiration = values.expiration.substr(0, 7);

      if (!_this.isValidExpirationFormat(expiration)) {
        initialValues.expiration = 'Expiration date is not valid';
      } else if (!_this.isValidExpirationDate(expiration)) {
        initialValues.expiration = 'Expiration date is in the past';
      }

      return initialValues;
    };

    return _this;
  }

  _createClass(UpdateCardInfoModal, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.open !== this.state.open) {
        this.setState({
          open: !!this.props.open
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var paymentMethod = this.props.paymentMethod;
      var expYear = String(paymentMethod.exp_year).substr(2, 4);
      var expMonth = paymentMethod.exp_month;
      var expiration = (expMonth <= 9 ? '0' : '') + "".concat(expMonth, " / ").concat(expYear);
      var initialValues = {
        expiration: expiration,
        country: this.props.paymentMethod.address_country,
        zipCode: this.props.paymentMethod.address_zip
      };
      return React.createElement(_Modal["default"], {
        title: "Update card info",
        open: this.state.open,
        onClose: this.props.onClose
      }, function (closeModal) {
        return React.createElement(_formik.Formik, {
          initialValues: initialValues,
          onSubmit: function onSubmit(values) {
            return _this2.update(values, closeModal);
          },
          validate: _this2.validate,
          render: function render(props) {
            return React.createElement(_formik.Form, null, React.createElement(_core.Grid, {
              container: true,
              direction: "column",
              spacing: 40
            }, React.createElement(_core.Grid, {
              item: true
            }, React.createElement(_CardNameField["default"], {
              paymentMethod: _this2.props.paymentMethod
            })), React.createElement(_core.Grid, {
              item: true
            }, React.createElement(_core.Grid, {
              container: true,
              justify: "space-between",
              spacing: 32
            }, React.createElement(_core.Grid, {
              item: true,
              xs: 4
            }, React.createElement(_formik.Field, {
              component: _FormikFields.MaterialTextField,
              format: _formatters.formatAsExpirationDate,
              maxLength: 7,
              name: "expiration",
              label: "Expire",
              placeholder: "MM / YY",
              width: 1
            })), React.createElement(_core.Grid, {
              item: true,
              xs: 4
            }, React.createElement(_formik.Field, {
              component: _FormikFields.MaterialSelectField,
              width: 1,
              label: "Country",
              name: "country",
              options: _countryOptions["default"]
            })), React.createElement(_core.Grid, {
              item: true,
              xs: 4
            }, React.createElement(_formik.Field, {
              component: _FormikFields.MaterialTextField,
              name: "zipCode",
              label: "Zip code",
              width: 1
            })))), React.createElement(_core.Grid, {
              item: true
            }, React.createElement(_core.Grid, {
              container: true,
              justify: "center",
              spacing: 8
            }, React.createElement(_core.Grid, {
              item: true
            }, React.createElement(_Button["default"], {
              wide: true,
              disabled: props.isSubmitting,
              onClick: closeModal
            }, "Cancel")), React.createElement(_core.Grid, {
              item: true
            }, React.createElement(_Button["default"], {
              type: "submit",
              wide: true,
              disabled: props.isSubmitting || !props.isValid || !props.values.country || !props.values.expiration || !props.values.zipCode,
              variant: "commit"
            }, "Update"))))));
          }
        });
      });
    }
  }]);

  return UpdateCardInfoModal;
}(React.Component);

var _default = UpdateCardInfoModal;
exports["default"] = _default;