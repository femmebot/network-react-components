import countries from 'i18n-iso-countries';
import en from 'i18n-iso-countries/langs/en.json';
import { findIndex, toPairs } from 'lodash';

countries.registerLocale(en);

interface SupportedCountry {
  code: string;
  name: string;
}

const supportedCountries = toPairs(countries.getNames('en')).map(
  (pair): SupportedCountry => ({ code: pair[0], name: pair[1] })
);

// iteration order of toPairs is not guaranteed
supportedCountries.sort((c1, c2) => c1.name.localeCompare(c2.name));

const usaIndex = findIndex(supportedCountries, ['code', 'US']);
const usa = supportedCountries[usaIndex];

const nonUsCountries = supportedCountries.filter(c => c.code !== 'US');
nonUsCountries.unshift(usa);

export default nonUsCountries.map((c: SupportedCountry) => ({
  value: c.code,
  label: c.name,
}));
