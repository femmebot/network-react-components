import {InputAdornment} from '@material-ui/core'
import * as React from 'react'
import styled from 'styled-components'
import CloseIcon from '~images/icon-close.svg'
import MagnifyingGlassIcon from '~images/icon-magnifying-glass.svg'
import TextField, {
  Props as TextFieldProps,
} from '~shared/components/molecules/TextField'
import {colors} from '~shared/styles/index'

interface Props extends TextFieldProps {
  reset: () => void
}

const CloseIconWrapper = styled.div`
  cursor: pointer;
  color: ${colors.grayBoulder};
  &:hover {
    color: ${colors.black};
  }
`

class SearchField extends React.Component<Props> {
  render() {
    return (
      <TextField
        startAdornment={
          <InputAdornment position="start">
            <MagnifyingGlassIcon height={14} />
          </InputAdornment>
        }
        endAdornment={
          this.props.value ? (
            <InputAdornment position="end">
              <CloseIconWrapper role="button" onClick={this.props.reset}>
                <CloseIcon height={14} />
              </CloseIconWrapper>
            </InputAdornment>
          ) : null
        }
        {...this.props}
      />
    )
  }
}

export default SearchField
