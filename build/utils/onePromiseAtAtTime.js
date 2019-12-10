"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const onePromiseAtATime = (f) => {
    let promise;
    return (...args) => {
        if (promise) {
            return promise;
        }
        return (promise = f(...args)
            .then(r => {
            promise = null;
            return r;
        })
            .catch(e => {
            promise = null;
            return Promise.reject(e);
        }));
    };
};
exports.default = onePromiseAtATime;
//# sourceMappingURL=onePromiseAtAtTime.js.map