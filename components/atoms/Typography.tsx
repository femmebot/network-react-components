import MuiTypography, {
  TypographyProps,
} from '@material-ui/core/Typography/Typography'
import * as React from 'react'
/* Wraps mui Typography and overrides via the theme
 * from https://material-ui.com/api/typography/ */

// @ts-ignore
interface Props extends TypographyProps {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'instructional'
    | 'label'
    | 'emphasis'
    | 'paragraph'
    | 'button'
}

const Typography: React.SFC<Props> = ({ variant, ...props }) => {
  interface VariantMap {
    [key: string]: TypographyProps['variant']
  }
  const variantMap = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    instructional: 'h3',
    label: 'h2',
    emphasis: 'h1',
    paragraph: 'body2',
    button: 'button',
  } as VariantMap
  const mappedVariant = variant ? variantMap[variant] : undefined
  return <MuiTypography {...props} variant={mappedVariant} />
}

export default Typography
