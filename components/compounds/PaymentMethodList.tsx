import {Grid} from '@material-ui/core'
import {isEmpty} from 'lodash'
import * as React from 'react'
import {PaymentMethod} from '~shared/api.nt.v1'
import FieldLabel from '~shared/components/atoms/FieldLabel'
import PaymentMethodActionMenu from '~shared/components/compounds/PaymentMethodActionMenu'
import CardExpirationField from '~shared/components/molecules/CardExpirationField'
import CardNameField from '~shared/components/molecules/CardNameField'
import CardStateField from '~shared/components/molecules/CardStateField'

export interface Props {
  updatePaymentMethod: (paymentMethod: PaymentMethod) => Promise<void>
  makePaymentMethodDefault: (paymentMethod: PaymentMethod) => Promise<void>
  destroyPaymentMethod: (paymentMethod: PaymentMethod) => Promise<void>
  paymentMethods: PaymentMethod[]
}

const PaymentMethodList: React.SFC<Props> = ({
  paymentMethods,
  updatePaymentMethod,
  makePaymentMethodDefault,
  destroyPaymentMethod,
}) =>
  !isEmpty(paymentMethods) ? (
    <React.Fragment>
      <Grid container spacing={40}>
        <Grid item xs={4}>
          <FieldLabel>Cards on file</FieldLabel>
        </Grid>
        <Grid item xs={4}>
          <FieldLabel>Expiry</FieldLabel>
        </Grid>
        <Grid item xs={4}>
          <FieldLabel>Status</FieldLabel>
        </Grid>
      </Grid>
      {paymentMethods.map(paymentMethod => (
        <Grid container spacing={40} key={paymentMethod.id}>
          <Grid item xs={4}>
            <CardNameField paymentMethod={paymentMethod} />
          </Grid>
          <Grid item xs={4}>
            <CardExpirationField paymentMethod={paymentMethod} />
          </Grid>
          <Grid item xs={3}>
            <CardStateField paymentMethod={paymentMethod} />
          </Grid>
          <Grid item xs={1}>
            <PaymentMethodActionMenu
              paymentMethod={paymentMethod}
              updatePaymentMethod={updatePaymentMethod}
              makePaymentMethodDefault={makePaymentMethodDefault}
              destroyPaymentMethod={destroyPaymentMethod}
            />
          </Grid>
        </Grid>
      ))}
    </React.Fragment>
  ) : null

export default PaymentMethodList
