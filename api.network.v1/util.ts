import IdeoSSOInstance from 'ideo-sso-js-sdk';
import ensureTrailingSlash from '~shared/utils/ensureTrailingSlash';

IdeoSSOInstance.initFromEnv({
  IDEO_SSO_HOST: process.env.IDEO_SSO_HOST,
  IDEO_SSO_CLIENT_ID: process.env.IDEO_SSO_CLIENT_ID,
  BASE_HOST: process.env.BASE_HOST,
  IDEO_SSO_REDIRECT_PATH: process.env.IDEO_SSO_REDIRECT_PATH,
})
export const IdeoSSO = IdeoSSOInstance

export function castToArray<T>(data: T | T[] | null): T[] {
  if (data == null) {
    const emptyArray: T[] = new Array();
    return emptyArray;
  }

  if (data instanceof Array) {
    return data;
  }

  return [data];
}

export function apiUrl(type: string) {
  return `${ensureTrailingSlash(IdeoSSO.baseApiUrl)}${type}`;
}
