import * as React from 'react';
import * as colors from '~shared/styles/constants/colors';

interface Props {
  email: string;
}

export const createMailtoLink = (email: string) => `mailto:${email}`;

const Mailto: React.SFC<Props> = props => (
  <a href={createMailtoLink(props.email)} style={{ color: colors.link }}>
    {props.children}
  </a>
);

export default Mailto;
