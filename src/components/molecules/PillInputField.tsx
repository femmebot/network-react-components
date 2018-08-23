import * as React from 'react'
import PillInput, {
  Props as PillInputProps,
} from '~components/molecules/PillInput'

import FormControl from '@material-ui/core/FormControl/FormControl'
import {FieldProps} from 'formik'
import Box from '~components/atoms/Box'
import FieldLabel from '~components/atoms/FieldLabel'

interface Props extends PillInputProps, FieldProps {
  error?: string
  disabled?: boolean
  label?: string
  className?: string
}

interface State {
  value: any[]
}

class PillInputField extends React.Component<Props, State> {
  state = {
    value: [],
  }

  onChange = (value: string[]) => {
    this.setState({value})
    this.props.form.setFieldValue(this.props.field.name, value)
  }

  componentDidMount() {
    this.setState({value: this.props.field.value})
  }

  render() {
    const {label, disabled, error, className} = this.props
    return (
      <FormControl disabled={disabled} error={!!error} className={className}>
        {label && <FieldLabel>{label}</FieldLabel>}
        <Box mt={label ? 30 : 0}>
          <PillInput
            {...this.props}
            onChange={this.onChange}
            value={this.state.value}
          />
        </Box>
      </FormControl>
    )
  }
}
export default PillInputField
