"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
exports.BASE_FONT_SIZE = 16;
exports.toFixed = (value, precision) => {
    const multiplier = Math.pow(10, (precision + 1));
    const wholeNumber = Math.floor(value * multiplier);
    return (Math.round(wholeNumber / 10) * 10) / multiplier;
};
exports.pxToRem = (px) => `${exports.toFixed(px / exports.BASE_FONT_SIZE, 5)}rem`;
exports.styleObjectToTemplate = (styleObject) => lodash_1.map(styleObject, (v, k) => `${exports.camelToKebab(k)}: ${v};`).join('\n');
exports.camelToKebab = (v) => {
    if (typeof v === 'string') {
        return v.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }
    return v;
};
exports.getContrastRatio = (foreground, background) => {
    const lumA = exports.getLuminance(foreground);
    const lumB = exports.getLuminance(background);
    const contrastRatio = (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
    return Number(contrastRatio.toFixed(2)); // Truncate at two digits
};
exports.convertHexToRGB = (color) => {
    let convertedColor = color;
    if (color.length === 4) {
        let extendedColor = '#';
        for (let i = 1; i < color.length; i += 1) {
            extendedColor += color.charAt(i) + color.charAt(i);
        }
        convertedColor = extendedColor;
    }
    const values = {
        r: parseInt(convertedColor.substr(1, 2), 16),
        g: parseInt(convertedColor.substr(3, 2), 16),
        b: parseInt(convertedColor.substr(5, 2), 16),
    };
    return `rgb(${values.r}, ${values.g}, ${values.b})`;
};
exports.decomposeColor = (color) => {
    if (color.charAt(0) === '#') {
        return exports.decomposeColor(exports.convertHexToRGB(color));
    }
    const marker = color.indexOf('(');
    const type = color.substring(0, marker);
    const values = color
        .substring(marker + 1, color.length - 1)
        .split(',')
        .map(parseFloat);
    return { type, values };
};
exports.getLuminance = (color) => {
    const decomposedColor = exports.decomposeColor(color);
    if (decomposedColor.type.indexOf('rgb') > -1) {
        const rgb = decomposedColor.values.map(val => {
            const normalizedVal = val / 255; // normalized
            return normalizedVal <= 0.03928
                ? normalizedVal / 12.92
                : (normalizedVal + 0.055) / Math.pow(1.055, 2.4);
        });
        // Truncate at 3 digits
        return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
    }
    else if (decomposedColor.type.indexOf('hsl') > -1) {
        return decomposedColor.values[2] / 100;
    }
    return 0;
};
//# sourceMappingURL=utils.js.map