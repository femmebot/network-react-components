"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spacing_1 = require("~shared/styles/constants/spacing");
const margin = (size) => ({ margin: spacing_1.default(size) });
margin.top = (size) => ({ marginTop: spacing_1.default(size) });
margin.right = (size) => ({ marginRight: spacing_1.default(size) });
margin.bottom = (size) => ({ marginBottom: spacing_1.default(size) });
margin.left = (size) => ({ marginLeft: spacing_1.default(size) });
margin.x = (size) => {
    if (size === 'auto') {
        return { marginLeft: size, marginRight: size };
    }
    return { marginLeft: spacing_1.default(size), marginRight: spacing_1.default(size) };
};
margin.y = (size) => ({
    marginTop: spacing_1.default(size),
    marginBottom: spacing_1.default(size),
});
exports.default = margin;
//# sourceMappingURL=margin.js.map