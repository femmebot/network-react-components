import * as React from 'react';
import styled from 'styled-components';
import { sizeStyles, spaceStyles } from '~shared/styles/index';
import { SizeProps } from '~shared/styles/props/size';
import { SpaceProps } from '~shared/styles/props/space';
import { withTheme, WithTheme } from '~shared/styles/themes';

interface Props extends SizeProps, SpaceProps {
  color?: string;
}

const StyledHorizontalDivider = withTheme(styled.hr`
  color: ${({ theme, color }: Props & WithTheme) =>
    color ? color : theme.palette.divider};
  ${sizeStyles};
  ${spaceStyles};
  border-width: 0 0 ${({ height }: Props) => (height ? height : '2px')} 0;
  border-style: solid;
`);

const HorizontalDivider: React.SFC<Props> = props => (
  <StyledHorizontalDivider {...props} />
);

export default HorizontalDivider;
