import { map } from 'lodash';

export const BASE_FONT_SIZE = 16;

export const toFixed = (value: number, precision: number): number => {
  const multiplier = 10 ** (precision + 1);
  const wholeNumber = Math.floor(value * multiplier);
  return (Math.round(wholeNumber / 10) * 10) / multiplier;
};

export const pxToRem = (px: number): string =>
  `${toFixed(px / BASE_FONT_SIZE, 5)}rem`;

export const styleObjectToTemplate = (styleObject: {}) =>
  map(styleObject, (v, k) => `${camelToKebab(k)}: ${v};`).join('\n');

export const camelToKebab = (v: any) => {
  if (typeof v === 'string') {
    return v.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }
  return v;
};

export const getContrastRatio = (foreground: string, background: string) => {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  const contrastRatio =
    (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);

  return Number(contrastRatio.toFixed(2)); // Truncate at two digits
};

export const convertHexToRGB = (color: string) => {
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

export const decomposeColor = (
  color: string
): { type: string; values: number[] } => {
  if (color.charAt(0) === '#') {
    return decomposeColor(convertHexToRGB(color));
  }

  const marker = color.indexOf('(');
  const type = color.substring(0, marker);
  const values = color
    .substring(marker + 1, color.length - 1)
    .split(',')
    .map(parseFloat);

  return { type, values };
};

export const getLuminance = (color: string) => {
  const decomposedColor = decomposeColor(color);

  if (decomposedColor.type.indexOf('rgb') > -1) {
    const rgb = decomposedColor.values.map(val => {
      const normalizedVal = val / 255; // normalized
      return normalizedVal <= 0.03928
        ? normalizedVal / 12.92
        : (normalizedVal + 0.055) / 1.055 ** 2.4;
    });
    // Truncate at 3 digits
    return Number(
      (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3)
    );
  } else if (decomposedColor.type.indexOf('hsl') > -1) {
    return decomposedColor.values[2] / 100;
  }

  return 0;
};
