import CheckboxGroupField from '~components/molecules/CheckboxGroupField'
import InputAdapter from '~components/molecules/InputAdapter'
import SelectField from '~components/molecules/SelectField'
import TextField from '~components/molecules/TextField'

export const MaterialTextField = InputAdapter(TextField)
export const MaterialSelectField = InputAdapter(SelectField)
export const MaterialCheckboxGroupField = InputAdapter(CheckboxGroupField, {
  setFieldValue: true,
})
