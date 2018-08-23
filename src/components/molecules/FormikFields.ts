import CheckboxGroupField from '~shared-components/molecules/CheckboxGroupField'
import InputAdapter from '~shared-components/molecules/InputAdapter'
import SelectField from '~shared-components/molecules/SelectField'
import TextField from '~shared-components/molecules/TextField'

export const MaterialTextField = InputAdapter(TextField)
export const MaterialSelectField = InputAdapter(SelectField)
export const MaterialCheckboxGroupField = InputAdapter(CheckboxGroupField, {
  setFieldValue: true,
})
