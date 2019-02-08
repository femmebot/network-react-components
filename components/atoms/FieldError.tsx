import { FormHelperText } from '@material-ui/core';
import * as React from 'react';
import styled from 'styled-components';

import { sizeStyles, spaceStyles } from '~shared/styles/index';
import { SizeProps } from '~shared/styles/props/size';
import { SpaceProps } from '~shared/styles/props/space';
import { withTheme, WithTheme } from '~shared/styles/themes';

type Props = SpaceProps & SizeProps;

const StyledFieldError = withTheme(styled(FormHelperText)`
  ${sizeStyles};
  ${spaceStyles};
  ${(_props: Props & WithTheme) => ''};
`);

const FieldError: React.SFC<Props> = props => (
  <StyledFieldError error {...props} />
);

export default FieldError;
