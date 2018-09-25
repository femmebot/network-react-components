import MuiButton from '@material-ui/core/Button/Button'
import * as React from 'react'
import styled from 'styled-components'
import {colors} from '~shared/styles/index'
import {pxToRem} from '~shared/styles/utils'

interface BaseProps {
  disabled?: boolean
  variant?: Variant
  wide?: boolean
}
interface LinkButtonProps extends BaseProps {
  href: string
  target?: '_blank'
}

export interface ButtonProps extends BaseProps {
  onClick?: (event: any) => void
  type?: 'button' | 'submit'
  name?: string
}

export type Props = ButtonProps | LinkButtonProps

type Variant = 'outline' | 'commit'

const outlineOverrides = () => `
  border: solid ${pxToRem(2)} currentColor;
  border-radius: ${pxToRem(2)};
`

const commitOverrides = () => `
  background: ${colors.ctaPrimary};
  &:hover {
    background: ${colors.ctaSecondary};
  }
}
`

const variantOverrides = (variant?: Variant) => {
  if (!variant) {
    return
  }

  if (variant === 'outline') {
    return outlineOverrides()
  }

  if (variant === 'commit') {
    return commitOverrides()
  }

  return
}

const StyledButton = styled(
  ({variant: _variant, wide: _wide, ...props}: Props) => (
    <MuiButton variant="flat" {...props} />
  )
)`
  && {
    display: inline-flex;
    align-items: center;
    color: ${(props: Props) => (props.disabled ? 'gray' : 'black')};
    padding: ${pxToRem(8)};
    min-width: ${(props: Props) => (props.wide ? pxToRem(220) : undefined)};
    svg {
      margin-right: ${pxToRem(8)};
    }
    ${(props: Props) => variantOverrides(props.variant)};
  }
`

const Button: React.SFC<Props> = ({children, variant, ...props}) => (
  <StyledButton variant={variant} {...props}>
    {children}
  </StyledButton>
)

export default Button
