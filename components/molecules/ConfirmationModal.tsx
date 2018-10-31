import { Paper } from '@material-ui/core'
import * as React from 'react'
import styled from 'styled-components'

import CloseIcon from '~shared/images/icon-close.svg'
import Box from '~shared/components/atoms/Box'
import Button from '~shared/components/atoms/Button'
import Flex from '~shared/components/atoms/Flex'
import IconButton from '~shared/components/atoms/IconButton'
import Typography from '~shared/components/atoms/Typography'
import Modal, { Props as ModalProps } from '~shared/components/molecules/Modal'
import { colors } from '~shared/styles/index'
import { pxToRem } from '~shared/styles/utils'

interface Props extends Pick<ModalProps, 'trigger' | 'open' | 'onClose'> {
  onConfirmed: (closeModal: () => void) => void
  buttonText: React.ReactText
  icon?: React.ReactType
  trigger?: React.ReactNode
}

const ContentWrapper = styled(Paper)`
  && {
    width: ${pxToRem(380)};
    max-width: ${pxToRem(800)};
    background: ${colors.ctaPrimary};
    outline: none;
  }
`

class ConfirmationModal extends React.Component<Props> {
  render() {
    const {
      children,
      buttonText,
      icon: Icon,
      onConfirmed,
      ...modalProps
    } = this.props
    return (
      <Modal {...modalProps} container={ContentWrapper}>
        {closeModal => (
          <React.Fragment>
            <Flex p={16} justifyContent="flex-end">
              <IconButton onClick={closeModal}>
                <CloseIcon width="16px" height="16" />
              </IconButton>
            </Flex>
            <Flex pb={16} px={32} flexDirection="column">
              {Icon && (
                <Flex justifyContent="center" mb={32}>
                  <Icon height="45" />
                </Flex>
              )}
              <Box mb={32}>
                <Typography align="center">{children}</Typography>
              </Box>
              <Flex justifyContent="space-between">
                <Button onClick={closeModal}>Cancel</Button>
                <Button onClick={() => onConfirmed(closeModal)}>
                  {buttonText}
                </Button>
              </Flex>
            </Flex>
          </React.Fragment>
        )}
      </Modal>
    )
  }
}

export default ConfirmationModal
