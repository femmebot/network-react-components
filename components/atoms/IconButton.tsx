import MuiIconButton from '@material-ui/core/IconButton/IconButton';
import * as React from 'react';
import styled from 'styled-components';
import { pxToRem } from '~shared/styles/utils';

const IconButton = styled(MuiIconButton)`
  && {
    padding: ${pxToRem(5)};
    width: auto;
    height: auto;
    color: inherit;
  }
`;

export default (props: any) => <IconButton {...props} />;
