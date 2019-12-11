"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "WithTheme", {
  enumerable: true,
  get: function get() {
    return _withTheme.WithTheme;
  }
});
exports["default"] = exports.withTheme = void 0;

var _createMuiTheme = _interopRequireDefault(require("@material-ui/core/styles/createMuiTheme"));

var _withTheme = _interopRequireWildcard(require("@material-ui/core/styles/withTheme"));

var _ = require("./..");

var _utils = require("../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var withTheme = function withTheme(Component) {
  return (0, _withTheme["default"])()(Component);
}; // export const withTheme = <P extends ConsistentWith<P, WithTheme>>(
//   Component: AnyComponent<P & WithTheme>
// ): React.ComponentType<Overwrite<P, Partial<WithTheme>>> =>
//   muiWithTheme()(Component)


exports.withTheme = withTheme;
var defaultTheme = (0, _createMuiTheme["default"])({
  typography: {
    fontFamily: _.typography.sans,
    // default / no variant
    body1: {
      fontSize: '1rem'
    },
    // heading-1
    headline: {
      textTransform: 'uppercase',
      fontWeight: 500,
      fontSize: (0, _utils.pxToRem)(32),
      letterSpacing: (0, _utils.pxToRem)(1.2),
      color: _.legacyColors.shark
    },
    // heading-2
    subheading: {
      textTransform: 'uppercase',
      fontWeight: 500,
      fontSize: (0, _utils.pxToRem)(20),
      letterSpacing: (0, _utils.pxToRem)(0.5),
      color: _.colors.black
    },
    // heading-3
    title: {
      display: 'inline',
      fontSize: (0, _utils.pxToRem)(14),
      fontWeight: 500,
      textTransform: 'uppercase',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 1.5,
      letterSpacing: (0, _utils.pxToRem)(0.5)
    },
    // heading-4
    display1: {
      fontSize: (0, _utils.pxToRem)(16),
      letterSpacing: (0, _utils.pxToRem)(0.6),
      color: _.colors.black,
      textTransform: 'none'
    },
    // instructional
    display2: {
      fontSize: (0, _utils.pxToRem)(14),
      letterSpacing: 'normal',
      lineHeight: (0, _utils.pxToRem)(18),
      color: _.colors.grayBoulder
    },
    // label
    display3: {
      fontSize: (0, _utils.pxToRem)(12),
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: (0, _utils.pxToRem)(0.5),
      color: _.colors.grayBoulder
    },
    // emphasis
    display4: {
      fontSize: (0, _utils.pxToRem)(40),
      fontWeight: 300,
      color: _.colors.black,
      fontFamily: _.typography.serif,
      fontStyle: 'italic'
    },
    // paragraph
    body2: {
      fontFamily: _.typography.serif,
      fontSize: (0, _utils.pxToRem)(16),
      color: _.colors.black
    }
  },
  palette: {
    type: 'light',
    common: {
      black: _.colors.black,
      white: _.colors.white
    },
    primary: {
      main: _.colors.grayBoulder,
      dark: _.colors.black,
      light: _.colors.white
    },
    secondary: {
      main: _.colors.ctaSecondary
    },
    error: {
      main: _.colors.error
    },
    background: {
      "default": _.colors.white
    }
  }
});
var _default = defaultTheme;
exports["default"] = _default;