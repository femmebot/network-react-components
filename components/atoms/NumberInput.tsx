import * as React from 'react'
import styled from 'styled-components'
import {colors, typography} from '~shared/styles/index'
import {pxToRem} from '~shared/styles/utils'

const StyledNumberInput = styled.input`
  width: ${pxToRem(88)};
  padding: ${pxToRem(10)};
  border: 1px solid ${colors.silver};
  border-radius: ${pxToRem(8)};
  text-align: center;
  font-family: ${typography.serif};
  font-size: ${pxToRem(16)};
  line-height: 1.1;
  letter-spacing: ${pxToRem(0.6)};
`

const NumberInput: React.SFC<
  React.AllHTMLAttributes<HTMLInputElement>
> = props => <StyledNumberInput type="number" {...props} />

export default NumberInput
