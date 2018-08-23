import {FormikProps} from 'formik'
import {debounce, isEqual} from 'lodash'
import * as React from 'react'

class AutoSave<T> extends React.Component<FormikProps<T>> {
  save = debounce(this.props.submitForm, 2000)

  componentWillReceiveProps(nextProps: FormikProps<T>) {
    if (!isEqual(nextProps.values, this.props.values)) {
      this.save()
    }

    if (!nextProps.dirty) {
      this.save.cancel()
    }
  }

  render() {
    return null
  }
}

export default AutoSave
