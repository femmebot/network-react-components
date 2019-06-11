import { BoxProps } from '~shared/components/atoms/Box';
import { styleObjectToTemplate } from '~shared/styles/utils';
import * as colors from './constants/colors';
import * as creativeQualityColors from './constants/creativeQualityColors';
import * as legacyColors from './constants/legacyColors';
import flexbox from './props/flexbox';
import size, { SizeProps } from './props/size';
import space, { SpaceProps } from './props/space';
import * as typography from './typography';

export const sizeStyles = (props: SizeProps) =>
  styleObjectToTemplate(size(props));

export const spaceStyles = (props: SpaceProps) =>
  space(props)
    .map(styleObjectToTemplate)
    .join('\n');

export const flexboxStyles = (props: BoxProps) =>
  styleObjectToTemplate(flexbox(props));

export {
  colors,
  legacyColors,
  creativeQualityColors,
  typography,
  flexbox,
  size,
  space,
};
