import { Grid } from '@material-ui/core'
import { Field, Form, Formik, FormikErrors, FormikProps } from 'formik'
import * as React from 'react'
import { PaymentMethod } from '~shared/api.network.v1'
import Button from '~shared/components/atoms/Button'
import CardNameField from '~shared/components/molecules/CardNameField'
import {
  MaterialSelectField,
  MaterialTextField,
} from '~shared/components/molecules/FormikFields'
import Modal from '~shared/components/molecules/Modal'
import countryOptions from '~shared/utils/countryOptions'
import { formatAsExpirationDate } from '~shared/utils/formatters'
import handleError from '~shared/utils/handleError'

interface Props {
  updatePaymentMethod: (paymentMethod: PaymentMethod) => Promise<void>
  paymentMethod: PaymentMethod
  open: boolean
  onClose: () => void
}

interface State {
  open: boolean
}

interface ExpirationDate {
  year: number
  month: number
}

interface FormModel {
  expiration: string
  country: string
  zipCode: string
}

class UpdateCardInfoModal extends React.Component<Props, State> {
  state = {
    open: false,
  }

  update = async (values: FormModel, closeModal: () => void) => {
    try {
      const expirationDate = this.getExpirationDate(values.expiration)

      this.props.paymentMethod.address_country = values.country
      this.props.paymentMethod.address_zip = values.zipCode
      this.props.paymentMethod.exp_year = expirationDate.year
      this.props.paymentMethod.exp_month = expirationDate.month

      await this.props.updatePaymentMethod(this.props.paymentMethod)
    } catch (e) {
      handleError(e)
    }

    closeModal()
  }

  getExpirationDate = (expiration: string): ExpirationDate => {
    if (!this.isValidExpirationFormat(expiration)) {
      throw new Error('Expiration date is invalid')
    }

    const parts = expiration.split('/')
    const month = parts[0].trim()
    const year = String(new Date().getFullYear()).substr(0, 2) + parts[1].trim()

    return { year: Number(year), month: Number(month) }
  }

  isValidExpirationFormat = (expiration: string) =>
    expiration.match('^(0[1-9]|1[0-2]) / ([0-9]{2})$')

  isValidExpirationDate = (expiration: string) => {
    try {
      const expirationDate = this.getExpirationDate(expiration)

      // The argument monthIndex is 0-based.
      const expDate = new Date(expirationDate.year, expirationDate.month - 1)
      return expDate.getTime() > new Date().getTime()
    } catch (e) {
      return false
    }
  }

  validate = (values: FormModel) => {
    const initialValues: FormikErrors<FormModel> = {}

    // this method run earlier than the format method of expiration
    const expiration = values.expiration.substr(0, 7)

    if (!this.isValidExpirationFormat(expiration)) {
      initialValues.expiration = 'Expiration date is not valid'
    } else if (!this.isValidExpirationDate(expiration)) {
      initialValues.expiration = 'Expiration date is in the past'
    }

    return initialValues
  }

  componentDidUpdate() {
    if (this.props.open !== this.state.open) {
      this.setState({ open: !!this.props.open })
    }
  }

  render() {
    const paymentMethod = this.props.paymentMethod
    const expYear = String(paymentMethod.exp_year).substr(2, 4)
    const expMonth = paymentMethod.exp_month
    const expiration = (expMonth <= 9 ? '0' : '') + `${expMonth} / ${expYear}`

    const initialValues: FormModel = {
      expiration,
      country: this.props.paymentMethod.address_country,
      zipCode: this.props.paymentMethod.address_zip,
    }

    return (
      <Modal
        title="Update card info"
        open={this.state.open}
        onClose={this.props.onClose}
      >
        {closeModal => (
          <Formik
            initialValues={initialValues}
            onSubmit={(values: FormModel) => this.update(values, closeModal)}
            validate={this.validate}
            render={(props: FormikProps<FormModel>) => (
              <Form>
                <Grid container direction="column" spacing={5}>
                  <Grid item>
                    <CardNameField paymentMethod={this.props.paymentMethod} />
                  </Grid>
                  <Grid item>
                    <Grid container justify="space-between" spacing={4}>
                      <Grid item xs={4}>
                        <Field
                          component={MaterialTextField}
                          format={formatAsExpirationDate}
                          maxLength={7}
                          name="expiration"
                          label="Expire"
                          placeholder="MM / YY"
                          width={1}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Field
                          component={MaterialSelectField}
                          width={1}
                          label="Country"
                          name="country"
                          options={countryOptions}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Field
                          component={MaterialTextField}
                          name="zipCode"
                          label="Zip code"
                          width={1}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container justify="center" spacing={1}>
                      <Grid item>
                        <Button
                          wide
                          disabled={props.isSubmitting}
                          onClick={closeModal}
                        >
                          Cancel
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          type="submit"
                          wide
                          disabled={
                            props.isSubmitting ||
                            !props.isValid ||
                            !props.values.country ||
                            !props.values.expiration ||
                            !props.values.zipCode
                          }
                          variant="commit"
                        >
                          Update
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Form>
            )}
          />
        )}
      </Modal>
    )
  }
}

export default UpdateCardInfoModal
