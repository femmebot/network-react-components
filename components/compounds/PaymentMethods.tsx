import { Grid } from '@material-ui/core'
import * as React from 'react'
import PlusIcon from '~shared/images/icon-plus.svg'
import CardForm from '~shared/components/compounds/CardForm'
import { PaymentMethod } from '~shared/api.network.v1'
import Box from '~shared/components/atoms/Box'
import Button from '~shared/components/atoms/Button'
import PaymentMethodList from '~shared/components/compounds/PaymentMethodList'
import Modal from '~shared/components/molecules/Modal'
import Section from '~shared/components/molecules/Section'
import * as colors from '~shared/styles/constants/colors'

interface Props {
  updatePaymentMethod: (paymentMethod: PaymentMethod) => Promise<void>
  makePaymentMethodDefault: (paymentMethod: PaymentMethod) => Promise<void>
  destroyPaymentMethod: (paymentMethod: PaymentMethod) => Promise<void>
  tokenCreated: (
    closeModal: () => void
  ) => (token: stripe.Token) => Promise<void>
  paymentMethods: PaymentMethod[]
  NoPaymentMethodsComponent?: React.ComponentType
}

const PaymentMethods: React.SFC<Props> = ({
  tokenCreated,
  paymentMethods,
  updatePaymentMethod,
  makePaymentMethodDefault,
  destroyPaymentMethod,
  NoPaymentMethodsComponent,
}) => (
  <React.Fragment>
    <Section title="Payment Methods">
      <Box mb={20}>
        {paymentMethods.length > 0 ? (
          <PaymentMethodList
            paymentMethods={paymentMethods}
            updatePaymentMethod={updatePaymentMethod}
            makePaymentMethodDefault={makePaymentMethodDefault}
            destroyPaymentMethod={destroyPaymentMethod}
          />
        ) : NoPaymentMethodsComponent ? (
          <NoPaymentMethodsComponent />
        ) : null}
      </Box>
      <Modal
        title="Add new card"
        trigger={
          <Button wide href="#">
            <PlusIcon width={15} style={{ fill: colors.black }} />
            Add payment method
          </Button>
        }
      >
        {closeModal => (
          <div>
            <CardForm onTokenCreated={tokenCreated(closeModal)}>
              {processing => (
                <Grid container justify="center" spacing={32}>
                  <Grid item>
                    <Button disabled={processing} onClick={closeModal} wide>
                      Cancel
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      disabled={processing}
                      variant="commit"
                      type="submit"
                      wide
                    >
                      Add card
                    </Button>
                  </Grid>
                </Grid>
              )}
            </CardForm>
          </div>
        )}
      </Modal>
    </Section>
  </React.Fragment>
)

export default PaymentMethods
