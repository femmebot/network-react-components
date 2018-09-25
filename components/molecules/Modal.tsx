import {Grid, Modal as MUIModal, Paper} from '@material-ui/core'
import * as React from 'react'
import styled from 'styled-components'

import CloseIcon from '~shared/images/icon-close.svg'
import Box from '~shared/components/atoms/Box'
import IconButton from '~shared/components/atoms/IconButton'
import Typography from '~shared/components/atoms/Typography'
import {colors} from '~shared/styles/index'
import {pxToRem} from '~shared/styles/utils'

export interface Props {
  title?: string
  trigger?: React.ReactNode
  children: (closeModal: () => void) => React.ReactNode
  open?: boolean
  openImmediately?: boolean
  onClose?: () => void
  container?: React.ReactType
  maxWidth?: number
}

interface State {
  open: boolean
}

const ModalWrapper = styled(MUIModal)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const DefaultContainer = styled(
  ({maxWidth: _maxWidth, ...rest}: {maxWidth?: number}) => <Paper {...rest} />
)`
  padding: ${pxToRem(32)};
  margin: ${pxToRem(16)};
  width: 80vw;
  max-width: ${({maxWidth}: {maxWidth?: number}) =>
    pxToRem(maxWidth ? maxWidth : 640)};
  color: ${colors.black};
  outline: none;
`

class Modal extends React.Component<Props, State> {
  state = {
    open: false,
  }

  mounted = false

  constructor(props: Props) {
    super(props)
    if (this.props.openImmediately) this.state = {open: true}
  }

  componentDidUpdate() {
    if (
      this.props.hasOwnProperty('open') &&
      !!this.props.open !== this.state.open
    ) {
      this.setState({open: !!this.props.open})
    }
  }

  componentDidMount() {
    this.mounted = true
  }

  componentWillUnmount() {
    this.mounted = false
  }

  open = () => {
    this.mounted && this.setState({open: true})
  }

  close = () => {
    if (!this.mounted) {
      return
    }
    this.setState({open: false})
    this.props.onClose && this.props.onClose()
  }

  render() {
    const {container: Container} = this.props
    return (
      <React.Fragment>
        {this.props.trigger && (
          <div onClick={this.open}>{this.props.trigger}</div>
        )}
        <ModalWrapper open={this.state.open} onClose={this.close}>
          {Container ? (
            <Container>{this.props.children(this.close)}</Container>
          ) : (
            <DefaultContainer maxWidth={this.props.maxWidth}>
              <Grid container>
                <Grid item xs={11}>
                  <Box mb={16}>
                    <Typography variant="heading-2">
                      {this.props.title}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Typography align="right">
                    <IconButton onClick={this.close}>
                      <CloseIcon width="16px" height="16px" />
                    </IconButton>
                  </Typography>
                </Grid>
              </Grid>
              {this.props.children(this.close)}
            </DefaultContainer>
          )}
        </ModalWrapper>
      </React.Fragment>
    )
  }
}

export default Modal
