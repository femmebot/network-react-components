import {pxToRem} from '~styles/utils'

export const SPACING_UNIT = 8

export type SpacingFn<T> = (size: SpacingSize) => T

export interface SpacingObject<T> {
  (): SpacingFn<T>
  top: SpacingFn<T>
  right: SpacingFn<T>
  bottom: SpacingFn<T>
  left: SpacingFn<T>
  x: SpacingFn<T>
  y: SpacingFn<T>
}

export type SpacingSize = 'auto' | number
// export type SpacingSize =
//   | 0
//   | 1
//   | 2
//   | 3
//   | 4
//   | 5
//   | 6
//   | -1
//   | -2
//   | -3
//   | -4
//   | -5
//   | -6
//   | 'auto'

// export const spacingPx = [
//   /* 0:  0px */ 0,
//   /* 1:  4px */ SPACING_UNIT / 2,
//   /* 2:  8px */ SPACING_UNIT,
//   /* 3: 16px */ SPACING_UNIT * 2,
//   /* 4: 24px */ SPACING_UNIT * 3,
//   /* 5: 48px */ SPACING_UNIT * 6,
//   /* 6: 64px */ SPACING_UNIT * 8,
// ]

// export const spacingRem = spacingPx.map(pxToRem)

export default (size: SpacingSize) => {
  if (size === 'auto') {
    return size
  }
  return pxToRem(size)
}
