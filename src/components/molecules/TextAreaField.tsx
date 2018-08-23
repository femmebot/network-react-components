import * as React from 'react'
import styled from 'styled-components'
import {withTheme, WithTheme} from '~styles/themes'
import {serif} from '~styles/typography'

import TextField, {
  Props as TextFieldProps,
} from '~components/molecules/TextField'
import {pxToRem} from '~styles/utils'

const StyledTextField = withTheme(styled(TextField)`
  && {
    color: ${({theme}: WithTheme) => theme.palette.grey[600]};
    font-family: ${serif};
    border: ${pxToRem(1)} solid;
    padding: ${pxToRem(16)} ${pxToRem(22)};
  }
`)

const TextAreaField = ({rowsMax = 8, ...props}: TextFieldProps) => (
  <StyledTextField multiline rowsMax={rowsMax} width={1} {...props} />
)

export default TextAreaField
