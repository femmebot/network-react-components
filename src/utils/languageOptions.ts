import {SupportedLanguage} from '~config'

export default window.CONFIG.supportedLanguages.map(
  (language: SupportedLanguage) => ({
    value: language.handle,
    label: language.string,
  })
)
