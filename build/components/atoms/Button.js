"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Button_1 = require("@material-ui/core/Button/Button");
const React = require("react");
const styled_components_1 = require("styled-components");
const index_1 = require("~shared/styles/index");
const utils_1 = require("~shared/styles/utils");
const outlineOverrides = () => `
  border: solid ${utils_1.pxToRem(2)} currentColor;
  border-radius: ${utils_1.pxToRem(2)};
`;
const commitOverrides = () => `
  background: ${index_1.colors.ctaPrimary};
  &:hover {
    background: ${index_1.colors.ctaSecondary};
  }
}
`;
const variantOverrides = (variant) => {
    if (!variant) {
        return;
    }
    if (variant === 'outline') {
        return outlineOverrides();
    }
    if (variant === 'commit') {
        return commitOverrides();
    }
    return;
};
const StyledButton = styled_components_1.default((_a) => {
    var { variant: _variant, wide: _wide } = _a, props = __rest(_a, ["variant", "wide"]);
    return (React.createElement(Button_1.default, Object.assign({ variant: "flat" }, props)));
}) `
  && {
    display: inline-flex;
    align-items: center;
    color: ${(props) => (props.disabled ? 'gray' : 'black')};
    padding: ${utils_1.pxToRem(8)};
    min-width: ${(props) => (props.wide ? utils_1.pxToRem(220) : undefined)};
    svg {
      margin-right: ${utils_1.pxToRem(8)};
    }
    ${(props) => variantOverrides(props.variant)};
  }
`;
const Button = (_a) => {
    var { children, variant } = _a, props = __rest(_a, ["children", "variant"]);
    return (React.createElement(StyledButton, Object.assign({ variant: variant }, props), children));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map