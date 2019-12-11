"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SPACING_UNIT = void 0;

var _utils = require("../utils");

var SPACING_UNIT = 8;
exports.SPACING_UNIT = SPACING_UNIT;

// export type SpacingSize =
//   | 0
//   | 1
//   | 2
//   | 3
//   | 4
//   | 5
//   | 6
//   | -1
//   | -2
//   | -3
//   | -4
//   | -5
//   | -6
//   | 'auto'
// export const spacingPx = [
//   /* 0:  0px */ 0,
//   /* 1:  4px */ SPACING_UNIT / 2,
//   /* 2:  8px */ SPACING_UNIT,
//   /* 3: 16px */ SPACING_UNIT * 2,
//   /* 4: 24px */ SPACING_UNIT * 3,
//   /* 5: 48px */ SPACING_UNIT * 6,
//   /* 6: 64px */ SPACING_UNIT * 8,
// ]
// export const spacingRem = spacingPx.map(pxToRem)
var _default = function _default(size) {
  if (size === 'auto') {
    return size;
  }

  return (0, _utils.pxToRem)(size);
};

exports["default"] = _default;