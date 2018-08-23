import {defaultsDeep} from 'lodash'

const defaultOptions = {
  credentials: 'include',
  method: 'GET',
  headers: {
    'content-type': 'application/json',
  },
}

const request = (path: string, options?: RequestInit): Promise<Response> =>
  fetch(path, defaultsDeep({}, options || {}, defaultOptions))

export default request
