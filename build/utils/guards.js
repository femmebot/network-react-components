"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPromise = (value) => {
    if (value !== null && typeof value === 'object') {
        return value && typeof value.then === 'function';
    }
    return false;
};
//# sourceMappingURL=guards.js.map