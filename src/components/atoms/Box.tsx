import * as React from 'react'
import styled from 'styled-components'

import {flexboxStyles, sizeStyles, spaceStyles} from '~shared-styles/index'
import {FlexBoxProps} from '~shared-styles/props/flexbox'
import {SizeProps} from '~shared-styles/props/size'
import {SpaceProps} from '~shared-styles/props/space'

export interface BoxProps extends SizeProps, FlexBoxProps, SpaceProps {
  auto?: boolean
  style?: React.CSSProperties
  inline?: boolean
}

const StyledBox = styled.div`
  ${sizeStyles};
  ${spaceStyles};
  ${flexboxStyles};
  flex: ${(props: BoxProps) => (props.auto ? '1 1 auto' : undefined)};
  display: ${(props: BoxProps) => (props.inline ? 'inline' : undefined)};
`

const Box: React.SFC<BoxProps> = ({children, ...props}) => (
  <StyledBox {...props}>{children}</StyledBox>
)

export default Box
