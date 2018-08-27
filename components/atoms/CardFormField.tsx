import { Grid, Tooltip } from "@material-ui/core";
import * as React from "react";
import HelpIcon from "~shared/images/icon-questionmark.svg";
import Box from "~shared/components/atoms/Box";
import FieldError from "~shared/components/atoms/FieldError";
import FieldLabel from "~shared/components/atoms/FieldLabel";
import HorizontalDivider from "~shared/components/atoms/HorizontalDivider";
import { colors } from "~styles";
import { pxToRem } from "~styles/utils";

interface Props {
  label: string;
  hr?: boolean;
  tooltip?: string;
  error?: string;
}

const CardFormField: React.SFC<Props> = ({
  label,
  hr,
  tooltip,
  error,
  children
}) => (
  <Box mb={5}>
    <Box mb={10}>
      <FieldLabel>
        <Box mb={10}>
          {tooltip ? (
            <Grid container alignItems="center" spacing={16}>
              <Grid item>{label}</Grid>
              <Grid item>
                <Tooltip title={tooltip} placement="top">
                  <HelpIcon
                    style={{ fill: colors.grayBoulder }}
                    height={11}
                    width={11}
                  />
                </Tooltip>
              </Grid>
            </Grid>
          ) : (
            label
          )}
        </Box>
        {children}
      </FieldLabel>
    </Box>
    {hr && <HorizontalDivider height={pxToRem(1)} color={colors.black} />}
    {error && <FieldError>{error}</FieldError>}
  </Box>
);

export default CardFormField;
