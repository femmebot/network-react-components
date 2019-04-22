import { FormikActions } from 'formik'
import { isEmpty, isEqual, reduce } from 'lodash'
import { saveIndicatorStore } from '~stores'

export const getChangedValues = <T extends Dictionary>(
  initialValues: T,
  values: T
): Partial<T> =>
  reduce(
    values,
    (acc, v, k) => {
      if (!isEqual(initialValues[k], v)) {
        acc[k] = v
      }
      return acc
    },
    {} as Partial<T>
  )

export const onUpdate = <T extends Dictionary>(
  initialValues: T,
  save: (updates: Partial<T>) => Promise<void>
) => async (
  values: T,
  { setSubmitting, setErrors }: FormikActions<T>
): Promise<void> => {
  try {
    const updates = getChangedValues(initialValues, values)
    if (!isEmpty(updates)) {
      await save(updates)
      saveIndicatorStore.show()
    }
  } catch (e) {
    setErrors(e.errors)
    throw e
  } finally {
    setSubmitting(false)
  }
}

export const onCreate = <T extends Dictionary>(
  create: (params: NonNullableObject<T>) => Promise<void>
) => async (
  values: NonNullableObject<T>,
  { setSubmitting, setErrors }: FormikActions<NonNullableObject<T>>
): Promise<void> => {
  try {
    await create(values)
    saveIndicatorStore.show()
  } catch (e) {
    setErrors(e.errors)
    throw e
  } finally {
    setSubmitting(false)
  }
}
