import { mapValues, pick } from 'lodash'

const setSize = (dim: number) => (dim > 1 ? `${dim}px` : `${dim * 100}%`)

export interface SizeProps {
  width?: number | string
  height?: number | string
}

const sizeProperties = ['width', 'height']

const size = (props: SizeProps) => {
  const sizeProps = pick(props, sizeProperties)

  return mapValues(
    sizeProps,
    value => (typeof value === 'number' ? setSize(value) : value)
  )
}

export default size
