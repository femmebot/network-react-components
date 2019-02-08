import Radio from '@material-ui/core/Radio';
import styled from 'styled-components';

import { sizeStyles, spaceStyles } from '~shared/styles/index';
import { SizeProps } from '~shared/styles/props/size';
import { SpaceProps } from '~shared/styles/props/space';

export interface Props extends SizeProps, SpaceProps {}

const RadioInput = styled(Radio)`
  font: inherit;
  ${sizeStyles};
  ${spaceStyles};
`;

export default RadioInput;
