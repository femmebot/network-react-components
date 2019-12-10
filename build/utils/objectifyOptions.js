"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objectifyOptions = (options) => options.map(option => {
    if (typeof option !== 'string') {
        return option;
    }
    return {
        label: option,
        value: option,
    };
});
exports.default = objectifyOptions;
//# sourceMappingURL=objectifyOptions.js.map