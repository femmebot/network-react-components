declare module '~*.svg' {
  const content: any
  export default content
}

declare module '~*.png' {
  const path: string
  export default path
}

declare module '~*.gif' {
  const path: string
  export default path
}

declare module '~*.otf' {
  const path: string
  export default path
}

declare module '*.json' {
  const value: any
  export default value
}
