import * as React from 'react'
import styled from 'styled-components'
import Typography from '~shared/components/atoms/Typography'
import {pxToRem} from '~shared/styles/utils'
import {formatAsDollarAmount} from '~shared/utils/formatters'

const Sup = styled.span`
  position: relative;
  font-size: 65%;
  top: ${pxToRem(-8)};
  padding-left: ${pxToRem(5)};
`

const FancyDollarAmount: React.SFC<{children: string | number}> = ({
  children,
}) => {
  const values = formatAsDollarAmount(Number(children)).split('.')
  return (
    <Typography variant="emphasis">
      {values[0]}
      <Sup>{`.${values[1]}`}</Sup>
    </Typography>
  )
}

export default FancyDollarAmount
