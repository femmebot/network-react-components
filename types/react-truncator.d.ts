declare module 'react-truncator' {
  import * as React from 'react'
  export interface TruncatorProps {
    text: string
    extraSpacing?: number
    minWidth?: number
  }

  declare class Truncator extends React.Component<TruncatorProps> {}
  export default Truncator
}
