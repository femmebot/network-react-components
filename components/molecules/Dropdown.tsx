import {ClickAwayListener, Grow, Paper} from '@material-ui/core'
import * as PopperJS from 'popper.js'
import * as React from 'react'
import {Manager, Popper, Target} from 'react-popper'

export interface RenderMenu {
  closeMenu: () => void
}
interface ChildrenOptions {
  showMenu: () => void
  targetRef: (ref: HTMLElement) => void
  open: boolean
}

interface Props {
  placement?: PopperJS.Placement
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

  handleToggle = () => {
    this.setState({open: !this.state.open})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render() {
    const {children, renderMenu, placement} = this.props
    const {open} = this.state

    return (
      <Manager tag={false}>
        <Target>
          {({targetProps: {ref}}) =>
            children({showMenu: this.handleToggle, targetRef: ref, open})
          }
        </Target>
        {open && (
          <Popper
            style={{zIndex: 1}}
            placement={placement || 'bottom-start'}
            eventsEnabled={open}
          >
            <ClickAwayListener onClickAway={this.handleClose}>
              <Grow in={open} style={{transformOrigin: '0 0 0'}}>
                <Paper>{renderMenu({closeMenu: this.handleClose})}</Paper>
              </Grow>
            </ClickAwayListener>
          </Popper>
        )}
      </Manager>
    )
  }
}
export default Dropdown
