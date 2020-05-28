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
import {
  formatAsDollarAmount,
  formatDate,
  dateParseISO,
} from '~shared/utils/formatters'

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
    <Grid container spacing={3}>
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

const PrintableInvoice: React.SFC<Props> = ({
  organization,
  invoice,
  subscription,
  logo,
  brandTitle,
  address = defaultAddress,
}) => {
  const coupon = subscription ? subscription.coupon : null
  const paymentMethod =
    invoice.invoice_items && invoice.invoice_items[0].payment_method
  const [proRatedItems, items] = partition(invoice.invoice_items, 'prorated')
  return (
    <Wrapper>
      <Center mb={40}>
        <Typography variant="h2">Billing Statement</Typography>
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
            {formatDate(dateParseISO(invoice.period_end), 'MM/dd/yyyy')}
          </LabelValue>
          {paymentMethod && (
            <LabelValue label="Payment Method">
              {paymentMethod.brand} ending in {paymentMethod.last4}
            </LabelValue>
          )}
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={5}>
          <LabelValue label="Statement Date">
            {formatDate(dateParseISO(invoice.period_end), 'MM/dd/yyyy')}
          </LabelValue>
          <LabelValue label="Statement #">{invoice.id}</LabelValue>
          <LabelValue label="Billing Period">
            {formatDate(dateParseISO(invoice.period_start), 'MM/dd/yyyy')} –
            {formatDate(dateParseISO(invoice.period_end), 'MM/dd/yyyy')}
          </LabelValue>
        </Grid>
      </Grid>
      <Box mt={80} mb={20}>
        <Typography variant="h2">Summary</Typography>
        <HorizontalDivider />
      </Box>

      {!!items.length && (
        <React.Fragment>
          <Grid container spacing={3}>
            <Grid item xs={5}>
              <FieldLabel>Description</FieldLabel>
            </Grid>
            <Grid item xs={3} container justify="flex-end">
              <FieldLabel>Unit Price</FieldLabel>
            </Grid>
            <Grid item xs={2} container justify="flex-end">
              <FieldLabel>Quantity</FieldLabel>
            </Grid>
            <Grid
              item
              xs={2}
              container
              justify="flex-end"
              style={{ textAlign: 'right' }}
            >
              <FieldLabel>Amount</FieldLabel>
            </Grid>
          </Grid>
          {items.map(invoiceItem => (
            <Grid key={`invoice-item-${invoiceItem.id}`} container spacing={3}>
              <Grid item xs={5}>
                <Typography variant="paragraph">
                  {invoiceItem.description}
                </Typography>
              </Grid>
              <Grid item xs={3} container justify="flex-end">
                {invoiceItem.quantity && (
                  <Typography variant="paragraph">
                    {formatAsDollarAmount(
                      guardedDivide(invoiceItem.amount, invoiceItem.quantity)
                    )}
                  </Typography>
                )}
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
            <Grid container spacing={3}>
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
                spacing={3}
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
        <Grid container spacing={3}>
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
        <Grid container spacing={3} alignItems="flex-end">
          <Grid item xs={10} container justify="flex-end">
            <Typography variant="h2">Amount Due</Typography>
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
