declare module 'ideo-sso' {
  interface InitOptions {
    env: 'staging' | 'production'
    client: string
    redirect: string
  }

  interface IdeoSSO {
    init: (initOptions: InitOptions) => void
    signIn: (email?: string) => void
    signUp: (email?: string) => void
    logout: (redirectUrl?: string) => Promise<void>
    ssoProfileSettingsUrl: string
    profileUrl: string
    baseApiUrl: string
  }

  declare const IdeoSSO: IdeoSSO

  export default IdeoSSO
}
