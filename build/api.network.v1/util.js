"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ensureTrailingSlash_1 = require("~shared/utils/ensureTrailingSlash");
function castToArray(data) {
    if (data == null) {
        const emptyArray = new Array();
        return emptyArray;
    }
    if (data instanceof Array) {
        return data;
    }
    return [data];
}
exports.castToArray = castToArray;
function apiUrl(type) {
    return `${ensureTrailingSlash_1.default(window.IdeoSSO.baseApiUrl)}${type}`;
}
exports.apiUrl = apiUrl;
//# sourceMappingURL=util.js.map