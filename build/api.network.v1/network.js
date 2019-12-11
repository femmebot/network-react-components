"use strict";

require("whatwg-fetch");

var _datxJsonapi = require("datx-jsonapi");

window.IdeoSSO = window.IdeoSSO || {
  baseApiUrl: ''
};
window.CONFIG = window.CONFIG || {
  clientId: ''
};
_datxJsonapi.config.baseUrl = '/';

var isNetworkUrl = function isNetworkUrl(url) {
  return url.indexOf(window.IdeoSSO.baseApiUrl) > -1;
};

_datxJsonapi.config.fetchReference = function (url, opts) {
  var requestUrl = url;

  if (isNetworkUrl(requestUrl)) {
    // remove baseUrl / if it is at the start of a network url
    // (happens when using utils saveModel / removeModel)
    requestUrl = url.replace(/^\//, '');
  }

  return fetch(requestUrl, opts);
};

_datxJsonapi.config.defaultFetchOptions = {
  credentials: 'include'
};

_datxJsonapi.config.transformRequest = function (options) {
  options.options = options.options || {};
  options.options.headers = options.options.headers || {};
  options.options.headers['content-type'] = 'application/vnd.api+json';
  options.options.headers['client-id'] = window.CONFIG.clientId;
  return options;
};