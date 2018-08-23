import {BoxProps} from '~components/atoms/Box'
import {styleObjectToTemplate} from '~styles/utils'
import * as colors from './constants/color'
import * as creativeQualityColors from './constants/createQualityColor'
import * as legacyColors from './constants/legacyColor'
import flexbox from './props/flexbox'
import size, {SizeProps} from './props/size'
import space, {SpaceProps} from './props/space'
import * as typography from './typography'

export const sizeStyles = (props: SizeProps) =>
  styleObjectToTemplate(size(props))

export const spaceStyles = (props: SpaceProps) =>
  space(props)
    .map(styleObjectToTemplate)
    .join('\n')

export const flexboxStyles = (props: BoxProps) =>
  styleObjectToTemplate(flexbox(props))

export {
  colors,
  legacyColors,
  creativeQualityColors,
  typography,
  flexbox,
  size,
  space,
}
