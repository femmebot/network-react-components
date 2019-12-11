"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var colors = _interopRequireWildcard(require("../../styles/constants/colors"));

var _iconCardAmex = _interopRequireDefault(require("../../images/icon-card-amex.svg"));

var _iconCardDiscover = _interopRequireDefault(require("../../images/icon-card-discover.svg"));

var _iconCardMastercard = _interopRequireDefault(require("../../images/icon-card-mastercard.svg"));

var _iconCardPaypal = _interopRequireDefault(require("../../images/icon-card-paypal.svg"));

var _iconCardPlaceholder = _interopRequireDefault(require("../../images/icon-card-placeholder.svg"));

var _iconCardVisa = _interopRequireDefault(require("../../images/icon-card-visa.svg"));

var _apiNetwork = require("../../api.network.v1");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var resolveIconForBrand = function resolveIconForBrand(props) {
  var height = props.height || 25;
  var width = props.width || 29;

  switch (props.brand) {
    case _apiNetwork.Brand.Amex:
      return React.createElement(_iconCardAmex["default"], {
        height: height,
        width: width,
        style: {
          fill: colors.black
        }
      });

    case _apiNetwork.Brand.Discover:
      return React.createElement(_iconCardDiscover["default"], {
        height: height,
        width: width,
        style: {
          fill: colors.black
        }
      });

    case _apiNetwork.Brand.MasterCard:
      return React.createElement(_iconCardMastercard["default"], {
        height: height,
        width: width,
        style: {
          fill: colors.black
        }
      });

    case _apiNetwork.Brand.Visa:
      return React.createElement(_iconCardVisa["default"], {
        height: height,
        width: width,
        color: colors.black
      });

    case _apiNetwork.Brand.Paypal:
      return React.createElement(_iconCardPaypal["default"], {
        height: height,
        width: width,
        color: colors.black
      });
  }

  return React.createElement(_iconCardPlaceholder["default"], {
    height: height,
    width: width,
    color: colors.grayBoulder
  });
};

var CardBrandIcon = resolveIconForBrand;
var _default = CardBrandIcon;
exports["default"] = _default;