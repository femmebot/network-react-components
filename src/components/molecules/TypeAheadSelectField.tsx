import {
  FormControl as BaseFormControl,
  MenuItem as MuiMenuItem,
  withStyles,
} from '@material-ui/core'
import {MenuItemProps} from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import * as React from 'react'
import Select from 'react-select'
import {ValueContainerProps} from 'react-select/lib/components/containers'
import {ControlProps} from 'react-select/lib/components/Control'
import {MenuProps, NoticeProps} from 'react-select/lib/components/Menu'
import {OptionProps} from 'react-select/lib/components/Option'
import {PlaceholderProps} from 'react-select/lib/components/Placeholder'
import {SingleValueProps} from 'react-select/lib/components/SingleValue'
import styled from 'styled-components'
import Box from '~shared/atoms/Box'
import FieldLabel from '~shared/atoms/FieldLabel'
import {FormOption, ObjectifiableFormOption} from '~data'
import {colors, sizeStyles, spaceStyles, typography} from '~styles'
import {SizeProps} from '~styles/props/size'
import {SpaceProps} from '~styles/props/space'
import {pxToRem, styleObjectToTemplate} from '~styles/utils'
import objectifyOptions from '~utils/objectifyOptions'

function NoOptionsMessage(props: NoticeProps<any>) {
  return <Box p={10}>{props.children}</Box>
}

const InputComponent = styled.div`
  && {
    > *:last-child {
      position: absolute;
      right: 0;
      top: ${pxToRem(-10)};
    }
    padding: 0;
  }
`

const StyledTextInput = styled(TextField)`
  && {
    border-bottom: 1px solid ${colors.black};
    text-transform: none;
  }
`

function Control(props: ControlProps<any>) {
  return (
    <StyledTextInput
      fullWidth
      InputProps={{
        inputComponent: InputComponent,
        disableUnderline: true,
        inputProps: {
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.textFieldProps}
    />
  )
}

function Option(props: OptionProps<any>) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  )
}

const SingleValue = styled<SingleValueProps<any>, 'div'>('div')`
  position: absolute;
  left: 0;
  top: 0;
  font-family: ${typography.sans};
  font-size: ${pxToRem(16)};
  line-height: 1.1;
  letter-spacing: ${pxToRem(0.6)};
`

const Placeholder = styled<PlaceholderProps<any>, 'div'>('div')`
  color: ${colors.silver};
  position: absolute;
  left: 0;
  top: 0;
  font-family: ${typography.sans};
  font-size: ${pxToRem(16)};
  line-height: 1.1;
  letter-spacing: ${pxToRem(0.6)};
`

const ValueContainer = styled<ValueContainerProps<any>, 'div'>('div')`
  position: relative;
`

const MenuWrapper = styled(Paper)`
  position: absolute;
  z-index: 1;
`

const Menu = (props: MenuProps<any>) => (
  <MenuWrapper square {...props.innerProps}>
    {props.children}
  </MenuWrapper>
)

const selectFontStyle = {
  fontFamily: typography.sans,
  fontSize: pxToRem(16),
  lineHeight: 1.1,
  letterSpacing: pxToRem(0.6),
  textTransform: 'inherit',
  fontWeight: 'normal',
}

const menuItemStyles: any = {
  root: {
    ...selectFontStyle,
    color: colors.grayBoulder,
    textTransform: 'none',
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

const Wrapper = styled.div``

const components = {
  Option,
  Control,
  NoOptionsMessage,
  Placeholder,
  SingleValue,
  ValueContainer,
  Menu,
}

interface Props extends SpaceProps, SizeProps {
  className?: string
  disabled?: boolean
  error?: string
  id: string
  label?: string
  name?: string
  onChange: (value: string | null) => void
  options: ObjectifiableFormOption[]
  placeholder?: string
  value?: string
}

interface State {
  value: FormOption | string | null
}

class TypeAheadSelectField extends React.Component<Props, State> {
  state = {
    value: null,
  }

  componentDidMount() {
    const objectOptions = objectifyOptions(this.props.options)
    const value = objectOptions.find(
      x =>
        typeof this.props.value === 'string'
          ? x.value === this.props.value
          : x === this.props.value
    )
    if (value) {
      this.setState({value})
    }
  }

  handleChange = (selected: FormOption) => {
    this.setState({
      value: selected,
    })
    this.props.onChange(selected ? selected.value : null)
  }

  render() {
    const objectOptions = objectifyOptions(this.props.options)
    const {
      id,
      disabled,
      error,
      name,
      className,
      label,
      placeholder,
      onChange,
      ...styleProps
    } = this.props
    return (
      <FormControl
        id={`form-control-${id}`}
        {...styleProps}
        disabled={disabled}
        error={!!error}
        className={className}
        fullWidth
      >
        {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
        <Wrapper>
          <Select
            name={name}
            options={objectOptions}
            components={components}
            value={this.state.value}
            onChange={this.handleChange}
            onFocus={() => this.setState({value: null})}
            placeholder={placeholder || ''}
            isClearable
          />
        </Wrapper>
      </FormControl>
    )
  }
}

export default TypeAheadSelectField