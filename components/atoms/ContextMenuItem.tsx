import { MenuItem } from '@material-ui/core'
import { MenuItemProps } from '@material-ui/core/MenuItem'
import * as React from 'react'
import styled from 'styled-components'
import { withTheme, WithTheme } from '~shared/styles/themes'
import { styleObjectToTemplate } from '~shared/styles/utils'

const StyledMenuItem = withTheme(styled(MenuItem)`
  && {
    ${({ theme }: WithTheme & MenuItemProps) =>
      styleObjectToTemplate(theme.typography.display1)};
  }
`)

const ContextMenuItem: React.SFC<MenuItemProps> = ({
  innerRef: ref,
  ...props
}) => <StyledMenuItem ref={ref} {...props} />

export default ContextMenuItem
