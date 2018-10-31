import { FontFace } from 'csstype'

import gothamBook from '~shared/fonts/Gotham-Book.otf'
import gothamMedium from '~shared/fonts/Gotham-Medium.otf'
import sentinelBook from '~shared/fonts/Sentinel-Book.otf'
import sentinelMedium from '~shared/fonts/Sentinel-Medium.otf'
import sentinelMediumItalic from '~shared/fonts/Sentinel-MediumItal.otf'

const fontUrl = (url: string) => `url('${url}')`

export const sentinelFontFace: FontFace[] = [
  {
    fontFamily: 'Sentinel',
    src: fontUrl(sentinelMedium),
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  {
    fontFamily: 'Sentinel',
    src: fontUrl(sentinelMediumItalic),
    fontWeight: 'normal',
    fontStyle: 'italic',
  },
  {
    fontFamily: 'Sentinel',
    src: fontUrl(sentinelBook),
    fontWeight: 400,
    fontStyle: 'normal',
  },
]

export const gothamFontFace: FontFace[] = [
  {
    fontFamily: 'Gotham',
    src: fontUrl(gothamMedium),
    fontWeight: 500,
    fontStyle: 'normal',
  },
  {
    fontFamily: 'Gotham',
    src: fontUrl(gothamBook),
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
]

export const sans = '"Gotham", sans-serif'
export const serif = '"Sentinel", serif'

// TODO: Remove me
export const gothamBookUrl = gothamBook
