import { isUndefined } from 'lodash'
import {
  SpacingFn,
  SpacingObject,
  SpacingSize,
} from '~shared/styles/constants/spacing'
import margin, { Margin } from '~shared/styles/margin'
import padding, { Padding } from '~shared/styles/padding'

const REG = /^[mp][trblxy]?$/

const properties: { [key: string]: Margin | Padding } = {
  m: margin,
  p: padding,
}

const directions: { [key: string]: keyof SpacingObject<any> } = {
  t: 'top',
  r: 'right',
  b: 'bottom',
  l: 'left',
  x: 'x',
  y: 'y',
}

const getProperty = <T>(key: keyof SpaceProps): SpacingFn<T> => {
  const [a, b] = key.split('')
  const prop = properties[a]
  const dir = directions[b]
  const func = dir ? prop[dir] : prop
  return func as SpacingFn<T>
}

export interface SpaceProps {
  m?: SpacingSize
  mt?: SpacingSize
  mr?: SpacingSize
  mb?: SpacingSize
  ml?: SpacingSize
  mx?: SpacingSize | 'auto'
  my?: SpacingSize | 'auto'
  p?: SpacingSize
  pt?: SpacingSize
  pr?: SpacingSize
  pb?: SpacingSize
  pl?: SpacingSize
  px?: SpacingSize
  py?: SpacingSize
}

const space = (props: SpaceProps) => {
  const keys = Object.keys(props)
    .filter(key => REG.test(key))
    .sort()

  return keys.map(key => {
    const value = props[key as keyof SpaceProps]
    if (isUndefined(value)) {
      return {}
    }
    const property = getProperty(key as keyof SpaceProps)
    return property(value)
  })
}

export default space
