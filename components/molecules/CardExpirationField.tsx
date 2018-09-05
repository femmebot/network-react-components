import * as React from 'react'
import {PaymentMethod} from '~shared/api.network.v1'
import Typography from '~shared/components/atoms/Typography'

interface Props {
  paymentMethod: PaymentMethod
}

class CardExpirationField extends React.Component<Props> {
  renderCardExpiration = (paymentMethod: PaymentMethod) => {
    const expMonth = paymentMethod.exp_month
    const expYear = paymentMethod.exp_year

    return (expMonth <= 9 ? '0' : '') + `${expMonth}/${expYear}`
  }

  render() {
    return (
      <Typography>
        {this.renderCardExpiration(this.props.paymentMethod)}
      </Typography>
    )
  }
}

export default CardExpirationField
