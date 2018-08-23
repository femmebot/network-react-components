import {capitalize} from 'lodash'

export default window.CONFIG.solutionTypes.map((type: string) => ({
  value: type,
  label: capitalize(type),
}))
