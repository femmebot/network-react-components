import * as React from 'react'

import Button, { ButtonProps } from '~shared/components/atoms/Button'

interface Props extends ButtonProps {
  onClick: (event: any) => Promise<void>
}

interface State {
  pending: boolean
}

class PromiseButton extends React.Component<Props, State> {
  state = {
    pending: false,
  }

  mounted = false

  componentDidMount() {
    this.mounted = true
  }

  componentWillUnmount() {
    this.mounted = false
  }

  onClick = async (e: any) => {
    this.mounted && this.setState({ pending: true })
    await this.props.onClick(e)
    this.mounted && this.setState({ pending: false })
  }

  render() {
    const { onClick, disabled, ...props } = this.props

    return (
      <Button
        {...props}
        onClick={this.onClick}
        disabled={this.state.pending || disabled}
      />
    )
  }
}

export default PromiseButton
