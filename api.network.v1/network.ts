import 'whatwg-fetch';
import { config } from 'datx-jsonapi';

declare global {
  interface Window {
    IdeoSSO: { baseApiUrl: string },
    CONFIG: { clientId: string }
  }
}

window.IdeoSSO = window.IdeoSSO || { baseApiUrl: '' }
window.CONFIG = window.CONFIG || { clientId: '' }

config.baseUrl = '/';

const isNetworkUrl = (url: string) => url.indexOf(window.IdeoSSO.baseApiUrl!) > -1;

config.fetchReference = (url: string, opts: any) => {
  let requestUrl = url;
  if (isNetworkUrl(requestUrl)) {
    // remove baseUrl / if it is at the start of a network url
    // (happens when using utils saveModel / removeModel)
    requestUrl = url.replace(/^\//, '');
  }
  return fetch(requestUrl, opts);
};

config.defaultFetchOptions = {
  credentials: 'include',
};
config.transformRequest = options => {
  options.options = options.options || {};
  options.options.headers = options.options.headers || {};
  options.options.headers['content-type'] = 'application/vnd.api+json';
  options.options.headers['client-id'] = window.CONFIG.clientId!;
  return options;
};
