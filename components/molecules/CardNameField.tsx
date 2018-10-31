import { Grid } from '@material-ui/core'
import * as React from 'react'
import CardBrandIcon from '~shared/components/atoms/CardBrandIcon'
import { PaymentMethod } from '~shared/api.network.v1'
import Typography from '~shared/components/atoms/Typography'

interface Props {
  paymentMethod: PaymentMethod
}

class CardNameField extends React.Component<Props> {
  renderCardName = (paymentMethod: PaymentMethod) =>
    `${paymentMethod.brand} ending in ${paymentMethod.last4}`

  render() {
    return (
      <Grid container alignItems="center">
        <Grid item>
          <CardBrandIcon
            brand={this.props.paymentMethod.brand}
            width={32}
            height={30}
          />
        </Grid>
        <Grid item>
          <Typography>
            {this.renderCardName(this.props.paymentMethod)}
          </Typography>
        </Grid>
      </Grid>
    )
  }
}

export default CardNameField
