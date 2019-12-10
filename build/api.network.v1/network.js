"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("whatwg-fetch");
const datx_jsonapi_1 = require("datx-jsonapi");
window.IdeoSSO = window.IdeoSSO || { baseApiUrl: '' };
window.CONFIG = window.CONFIG || { clientId: '' };
datx_jsonapi_1.config.baseUrl = '/';
const isNetworkUrl = (url) => url.indexOf(window.IdeoSSO.baseApiUrl) > -1;
datx_jsonapi_1.config.fetchReference = (url, opts) => {
    let requestUrl = url;
    if (isNetworkUrl(requestUrl)) {
        // remove baseUrl / if it is at the start of a network url
        // (happens when using utils saveModel / removeModel)
        requestUrl = url.replace(/^\//, '');
    }
    return fetch(requestUrl, opts);
};
datx_jsonapi_1.config.defaultFetchOptions = {
    credentials: 'include',
};
datx_jsonapi_1.config.transformRequest = options => {
    options.options = options.options || {};
    options.options.headers = options.options.headers || {};
    options.options.headers['content-type'] = 'application/vnd.api+json';
    options.options.headers['client-id'] = window.CONFIG.clientId;
    return options;
};
//# sourceMappingURL=network.js.map