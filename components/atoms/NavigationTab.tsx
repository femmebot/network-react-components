import * as React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import styled from 'styled-components'
import Typography from '~shared/components/atoms/Typography'
import { colors } from '~shared/styles/index'
import { pxToRem } from '~shared/styles/utils'

const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin-right: ${pxToRem(40)};
  padding-bottom: ${pxToRem(2)};
  color: ${colors.grayBoulder};
  &.active {
    border-bottom: ${pxToRem(1)} solid;
  }
`
const NavigationTab: React.SFC<NavLinkProps> = ({ children, ...props }) => (
  <StyledLink {...props}>
    <Typography color="inherit" variant="heading-3">
      {children}
    </Typography>
  </StyledLink>
)

export default NavigationTab
