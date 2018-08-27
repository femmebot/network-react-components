import { Grid } from "@material-ui/core";
import * as React from "react";
import styled from "styled-components";
import DownloadIcon from "~shared/images/icon-download.svg";
import { Invoice } from "~shared/api.nt.v1";
import Typography from "~shared/components/atoms/Typography";
import Section from "~shared/components/molecules/Section";
import { formatAsDollarAmount, formatDate } from "~shared/utils/formatters";
import { colors } from "~shared/styles";

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const StyledStatus = styled.span`
  color: ${({ children }: { children: string }) =>
    children === "Pending"
      ? colors.silver
      : children === "Failed"
        ? colors.error
        : "inherit"};
`;

interface Props {
  invoices: Invoice[];
}

const Invoices: React.SFC<Props> = ({ invoices }) => (
  <Section title="Billing Statements">
    <Grid container spacing={40}>
      <Grid item xs={5}>
        <Typography variant="label">Period</Typography>{" "}
      </Grid>
      <Grid item xs={3}>
        <Typography variant="label">Total</Typography>{" "}
      </Grid>
      <Grid item xs={3}>
        <Typography variant="label">Status</Typography>{" "}
      </Grid>
      <Grid item xs={1} />
    </Grid>
    {invoices.map(invoice => (
      <Typography variant="paragraph" key={`invoice-${invoice.id}`}>
        <Grid container spacing={40}>
          <Grid item xs={5}>
            {formatDate(invoice.period_start, "MM/DD/YYYY")}–
            {formatDate(invoice.period_end, "MM/DD/YYYY")}
          </Grid>
          <Grid item xs={3}>
            {formatAsDollarAmount(invoice.amount)}
          </Grid>
          <Grid item xs={3}>
            <StyledStatus>
              {invoice.status === "paid"
                ? "Paid"
                : invoice.status === "unpaid"
                  ? "Pending"
                  : "Failed"}
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
  </Section>
);

export default Invoices;
