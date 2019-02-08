import * as React from 'react';

import { FieldProps } from 'formik';
import { isUndefined } from 'lodash';

type FieldValue = string | number;

interface Options {
  setFieldValue?: boolean;
}

const InputAdapter = (
  component: React.ReactType,
  options?: Options
): React.SFC<FieldProps> => ({ field, form, ...props }) => {
  const Component = component;
  const formatValue = (value: FieldValue | FieldValue[]) => {
    if (typeof value === 'number') {
      return value.toString();
    }
    return value;
  };

  return (
    <Component
      onChange={
        options && options.setFieldValue
          ? (value: string | string[]) => form.setFieldValue(field.name, value)
          : field.onChange
      }
      onBlur={field.onBlur}
      value={(!isUndefined(field.value) && formatValue(field.value)) || ''}
      id={field.name}
      name={field.name}
      error={form.errors[field.name]}
      {...props}
    />
  );
};

export default InputAdapter;
