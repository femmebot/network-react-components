import * as React from "react";
import { PaymentMethod } from "~shared/api.network.v1";
import Typography from "~shared/components/atoms/Typography";
import * as colors from "~shared/styles/constants/color";

interface Props {
  paymentMethod: PaymentMethod;
}

class CardState extends React.Component<Props> {
  resolveCardStatusName = (paymentMethod: PaymentMethod) => {
    if (paymentMethod.expired) {
      return "Expired";
    }
    if (paymentMethod.default) {
      return "Default";
    }

    return "Active";
  };

  resolveCardStatusColor = (paymentMethod: PaymentMethod) => {
    if (paymentMethod.expired) {
      return colors.paleRed;
    }
    if (paymentMethod.default) {
      return colors.greenBlue;
    }

    return colors.black;
  };

  render() {
    return (
      <Typography
        style={{ color: this.resolveCardStatusColor(this.props.paymentMethod) }}
      >
        {this.resolveCardStatusName(this.props.paymentMethod)}
      </Typography>
    );
  }
}

export default CardState;
