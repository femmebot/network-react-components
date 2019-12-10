"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spacing_1 = require("~shared/styles/constants/spacing");
const padding = (size) => ({ padding: spacing_1.default(size) });
padding.top = (size) => ({ paddingTop: spacing_1.default(size) });
padding.right = (size) => ({ paddingRight: spacing_1.default(size) });
padding.bottom = (size) => ({ paddingBottom: spacing_1.default(size) });
padding.left = (size) => ({ paddingLeft: spacing_1.default(size) });
padding.x = (size) => ({
    paddingLeft: spacing_1.default(size),
    paddingRight: spacing_1.default(size),
});
padding.y = (size) => ({
    paddingTop: spacing_1.default(size),
    paddingBottom: spacing_1.default(size),
});
exports.default = padding;
//# sourceMappingURL=padding.js.map