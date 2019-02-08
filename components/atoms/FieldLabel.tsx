import { InputLabel as MUIInputLabel } from '@material-ui/core';
import * as React from 'react';
import styled from 'styled-components';

import { pxToRem } from '~shared/styles/utils';

interface Props {
  htmlFor?: string;
}

const FieldLabel = styled(MUIInputLabel)`
  && {
    width: 100%;
    font-weight: 500;
    font-size: ${pxToRem(12)};
    text-transform: uppercase;
    transform: translate(0, 1.5px) scale(1);
    line-height: 1.3;
  }
`;
export default (props => <FieldLabel {...props} shrink />) as React.SFC<Props>;
