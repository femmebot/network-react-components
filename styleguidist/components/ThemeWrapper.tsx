import {MuiThemeProvider} from '@material-ui/core/styles'
import * as React from 'react'

import {typography} from '~styles'
import setBaseStyles from '~styles/base'
import defaultTheme from '~styles/themes'

setBaseStyles(defaultTheme, [
  ...typography.gothamFontFace,
  ...typography.sentinelFontFace,
])

const ThemeWrapper: React.SFC<{}> = props => (
  <MuiThemeProvider theme={defaultTheme}>{props.children}</MuiThemeProvider>
)

export default ThemeWrapper
