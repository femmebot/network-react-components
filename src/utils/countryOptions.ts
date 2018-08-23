import countries from 'i18n-iso-countries'
import en from 'i18n-iso-countries/langs/en.json'
import {toPairs} from 'lodash'
import {SupportedCountry} from '~config'

countries.registerLocale(en)

const supportedCountries = toPairs(countries.getNames('en')).map(
  (pair): SupportedCountry => ({code: pair[0], name: pair[1]})
)

// iteration order of toPairs is not guaranteed
supportedCountries.sort((c1, c2) => c1.name.localeCompare(c2.name))
export default supportedCountries.map((c: SupportedCountry) => ({
  value: c.code,
  label: c.name,
}))
