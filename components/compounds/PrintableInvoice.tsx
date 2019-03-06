import * as React from 'react'

import Grid from '@material-ui/core/Grid/Grid'
import { partition, sortBy, sumBy } from 'lodash'
import styled from 'styled-components'
import { Coupon, Invoice, Subscription } from '~shared/api.network.v1'
import { InvoiceItem } from '~shared/api.network.v1/InvoiceItem'
import Box from '~shared/components/atoms/Box'
import Center from '~shared/components/atoms/Center'
import HorizontalDivider from '~shared/components/atoms/HorizontalDivider'
import Typography from '~shared/components/atoms/Typography'
import FieldLabel from '~shared/components/atoms/FieldLabel'
import { colors } from '~shared/styles/index'
import { pxToRem } from '~shared/styles/utils'
import { formatAsDollarAmount, formatDate } from '~shared/utils/formatters'

const Wrapper = styled.div`
  padding: ${pxToRem(90)} ${pxToRem(20)};
  max-width: ${pxToRem(900)};
  margin: 0 auto;
  @media print {
    max-width: 100%;
    padding: 0;
  }
`
const AddressItem = styled.div`
  line-height: 1;
`

const LabelValue: React.SFC<{ label: string }> = ({ label, children }) => (
  <Grid item container alignItems="center">
    <Grid item xs={4}>
      <FieldLabel>{label}</FieldLabel>
    </Grid>
    <Grid container item xs={8} justify="flex-end">
      <Typography variant="paragraph">{children}</Typography>
    </Grid>
  </Grid>
)

const Subtotal: React.SFC<{ items: InvoiceItem[] }> = ({ items }) => (
  <React.Fragment>
    <HorizontalDivider />
    <Grid container>
      <Grid item xs={6}>
        <FieldLabel>Subtotal</FieldLabel>
      </Grid>
      <Grid item xs={6} container justify="flex-end">
        <Typography variant="paragraph">
          <strong>{formatAsDollarAmount(sumBy(items, 'amount'))}</strong>
        </Typography>
      </Grid>
    </Grid>
  </React.Fragment>
)

const CouponLine: React.SFC<{ coupon: Coupon; invoice: Invoice }> = ({
  coupon,
  invoice,
}) => {
  const discountAmount = coupon.amount_off
    ? coupon.amount_off
    : invoice.amount * (coupon.percent_off / 100.0)
  return (
    <Grid container spacing={24}>
      <Grid item xs={10}>
        <FieldLabel>Promo Code Applied</FieldLabel>
      </Grid>
      <Grid item xs={2} container justify="flex-end">
        <Typography variant="paragraph">
          ({formatAsDollarAmount(discountAmount)})
        </Typography>
      </Grid>
    </Grid>
  )
}

interface AddressProps {
  street1: string
  street2?: string
  cityStateZip: string
}
const Address: React.SFC<AddressProps> = address => (
  <React.Fragment>
    <AddressItem>{address.street1}</AddressItem>
    {address.street2 && <AddressItem>{address.street2}</AddressItem>}
    <AddressItem>{address.cityStateZip}</AddressItem>
  </React.Fragment>
)

const guardedDivide = (amount: number, quantity: number) =>
  quantity === 0 ? 0 : amount / quantity

interface Props {
  invoice: Invoice
  organization: {
    name_display: string
  }
  subscription: Subscription
  logo?: string
  brandTitle?: string
  address?: AddressProps
}

const defaultAddress = {
  street1: '501 The Embarcadero',
  street2: 'Pier 28 Annex',
  cityStateZip: 'San Francisco, CA 94105',
}

function renderDescription(invoiceItem: InvoiceItem) {
  // 2 x new users responded 1/26/2019
  const description = invoiceItem.description
  const amount = parseInt(description.split('x')[0])
  const isInactive = !!description.match(/inactive/g)
  const dateFormat = 'MM/DD/YYYY'
  const formatedStartDate = formatDate(invoiceItem.period_start, dateFormat)
  const formatedEndDate = formatDate(invoiceItem.period_end, dateFormat)

  const newDesc = `
    ${amount} became active on
    ${formatedStartDate}. ${invoiceItem.quantity}
    were ${isInactive ? 'inactive' : 'active'} from
    ${formatedStartDate} to ${formatedEndDate}.
  `
  return newDesc
}

