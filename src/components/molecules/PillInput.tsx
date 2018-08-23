import {Grid} from '@material-ui/core'
import {uniq} from 'lodash'
import * as React from 'react'
import styled from 'styled-components'

import Flex from '~shared-components/atoms/Flex'
import TextField, {
  Props as TextFieldProps,
} from '~shared-components/molecules/TextField'
import CloseIcon from '~images/icon-close.svg'
import {colors} from '~shared-styles/index'
import {withTheme, WithTheme} from '~shared-styles/themes'
import {serif} from '~shared-styles/typography'

const Pills = styled.div`
  font-family: ${serif};
`

const Pill = withTheme(styled(Flex)`
  background: ${({theme}: WithTheme) => theme.palette.grey[300]};
  position: relative;
  &:hover {
    button {
      display: block;
    }
  }
`)

const PillButton = withTheme(styled.button`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  color: ${colors.silver};
  border: 0;
  background: ${({theme}: WithTheme) => theme.palette.grey[300]};
  display: none;
  cursor: pointer;
  &:hover {
    color: black;
  }
`)

export interface Props {
  emptyPlaceholder: string
  nonEmptyPlaceholder: string
  onChange: (value: string[]) => void
  separator?: string | RegExp
  validator: (input: string) => boolean
  value: string[]
  textFieldProps?: Partial<TextFieldProps>
}

interface State {
  input: string
}

class PillInput extends React.Component<Props, State> {
  state = {
    input: '',
  }

  addPills = (value: string[]) => {
    const validValue = value.filter(item => this.validateInput(item))
    if (validValue.length < 1) {
      return
    }
    const newValue = uniq([...this.props.value, ...validValue])
    this.setState({input: ''})
    this.props.onChange(newValue)
  }

  commit: React.ChangeEventHandler<HTMLInputElement> = e => {
    const item = e.target.value
    this.addPills([item])
  }

  handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    this.handleInput(e.target.value)
  }

  handlePaste: React.ClipboardEventHandler<HTMLInputElement> = e => {
    this.handleInput(e.clipboardData.getData('text/plain'))
  }

  maybeCommit: React.KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      this.addPills([this.state.input])
    }
  }

  handleInput = (input: string) => {
    const separator = this.props.separator || ','
    if (input.match(separator)) {
      this.addPills(input.split(separator).filter(x => x))
    } else {
      this.setState({input})
    }
  }

  removeItem = (item: string) => () => {
    const remainingValue = this.props.value.filter(i => item !== i)
    this.props.onChange(remainingValue)
  }

  validateInput = (value: string) => {
    if (!this.props.validator) {
      return true
    }
    return this.props.validator(value)
  }

  render() {
    return (
      <Pills>
        <Grid container spacing={8} alignItems="center">
          {this.props.value.map(item => (
            <Grid item key={item}>
              <Pill px={10} py={8} justifyContent="center" alignItems="center">
                {item}
                <PillButton onClick={this.removeItem(item)}>
                  <CloseIcon width="11px" height="11px" />
                </PillButton>
              </Pill>
            </Grid>
          ))}
          <Grid item>
            <TextField
              type="text"
              id="pill-input"
              placeholder={
                this.props.value.length === 0
                  ? this.props.emptyPlaceholder
                  : this.props.nonEmptyPlaceholder
              }
              onBlur={this.commit}
              onPaste={this.handlePaste}
              onChange={this.handleChange}
              onKeyPress={this.maybeCommit}
              value={this.state.input}
              {...this.props.textFieldProps}
            />
          </Grid>
        </Grid>
      </Pills>
    )
  }
}

export default PillInput
