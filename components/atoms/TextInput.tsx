import Input from '@material-ui/core/Input/Input'
import styled from 'styled-components'

import { sizeStyles, spaceStyles } from '~shared/styles/index'
import { SizeProps } from '~shared/styles/props/size'
import { SpaceProps } from '~shared/styles/props/space'

export interface Props extends SizeProps, SpaceProps {}

const TextInput = styled(Input)`
  font: inherit;
  ${sizeStyles};
  ${spaceStyles};
  /* For Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
  /* Webkit browsers like Safari and Chrome */
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export default TextInput
