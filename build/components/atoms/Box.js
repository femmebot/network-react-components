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
const React = require("react");
const styled_components_1 = require("styled-components");
const index_1 = require("~shared/styles/index");
const StyledBox = styled_components_1.default.div `
  ${index_1.sizeStyles};
  ${index_1.spaceStyles};
  ${index_1.flexboxStyles};
  flex: ${(props) => (props.auto ? '1 1 auto' : undefined)};
  display: ${(props) => (props.inline ? 'inline' : undefined)};
`;
const Box = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (React.createElement(StyledBox, Object.assign({}, props), children));
};
exports.default = Box;
//# sourceMappingURL=Box.js.map