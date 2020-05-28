import { Grid } from '@material-ui/core'
import * as React from 'react'
import styled from 'styled-components'
import DownloadIcon from '~shared/images/icon-download.svg'
import { Invoice } from '~shared/api.network.v1'
import Typography from '~shared/components/atoms/Typography'
import FieldLabel from '~shared/components/atoms/FieldLabel'
import Section from '~shared/components/molecules/Section'
import {
  formatAsDollarAmount,
  formatDate,
  dateParseISO,
} from '~shared/utils/formatters'
import { colors } from '~shared/styles'

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`

const StyledStatus = styled.span`
  color: ${({ children }: { children: string }) =>
    children === 'Pending'
      ? colors.silver
      : children === 'Failed'
      ? colors.error
      : 'inherit'};
`

interface Props {
  invoices: Invoice[]
  NoInvoicesComponent?: React.ComponentType
}

const Invoices: React.SFC<Props> = ({ invoices, NoInvoicesComponent }) => (
  <Section title="Billing Statements">
    {invoices.length > 0 ? (
      <React.Fragment>
        <Grid container spacing={5}>
          <Grid item xs={5}>
            <FieldLabel>Period</FieldLabel>
          </Grid>
          <Grid item xs={3}>
            <FieldLabel>Total</FieldLabel>
          </Grid>
          <Grid item xs={3}>
            <FieldLabel>Status</FieldLabel>
          </Grid>
          <Grid item xs={1} />
        </Grid>
        {invoices.map(invoice => (
          <Typography variant="paragraph" key={`invoice-${invoice.id}`}>
            <Grid container spacing={5}>
              <Grid item xs={5}>
                {formatDate(dateParseISO(invoice.period_start), 'MM/dd/yyyy')}–
                {formatDate(dateParseISO(invoice.period_end), 'MM/dd/yyyy')}
              </Grid>
              <Grid item xs={3}>
                {formatAsDollarAmount(invoice.amount)}
              </Grid>
              <Grid item xs={3}>
                <StyledStatus>
                  {invoice.status === 'paid'
                    ? 'Paid'
                    : invoice.status === 'unpaid'
                    ? 'In-Progress'
                    : 'Failed'}
                </StyledStatus>
              </Grid>
              <Grid item xs={1}>
                <Link href={`/print/invoices/${invoice.id}`} target="_blank">
                  <DownloadIcon height={16} />
                </Link>
              </Grid>
            </Grid>
          </Typography>
        ))}
      </React.Fragment>
    ) : NoInvoicesComponent ? (
      <NoInvoicesComponent />
    ) : null}
  </Section>
)

export default Invoices
