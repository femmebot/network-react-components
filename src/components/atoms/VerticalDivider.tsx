import * as React from 'react'
import styled from 'styled-components'
import {withTheme, WithTheme} from '~styles/themes'

interface Props {
  height?: string
  width?: string
  color?: string
}

const StyledVerticalDivider = withTheme(styled.div`
  height: ${({height = '100%'}: Props) => height};
  width: ${({width, theme}: Props & WithTheme) =>
    width ? width : theme.typography.pxToRem(1)};
  background: ${({theme, color}: Props & WithTheme) =>
    color ? color : theme.palette.divider};
`)

const VerticalDivider: React.SFC<Props> = props => (
  <StyledVerticalDivider {...props} />
)

VerticalDivider.defaultProps = {
  height: '100%',
}

export default VerticalDivider
