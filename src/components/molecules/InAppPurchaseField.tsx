import * as React from 'react'
import { PaymentMethod } from '~shared/api.network.v1'
import Typography from '~shared/components/atoms/Typography'
import * as colors from '~shared/styles/constants/colors'

interface Props {
  paymentMethod: PaymentMethod
}

const InAppPurchase = ({ paymentMethod }: Props) => (
  <Typography style={{ color: colors.black }}>
    {paymentMethod.default ? 'ON' : 'OFF'}
  </Typography>
)

export default InAppPurchase
