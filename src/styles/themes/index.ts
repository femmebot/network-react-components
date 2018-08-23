import {ConsistentWith} from '@material-ui/core'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import muiWithTheme, {WithTheme} from '@material-ui/core/styles/withTheme'

import {colors, legacyColors, typography} from '~styles'
import {pxToRem} from '~styles/utils'

export const withTheme = <P extends ConsistentWith<WithTheme, P>>(
  Component: React.ComponentType<P & WithTheme>
): React.ComponentClass<P> => muiWithTheme()(Component)

// export const withTheme = <P extends ConsistentWith<P, WithTheme>>(
//   Component: AnyComponent<P & WithTheme>
// ): React.ComponentType<Overwrite<P, Partial<WithTheme>>> =>
//   muiWithTheme()(Component)

const defaultTheme = createMuiTheme({
  typography: {
    fontFamily: typography.sans,
    // default / no variant
    body1: {
      fontSize: '1rem',
    },
    // heading-1
    headline: {
      textTransform: 'uppercase',
      fontWeight: 500,
      fontSize: pxToRem(32),
      letterSpacing: pxToRem(1.2),
      color: legacyColors.shark,
    },
    // heading-2
    subheading: {
      textTransform: 'uppercase',
      fontWeight: 500,
      fontSize: pxToRem(20),
      letterSpacing: pxToRem(0.5),
      color: colors.black,
    },
    // heading-3
    title: {
      display: 'inline',
      fontSize: pxToRem(14),
      fontWeight: 500,
      textTransform: 'uppercase',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 1.5,
      letterSpacing: pxToRem(0.5),
    },
    // heading-4
    display1: {
      fontSize: pxToRem(16),
      letterSpacing: pxToRem(0.6),
      color: colors.black,
      textTransform: 'none',
    },
    // instructional
    display2: {
      fontSize: pxToRem(14),
      letterSpacing: 'normal',
      lineHeight: pxToRem(18),
      color: colors.grayBoulder,
    },
    // label
    display3: {
      fontSize: pxToRem(12),
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: pxToRem(0.5),
      color: colors.grayBoulder,
    },
    // emphasis
    display4: {
      fontSize: pxToRem(40),
      fontWeight: 300,
      color: colors.black,
      fontFamily: typography.serif,
      fontStyle: 'italic',
    },
    // paragraph
    body2: {
      fontFamily: typography.serif,
      fontSize: pxToRem(16),
      color: colors.black,
    },
  },
  palette: {
    type: 'light',
    common: {
      black: colors.black,
      white: colors.white,
    },
    primary: {
      main: colors.grayBoulder,
      dark: colors.black,
      light: colors.white,
    },
    secondary: {
      main: colors.ctaSecondary,
    },
    error: {
      main: colors.error,
    },
    background: {
      default: colors.white,
    },
  },
})

export default defaultTheme

export {WithTheme}
