import { Grid } from '@material-ui/core'
import { isEmpty } from 'lodash'
import * as React from 'react'
import { PaymentMethod } from '~shared/api.network.v1'
import FieldLabel from '~shared/components/atoms/FieldLabel'
import PaymentMethodActionMenu from '~shared/components/compounds/PaymentMethodActionMenu'
import CardExpirationField from '~shared/components/molecules/CardExpirationField'
import CardNameField from '~shared/components/molecules/CardNameField'
import CardStateField from '~shared/components/molecules/CardStateField'
import InAppPurchaseField from '~shared/components/molecules/InAppPurchaseField'

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
      <Grid container spacing={5}>
        <Grid item xs={3}>
          <FieldLabel>Cards on file</FieldLabel>
        </Grid>
        <Grid item xs={3}>
          <FieldLabel>Expiry</FieldLabel>
        </Grid>
        <Grid item xs={3}>
          <FieldLabel>In-App Purchases</FieldLabel>
        </Grid>
        <Grid item xs={3}>
          <FieldLabel>Status</FieldLabel>
        </Grid>
      </Grid>
      {paymentMethods.map(paymentMethod => (
        <Grid container spacing={5} key={paymentMethod.id}>
          <Grid item xs={3}>
            <CardNameField paymentMethod={paymentMethod} />
          </Grid>
          <Grid item xs={3}>
            <CardExpirationField paymentMethod={paymentMethod} />
          </Grid>
          <Grid item xs={3}>
            <InAppPurchaseField paymentMethod={paymentMethod} />
          </Grid>
          <Grid item xs={2}>
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
