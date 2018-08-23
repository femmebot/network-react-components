import {Grid} from '@material-ui/core'
import * as React from 'react'
import {
  CardCVCElement,
  CardExpiryElement,
  CardNumberElement,
  Elements,
  injectStripe,
  PostalCodeElement,
  ReactStripeElements,
  StripeProvider,
} from 'react-stripe-elements'
import {Brand} from '~api.nt.v1'
import Box from '~shared-components/atoms/Box'
import Flex from '~shared-components/atoms/Flex'
import Typography from '~shared-components/atoms/Typography'
import TextField from '~shared-components/molecules/TextField'
import TypeAheadSelectField from '~shared-components/molecules/TypeAheadSelectField'
import CardBrandIcon from '~shared-components/atoms/CardBrandIcon'
import CardFormField from '~shared-components/atoms/CardFormField'
import countryOptions from '~shared-utils/countryOptions'
import handleError from '~shared-utils/handleError'

interface Props {
  onTokenCreated: (token: stripe.Token) => Promise<void>
  onError?: () => void
  children: (processing: boolean) => React.ReactNode
}

interface State {
  brand: Brand
  name: string
  country: string
  processing: boolean
  errors: {[key: string]: string | undefined}
}

const brandMap = new Map<string, Brand>([
  ['amex', Brand.Amex],
  ['discover', Brand.Discover],
  ['mastercard', Brand.MasterCard],
  ['visa', Brand.Visa],
  ['paypal', Brand.Paypal],
])

const stripeFonts = [
  {
    family: '"Gotham-Book"',
    weight: 'normal',
    style: 'normal',
    src:
      "url(https://s3.amazonaws.com/assets.creativedifference/Gotham-Book.otf) format('opentype')",
  },
]

const createOptions = () => ({
  style: {
    base: {
      fontFamily: '"Gotham-Book", sans',
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
  },
})

class CardForm extends React.Component<
  ReactStripeElements.InjectedStripeProps & Props,
  State
> {
  state = {
    brand: Brand.Placeholder,
    name: '',
    country: '',
    processing: false,
    errors: {
      card: undefined,
      cvv: undefined,
      zip: undefined,
      expiry: undefined,
    },
  }

  handleChangeOfCountry = (value: string | null) => {
    this.setState({country: value || ''})
  }

  handleChangeOfCardName = (value: string) => {
    this.setState({name: value})
  }

  processing = () => {
    this.setState({processing: true})
  }

  processed = () => {
    this.setState({processing: false})
  }

  resolveBrand = (value: string): Brand => {
    const brand = brandMap.get(value)
    if (!brand) {
      return Brand.Placeholder
    }

    return brand
  }

  handleChangeOfCardNumber = (value: stripe.elements.ElementChangeResponse) => {
    this.setState({brand: this.resolveBrand(value.brand)})
  }

  handleApiError = (error: stripe.elements.ElementChangeResponse) => {
    handleError(error)
    this.props.onError && this.props.onError()
  }

  createStripeToken = async (name: string): Promise<stripe.Token> => {
    if (!this.props.stripe) {
      throw Error("Stripe.js hasn't loaded yet.")
    }

    const payload = await this.props.stripe.createToken({name})

    if (payload.token) {
      return payload.token
    }

    if (payload.error) {
      throw Error(payload.error.message)
    }

    throw Error('Something went wrong, no token reveived')
  }

  handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()

    if (!this.props.stripe) {
      handleError("Stripe.js hasn't loaded yet.")
      return
    }

    try {
      this.processing()
      const stripeToken = await this.createStripeToken(this.state.name)
      await this.props.onTokenCreated(stripeToken)
      this.processed()
    } catch (e) {
      this.processed()
      this.handleApiError(e)
    }
  }

  onChange = (key: string, event: stripe.elements.ElementChangeResponse) => {
    this.setState({
      errors: {
        ...this.state.errors,
        [key]: (event.error && event.error.message) || undefined,
      },
    })
  }

  render() {
    const {errors} = this.state
    return (
      <Box pt={40}>
        <form onSubmit={this.handleSubmit}>
          <Grid container spacing={32}>
            <Grid item xs={12}>
              <CardFormField label="Card number" error={errors.card} hr>
                <Flex alignItems="center">
                  <CardBrandIcon brand={this.state.brand} />
                  <Box width="100%">
                    <CardNumberElement
                      placeholder=""
                      onChange={event => {
                        this.onChange('card', event)
                        this.handleChangeOfCardNumber(event)
                      }}
                      {...createOptions()}
                    />
                  </Box>
                </Flex>
              </CardFormField>
            </Grid>
            <Grid item xs={12}>
              <CardFormField label="Name on card">
                <Typography>
                  <TextField
                    required
                    inheritFont
                    width={1}
                    id="name"
                    value={this.state.name}
                    onChange={event => {
                      this.handleChangeOfCardName(event.target.value)
                    }}
                  />
                </Typography>
              </CardFormField>
            </Grid>
            <Grid item sm={6} xs={12}>
              <CardFormField label="Expiry" hr error={errors.expiry}>
                <CardExpiryElement
                  onChange={event => this.onChange('expiry', event)}
                  {...createOptions()}
                />
              </CardFormField>
            </Grid>
            <Grid item sm={6} xs={12}>
              <CardFormField
                label="CVV"
                tooltip="The CVV Number on you credit card or debit card
                      is a 3 digit number located on the back of the card"
                error={errors.cvv}
                hr
              >
                <CardCVCElement
                  placeholder=""
                  onChange={event => this.onChange('cvv', event)}
                  {...createOptions()}
                />
              </CardFormField>
            </Grid>
            <Grid item sm={6} xs={12}>
              <CardFormField label="Country">
                <Typography>
                  <TypeAheadSelectField
                    id="country"
                    value={this.state.country}
                    onChange={this.handleChangeOfCountry}
                    options={countryOptions}
                  />
                </Typography>
              </CardFormField>
            </Grid>
            <Grid item sm={6} xs={12}>
              <CardFormField label="Zip code" error={errors.zip} hr>
                <PostalCodeElement
                  placeholder=""
                  onChange={event => this.onChange('zip', event)}
                  {...createOptions()}
                />
              </CardFormField>
            </Grid>
          </Grid>
          {this.props.children(this.state.processing)}
        </form>
      </Box>
    )
  }
}

const PreparedCardForm = injectStripe(CardForm)

type StripeFormProps = Pick<Props, 'onTokenCreated' | 'onError' | 'children'>

class StripeForm extends React.Component<StripeFormProps> {
  render() {
    return (
      <StripeProvider apiKey={window.CONFIG.stripeApiKey}>
        <Elements fonts={stripeFonts}>
          <PreparedCardForm
            onTokenCreated={this.props.onTokenCreated}
            onError={this.props.onError}
          >
            {processing => this.props.children(processing)}
          </PreparedCardForm>
        </Elements>
      </StripeProvider>
    )
  }
}

export default StripeForm
