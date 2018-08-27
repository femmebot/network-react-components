import { SupportedLanguage } from "~shared/config";

export default window.CONFIG.supportedLanguages.map(
  (language: SupportedLanguage) => ({
    value: language.handle,
    label: language.string
  })
);
