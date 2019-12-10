"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("~shared/styles/utils");
exports.SPACING_UNIT = 8;
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
exports.default = (size) => {
    if (size === 'auto') {
        return size;
    }
    return utils_1.pxToRem(size);
};
//# sourceMappingURL=spacing.js.map