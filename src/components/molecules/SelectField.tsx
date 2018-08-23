import React from 'react'
import styled from 'styled-components'

import {
  FormControl as BaseFormControl,
  MenuItem as MuiMenuItem,
  Select,
  withStyles,
} from '@material-ui/core'
import {MenuItemProps} from '@material-ui/core/MenuItem'
import {SelectProps} from '@material-ui/core/Select/Select'
import {find, isArray} from 'lodash'
import FieldError from '~shared-components/atoms/FieldError'
import FieldLabel from '~shared-components/atoms/FieldLabel'
import {FormOption, ObjectifiableFormOption} from '~data'
import {colors, sizeStyles, spaceStyles, typography} from '~shared-styles/index'
import {SizeProps} from '~shared-styles/props/size'
import {SpaceProps} from '~shared-styles/props/space'
import {pxToRem, styleObjectToTemplate} from '~shared-styles/utils'
import objectifyOptions from '~shared-utils/objectifyOptions'

interface BaseProps extends SpaceProps, SizeProps {
  label?: string
  className?: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  id: string
  error?: string
  disabled?: boolean
  options: ObjectifiableFormOption[]
  name?: string
  placeholder?: string
  tallLabel?: boolean
  fullWidth?: boolean
}

interface MultipleSelectProps {
  value: string[]
  multiple: true
}

interface SingleSelectProps {
  multiple?: false
  value: string
  placeholder?: string
}

export type Props = BaseProps & (MultipleSelectProps | SingleSelectProps)

const selectFontStyle = {
  fontFamily: typography.serif,
  fontSize: pxToRem(16),
  lineHeight: 1.1,
  letterSpacing: pxToRem(0.6),
  textTransform: 'inherit',
  fontWeight: 'normal',
}

/* need to type as any because textTransform and fontWeight arent typed
 * correctly on material-ui */
const menuItemStyles: any = {
  root: {
    ...selectFontStyle,
    color: colors.grayBoulder,
    '&:hover': {
      color: colors.black,
      background: 'none',
    },
  },
  selected: {
    background: `${colors.white} !important`,
    color: colors.black,
  },
}

const BaseMenuItem = (props: MenuItemProps) => <MuiMenuItem {...props} />
const MenuItem = withStyles(menuItemStyles)(BaseMenuItem)

const FormControl = styled(BaseFormControl)`
  ${sizeStyles};
  ${spaceStyles};
  && > div,
  && input {
    ${styleObjectToTemplate(selectFontStyle)};
  }
`

const PlaceholderValue = styled.div`
  color: ${colors.silver};
  text-overflow: ellipsis;
  overflow: hidden;
`

const Checkbox = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid currentColor;
  border-style: solid;
  border-width: 1px;
  border-radius: 2px;
  margin-right: ${pxToRem(8)};
  ${(props: {checked: boolean}) =>
    props.checked ? 'background: currentColor' : `background: ${colors.white}`};
`

const PLACEHOLDER_VALUE = 'PLACEHOLDER'

const selectValue = (options: FormOption[]) => (
  v: string | number | boolean
) => {
  const option = options.find(({value}) => value === v)
  if (option) {
    return option.label
  }
  return undefined
}

const renderSelectedValue = (
  options: FormOption[],
  placeholder?: string
): SelectProps['renderValue'] => selected => {
  if (!selected) {
    return undefined
  }

  if (typeof selected === 'string' || typeof selected === 'number') {
    if (selected === PLACEHOLDER_VALUE && placeholder) {
      return <PlaceholderValue>{placeholder}</PlaceholderValue>
    }
    return selectValue(options)(selected)
  }

  if (!isArray(selected)) {
    return ''
  }

  // selected values that are not options get thrown out
  selected = selected.filter(i =>
    find(options, o => (typeof o === 'string' ? o === i : o.value === i))
  )

  if (selected.length === 0 && placeholder) {
    return <PlaceholderValue>{placeholder}</PlaceholderValue>
  }

  return selected
    .map(selectValue(options))
    .filter(v => v)
    .join(', ')
}

const setInitialValue = (value: string | string[]) => {
  if (typeof value === 'string') {
    return value === '' ? PLACEHOLDER_VALUE : value
  }

  return value.length === 0 ? [PLACEHOLDER_VALUE] : value
}

const filterSinglePlaceholderOnChange = (onChange: Props['onChange']) => (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  if (event.target.value === PLACEHOLDER_VALUE) {
    event.target.value = ''
  }

  onChange(event)
}

const filterMultiPlaceholderOnChange = (onChange: Props['onChange']) => (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  if (isArray(event.target.value)) {
    event.target.value = event.target.value.filter(
      v => v !== PLACEHOLDER_VALUE
    ) as any
  }

  onChange(event)
}

const StyledSelect = styled(
  ({
    tallLabel: _tallLabel,
    ...props
  }: SelectProps & Pick<Props, 'tallLabel'>) => <Select {...props} />
)`
  && {
    > div > div {
      border-bottom: 1px solid ${colors.black};
    }
    [role='button'] {
      text-transform: none;
    }
    label + & {
      margin-top: ${({tallLabel}: Pick<Props, 'tallLabel'>) =>
        tallLabel ? pxToRem(36) : ''};
    }
  }
`

const SelectField = ({
  label,
  className,
  onChange,
  value,
  id,
  disabled,
  error,
  multiple,
  options,
  name,
  placeholder,
  tallLabel,
  fullWidth,
  onBlur: _onBlur,
  ...styleProps
}: Props) => {
  const objectOptions = objectifyOptions(options)

  const filterPlaceholder = multiple
    ? filterMultiPlaceholderOnChange
    : filterSinglePlaceholderOnChange

  return (
    <FormControl
      id={`form-control-${id}`}
      {...styleProps}
      disabled={disabled}
      fullWidth={fullWidth}
      error={!!error}
      className={className}
    >
      {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
      <StyledSelect
        id={id}
        error={!!error}
        disabled={disabled}
        disableUnderline
        multiple={multiple}
        renderValue={renderSelectedValue(objectOptions, placeholder)}
        name={name}
        inputProps={{
          onChange: filterPlaceholder(onChange),
        }}
        value={setInitialValue(value)}
        tallLabel={tallLabel}
      >
        {objectOptions.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {multiple && <Checkbox checked={value.includes(option.value)} />}
            {option.label}
          </MenuItem>
        ))}
      </StyledSelect>
      {error && <FieldError>{error}</FieldError>}
    </FormControl>
  )
}

export default SelectField
