"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLuminance = exports.decomposeColor = exports.convertHexToRGB = exports.getContrastRatio = exports.camelToKebab = exports.styleObjectToTemplate = exports.pxToRem = exports.toFixed = exports.BASE_FONT_SIZE = void 0;

var _map2 = _interopRequireDefault(require("lodash/map"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BASE_FONT_SIZE = 16;
exports.BASE_FONT_SIZE = BASE_FONT_SIZE;

var toFixed = function toFixed(value, precision) {
  var multiplier = Math.pow(10, precision + 1);
  var wholeNumber = Math.floor(value * multiplier);
  return Math.round(wholeNumber / 10) * 10 / multiplier;
};

exports.toFixed = toFixed;

var pxToRem = function pxToRem(px) {
  return "".concat(toFixed(px / BASE_FONT_SIZE, 5), "rem");
};

exports.pxToRem = pxToRem;

var styleObjectToTemplate = function styleObjectToTemplate(styleObject) {
  return (0, _map2["default"])(styleObject, function (v, k) {
    return "".concat(camelToKebab(k), ": ").concat(v, ";");
  }).join('\n');
};

exports.styleObjectToTemplate = styleObjectToTemplate;

var camelToKebab = function camelToKebab(v) {
  if (typeof v === 'string') {
    return v.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }

  return v;
};

exports.camelToKebab = camelToKebab;

var getContrastRatio = function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  var contrastRatio = (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
  return Number(contrastRatio.toFixed(2)); // Truncate at two digits
};

exports.getContrastRatio = getContrastRatio;

var convertHexToRGB = function convertHexToRGB(color) {
  var convertedColor = color;

  if (color.length === 4) {
    var extendedColor = '#';

    for (var i = 1; i < color.length; i += 1) {
      extendedColor += color.charAt(i) + color.charAt(i);
    }

    convertedColor = extendedColor;
  }

  var values = {
    r: parseInt(convertedColor.substr(1, 2), 16),
    g: parseInt(convertedColor.substr(3, 2), 16),
    b: parseInt(convertedColor.substr(5, 2), 16)
  };
  return "rgb(".concat(values.r, ", ").concat(values.g, ", ").concat(values.b, ")");
};

exports.convertHexToRGB = convertHexToRGB;

var decomposeColor = function decomposeColor(color) {
  if (color.charAt(0) === '#') {
    return decomposeColor(convertHexToRGB(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);
  var values = color.substring(marker + 1, color.length - 1).split(',').map(parseFloat);
  return {
    type: type,
    values: values
  };
};

exports.decomposeColor = decomposeColor;

var getLuminance = function getLuminance(color) {
  var decomposedColor = decomposeColor(color);

  if (decomposedColor.type.indexOf('rgb') > -1) {
    var rgb = decomposedColor.values.map(function (val) {
      var normalizedVal = val / 255; // normalized

      return normalizedVal <= 0.03928 ? normalizedVal / 12.92 : (normalizedVal + 0.055) / Math.pow(1.055, 2.4);
    }); // Truncate at 3 digits

    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
  } else if (decomposedColor.type.indexOf('hsl') > -1) {
    return decomposedColor.values[2] / 100;
  }

  return 0;
};

exports.getLuminance = getLuminance;