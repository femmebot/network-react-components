import MenuList from "@material-ui/core/MenuList";
import * as React from "react";
import ArchiveIcon from "~shared/images/icon-archive.svg";
import ActionIcon from "~shared/images/icon-dot-menu.svg";
import { PaymentMethod } from "~shared/api.network.v1";
import ContextMenuItem from "~shared/components/atoms/ContextMenuItem";
import IconButton from "~shared/components/atoms/IconButton";
import Typography from "~shared/components/atoms/Typography";
import UpdateCardInfoModal from "~shared/components/compounds/UpdateCardInfoModal";
import ConfirmationModal from "~shared/components/molecules/ConfirmationModal";
import Dropdown, { RenderMenu } from "~shared/components/molecules/Dropdown";
import * as colors from "~shared/styles/constants/color";

interface Props {
  paymentMethod: PaymentMethod;
  updatePaymentMethod: (paymentMethod: PaymentMethod) => Promise<void>;
  makePaymentMethodDefault: (paymentMethod: PaymentMethod) => Promise<void>;
  destroyPaymentMethod: (paymentMethod: PaymentMethod) => Promise<void>;
}

interface State {
  openUpdateCardInfo: boolean;
  openRemoveCardConfirmation: boolean;
}

class InvoiceActionMenu extends React.Component<Props, State> {
  state = {
    openUpdateCardInfo: false,
    openRemoveCardConfirmation: false
  };

  openUpdateCardInfo = (menuProps: RenderMenu) => {
    menuProps.closeMenu();
    this.setState({ openUpdateCardInfo: true });
  };

  openRemoveCardConfirmation = (menuProps: RenderMenu) => {
    menuProps.closeMenu();
    this.setState({ openRemoveCardConfirmation: true });
  };

  closeUpdateCardInfo = () => {
    this.setState({ openUpdateCardInfo: false });
  };

  makeDefaultCard = async (menuProps: RenderMenu) => {
    menuProps.closeMenu();
    await this.props.makePaymentMethodDefault(this.props.paymentMethod);
  };

  removeCardConfirmation = async () => {
    await this.props.destroyPaymentMethod(this.props.paymentMethod);
    this.setState({ openRemoveCardConfirmation: false });
  };

  closeRemoveCardConfirmation = () => {
    this.setState({ openRemoveCardConfirmation: false });
  };

  getMakeDefaultMenuItem = (menuProps: RenderMenu) => (
    <ContextMenuItem
      key="make-default"
      onClick={() => this.makeDefaultCard(menuProps)}
    >
      <Typography variant="instructional" style={{ color: colors.grayBoulder }}>
        Make default
      </Typography>
    </ContextMenuItem>
  );

  getUpdateInfoMenuItem = (menuProps: RenderMenu) => (
    <ContextMenuItem
      key="update-info"
      onClick={() => this.openUpdateCardInfo(menuProps)}
    >
      <Typography variant="instructional" style={{ color: colors.grayBoulder }}>
        Update info
      </Typography>
    </ContextMenuItem>
  );

  getRemoveMenuItem = (menuProps: RenderMenu) => (
    <ContextMenuItem
      key="remove"
      onClick={() => this.openRemoveCardConfirmation(menuProps)}
    >
      <Typography variant="instructional" style={{ color: colors.paleRed }}>
        Remove
      </Typography>
    </ContextMenuItem>
  );

  getMenuItems = (menuProps: RenderMenu) => {
    if (this.props.paymentMethod.expired) {
      return [
        this.getUpdateInfoMenuItem(menuProps),
        this.getRemoveMenuItem(menuProps)
      ];
    }

    if (this.props.paymentMethod.default) {
      return [this.getUpdateInfoMenuItem(menuProps)];
    }

    return [
      this.getMakeDefaultMenuItem(menuProps),
      this.getUpdateInfoMenuItem(menuProps),
      this.getRemoveMenuItem(menuProps)
    ];
  };

  getMenu = (menuProps: RenderMenu) => (
    <MenuList role="menu">{this.getMenuItems(menuProps)}</MenuList>
  );

  render() {
    return (
      <Dropdown renderMenu={this.getMenu}>
        {({ showMenu, targetRef }) => (
          <div
            ref={ref => {
              targetRef(ref as HTMLElement);
            }}
          >
            <ConfirmationModal
              icon={ArchiveIcon}
              buttonText="Yes, Remove"
              open={this.state.openRemoveCardConfirmation}
              onConfirmed={this.removeCardConfirmation}
              onClose={this.closeRemoveCardConfirmation}
            >
              Are you sure you want to remove this credit card from your
              account?
            </ConfirmationModal>
            <UpdateCardInfoModal
              key="updateCardInfoModal"
              updatePaymentMethod={this.props.updatePaymentMethod}
              paymentMethod={this.props.paymentMethod}
              open={this.state.openUpdateCardInfo}
              onClose={this.closeUpdateCardInfo}
            />
            <IconButton aria-haspopup="true" onClick={showMenu}>
              <ActionIcon height={16} />
            </IconButton>
          </div>
        )}
      </Dropdown>
    );
  }
}

export default InvoiceActionMenu;
