import {config} from 'datx-jsonapi'
import IdeoSSO from 'ideo-sso'
import ensureTrailingSlash from '~utils/ensureTrailingSlash'

config.baseUrl = ensureTrailingSlash(IdeoSSO.baseApiUrl)
config.defaultFetchOptions = {
  credentials: 'include',
}
config.transformRequest = options => {
  options.options = options.options || {}
  options.options.headers = options.options.headers || {}
  options.options.headers['content-type'] = 'application/vnd.api+json'
  options.options.headers['client-id'] = window.CONFIG.clientId
  return options
}
