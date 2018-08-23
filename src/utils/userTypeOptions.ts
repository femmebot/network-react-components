import {capitalize} from 'lodash'

export default window.CONFIG.userTypes.map((type: string) => ({
  value: type,
  label: capitalize(type),
}))
