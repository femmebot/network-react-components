import React from 'react'
import styled from 'styled-components'

import BaseFormControl, {FormControlProps} from '@material-ui/core/FormControl'
import FieldError from '~shared/components/atoms/FieldError'
import FieldLabel from '~shared/components/atoms/FieldLabel'
import TextInput from '~shared/components/atoms/TextInput'
import {colors, sizeStyles, spaceStyles, typography} from '~shared/styles/index'
import {SizeProps} from '~shared/styles/props/size'
import {SpaceProps} from '~shared/styles/props/space'
import {pxToRem} from '~shared/styles/utils'

interface StyleProps extends SpaceProps, SizeProps {
  inheritFont?: boolean
}

export interface Props extends StyleProps {
  label?: string
  autocomplete?: string
  className?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  value?: string
  id?: string
  error?: string
  type?: string
  onPaste?: React.ClipboardEventHandler<HTMLInputElement>
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  autoFocus?: boolean
  disabled?: boolean
  multiline?: boolean
  rowsMax?: number
  format?: (value: string) => string
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
  readOnly?: boolean
  required?: boolean
}

const fontStyles = ({inheritFont = false}: StyleProps) => {
  if (inheritFont) {
    return `
      font: inherit;
      color: inherit;
      letter-spacing: inherit;
      line-height: inherit;
    `
  }
  return `
    font-family: ${typography.sans};
    font-size: ${pxToRem(16)};
    line-height: 1.1;
    letter-spacing: ${pxToRem(0.6)};
  `
}

const FormControl = styled(
  ({children, disabled, error, className}: FormControlProps) => (
    <BaseFormControl disabled={disabled} error={error} className={className}>
      {children}
    </BaseFormControl>
  )
)`
  ${sizeStyles};
  ${spaceStyles};
  && input {
    border-bottom: 1px solid ${colors.black};
  }
  && > div,
  && input {
    ${fontStyles};
  }
`

const TextField = ({
  autocomplete,
  label,
  placeholder,
  className,
  onChange,
  autoFocus,
  value,
  id,
  onPaste,
  onKeyPress,
  onBlur,
  onFocus,
  type = 'text',
  disabled,
  error,
  multiline,
  rowsMax,
  format,
  startAdornment,
  endAdornment,
  readOnly,
  required,
  ...styleProps
}: Props) => (
  <FormControl
    {...styleProps}
    disabled={disabled}
    error={!!error}
    className={className}
  >
    {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
    <TextInput
      id={id}
      error={!!error}
      autoFocus={autoFocus}
      disabled={disabled}
      placeholder={placeholder}
      multiline={multiline}
      rowsMax={rowsMax}
      disableUnderline
      inputProps={{
        readOnly,
        onChange,
        onPaste,
        onKeyPress,
        onBlur,
        onFocus,
        required,
        autocomplete,
      }}
      startAdornment={startAdornment}
      endAdornment={endAdornment}
      type={type}
      value={format && value ? format(value) : value}
    />
    {error && <FieldError>{error}</FieldError>}
  </FormControl>
)

export default TextField
