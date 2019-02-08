import MuiTypography, {
  TypographyProps,
} from '@material-ui/core/Typography/Typography';
import * as React from 'react';
/* Wraps mui Typography and overrides via the theme
 * from https://material-ui.com/api/typography/ */

// @ts-ignore
interface Props extends TypographyProps {
  variant?:
    | 'heading-1'
    | 'heading-2'
    | 'heading-3'
    | 'heading-4'
    | 'instructional'
    | 'label'
    | 'emphasis'
    | 'paragraph'
    | 'button';
}

const Typography: React.SFC<Props> = ({ variant, ...props }) => {
  interface VariantMap {
    [key: string]: TypographyProps['variant'];
  }
  const variantMap = {
    'heading-1': 'headline',
    'heading-2': 'subheading',
    'heading-3': 'title',
    'heading-4': 'display1',
    instructional: 'display2',
    label: 'display3',
    emphasis: 'display4',
    paragraph: 'body2',
    button: 'button',
  } as VariantMap;
  const mappedVariant = variant ? variantMap[variant] : undefined;
  return <MuiTypography {...props} variant={mappedVariant} />;
};

export default Typography;
