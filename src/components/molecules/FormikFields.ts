import CheckboxGroupField from '~shared/molecules/CheckboxGroupField'
import InputAdapter from '~shared/molecules/InputAdapter'
import SelectField from '~shared/molecules/SelectField'
import TextField from '~shared/molecules/TextField'

export const MaterialTextField = InputAdapter(TextField)
export const MaterialSelectField = InputAdapter(SelectField)
export const MaterialCheckboxGroupField = InputAdapter(CheckboxGroupField, {
  setFieldValue: true,
})