const PrintableInvoice: React.SFC<Props> = ({
  organization,
  invoice,
  subscription,
  logo,
  brandTitle,
  address = defaultAddress,
}) => {
  const { coupon } = subscription
  const [proRatedItems, items] = partition(invoice.invoice_items, 'prorated')
  console.log('subscription', invoice.invoice_items)
  return (
    <Wrapper>
      <Center mb={40}>
        <Typography variant="heading-2">Billing Statement</Typography>
      </Center>
      {logo && (
        <Box mb={15}>
          <img src={logo} style={{ width: pxToRem(64) }} />
        </Box>
      )}
      <Box mb={50}>
        <Typography variant="paragraph">
          {brandTitle && (
            <Box mb={10}>
              <AddressItem>
                <strong>{brandTitle}</strong>
              </AddressItem>
            </Box>
          )}
          {address && <Address {...address} />}
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={5}>
          <LabelValue label="Customer">{organization.name_display}</LabelValue>
          <LabelValue label="Date Paid">
            {formatDate(invoice.period_end, 'MM/DD/YYYY')}
          </LabelValue>
          <LabelValue label="Payment Method">
            {invoice.payment_methods[0].brand} ending in{' '}
            {invoice.payment_methods[0].last4}
          </LabelValue>
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={5}>
          <LabelValue label="Statement Date">
            {formatDate(invoice.period_end, 'MM/DD/YYYY')}
          </LabelValue>
          <LabelValue label="Statement #">{invoice.id}</LabelValue>
          <LabelValue label="Billing Period">
            {formatDate(invoice.period_start, 'MM/DD/YYYY')} –
            {formatDate(invoice.period_end, 'MM/DD/YYYY')}
          </LabelValue>
        </Grid>
      </Grid>
      <Box mt={80} mb={20}>
        <Typography variant="heading-2">Summary</Typography>
        <HorizontalDivider />
      </Box>

      {!!items.length && (
        <React.Fragment>
          <Grid container spacing={24}>
            <Grid item xs={5}>
              <FieldLabel>Description</FieldLabel>
            </Grid>
            <Grid item xs={3} container justify="flex-end">
              <FieldLabel>Unit Price</FieldLabel>
            </Grid>
            <Grid item xs={2} container justify="flex-end">
              <FieldLabel>Quantity</FieldLabel>
            </Grid>
            <Grid item xs={2} container justify="flex-end">
              <FieldLabel>Amount</FieldLabel>
            </Grid>
          </Grid>
          {items.map(invoiceItem => (
            <Grid key={`invoice-item-${invoiceItem.id}`} container spacing={24}>
              <Grid item xs={5}>
                <Typography variant="paragraph">
                  {renderDescription(invoiceItem)}
                </Typography>
              </Grid>
              <Grid item xs={3} container justify="flex-end">
                <Typography variant="paragraph">
                  {formatAsDollarAmount(
                    guardedDivide(invoiceItem.amount, invoiceItem.quantity)
                  )}
                </Typography>
              </Grid>
              <Grid item xs={2} container justify="flex-end">
                <Typography variant="paragraph">
                  {invoiceItem.quantity}
                </Typography>
              </Grid>
              <Grid item xs={2} container justify="flex-end">
                <Typography variant="paragraph">
                  {formatAsDollarAmount(invoiceItem.amount)}
                </Typography>
              </Grid>
            </Grid>
          ))}
          <Subtotal items={items} />
        </React.Fragment>
      )}

      {!!proRatedItems.length && (
        <React.Fragment>
          <Box mt={50}>
            <Grid container spacing={24}>
              <Grid item xs={5}>
                <FieldLabel>Description</FieldLabel>
              </Grid>
              <Grid item xs={3} container justify="flex-end">
                <FieldLabel>Price Per User Day</FieldLabel>
              </Grid>
              <Grid item xs={2} container justify="flex-end">
                <FieldLabel>User Days</FieldLabel>
              </Grid>
              <Grid item xs={2} container justify="flex-end">
                <FieldLabel>Amount</FieldLabel>
              </Grid>
            </Grid>
          </Box>
          <Box my={10}>
            <Typography variant="paragraph">
              {subscription.plan.name} - prorated user days
            </Typography>
          </Box>
          {sortBy(proRatedItems, x => new Date(x.period_start).getTime()).map(
            invoiceItem => (
              <Grid
                key={`invoice-item-${invoiceItem.id}`}
                container
                spacing={24}
              >
                <Grid item xs={6}>
                  <Typography variant="paragraph">
                    <Box ml={15}>{invoiceItem.description}</Box>
                  </Typography>
                </Grid>
                <Grid item xs={2} container justify="flex-end">
                  <Typography variant="paragraph">
                    {formatAsDollarAmount(invoiceItem.unit_amount)}
                  </Typography>
                </Grid>
                <Grid item xs={2} container justify="flex-end">
                  <Typography variant="paragraph">
                    {invoiceItem.quantity}
                  </Typography>
                </Grid>
                <Grid item xs={2} container justify="flex-end">
                  <Typography variant="paragraph">
                    {formatAsDollarAmount(invoiceItem.amount)}
                  </Typography>
                </Grid>
              </Grid>
            )
          )}
          <Subtotal items={proRatedItems} />
        </React.Fragment>
      )}

      <Box mt={50}>
        <Grid container spacing={24}>
          <Grid item xs={10}>
            <FieldLabel>Total</FieldLabel>
          </Grid>
          <Grid item xs={2} container justify="flex-end">
            <Typography variant="paragraph">
              <strong>{formatAsDollarAmount(invoice.subtotal)}</strong>
            </Typography>
          </Grid>
        </Grid>
        {coupon && <CouponLine coupon={coupon} invoice={invoice} />}
        <HorizontalDivider color={colors.black} />
        <Grid container spacing={24} alignItems="flex-end">
          <Grid item xs={10} container justify="flex-end">
            <Typography variant="heading-2">Amount Due</Typography>
          </Grid>
          <Grid item xs={2} container justify="flex-end">
            <Typography variant="paragraph">
              <strong>{formatAsDollarAmount(invoice.amount)}</strong>
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt={80}>
        <Typography variant="instructional">
          You can cancel at any time by accessing your Account Settings or by
          contacting us at productsupport@ideo.com. If you cancel, you still may
          be charged for the current billing period.
        </Typography>
      </Box>
    </Wrapper>
  )
}

export default PrintableInvoice
