import * as React from 'react'
import { ClickAwayListener, Grow, Paper, Popper } from '@material-ui/core'

export interface RenderMenu {
  closeMenu: () => void
}
interface ChildrenOptions {
  showMenu: () => void
  targetRef: (ref: HTMLElement) => void
  open: boolean
}

interface Props {
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top'
  children: (childrenOptions: ChildrenOptions) => React.ReactNode
  renderMenu: (renderOptions: RenderMenu) => React.ReactNode[] | React.ReactNode
}

interface State {
  open: boolean
}

class Dropdown extends React.Component<Props, State> {
  state = {
    open: false,
  }

  anchorEl = null as HTMLElement | null

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }))
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state
    const { children, renderMenu, placement } = this.props
    return (
      <React.Fragment>
        {children({
          showMenu: this.handleToggle,
          targetRef: node => (this.anchorEl = node),
          open,
        })}
        <Popper
          style={{ zIndex: 1000000 }}
          open={open}
          anchorEl={this.anchorEl}
          placement={placement}
        >
          {() => (
            <Grow in={open} style={{ transformOrigin: '0 0 0' }}>
              <ClickAwayListener onClickAway={this.handleClose}>
                <Paper>{renderMenu({ closeMenu: this.handleClose })}</Paper>
              </ClickAwayListener>
            </Grow>
          )}
        </Popper>
      </React.Fragment>
    )
  }
}

export default Dropdown
