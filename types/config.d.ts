export interface SupportedLanguage {
  handle: string
  string: string
}

export interface SupportedCountry {
  code: string
  name: string
}

interface Config {
  supportedLanguages: SupportedLanguage[]
  userTypes: string[]
  solutionTypes: string[]
  stripeApiKey: string
  clientId: string
}

declare global {
  interface Window {
    CONFIG: Config
  }
}
