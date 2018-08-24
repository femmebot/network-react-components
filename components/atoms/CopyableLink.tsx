import * as React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import LinkIcon from '~images/icon-link.svg'
import Button from '~shared/components/atoms/Button'

interface Props {
  href: string
  linkCopiedText?: string
  showLinkCopied?: boolean
  showDuration?: number
}

interface State {
  copied: boolean
}

class CopyableLink extends React.Component<Props, State> {
  static defaultProps = {
    linkCopiedText: 'Link Copied',
    showLinkCopied: true,
    showDuration: 8000,
  }

  changeCopyTimeout: null | number = null

  state = {
    copied: false,
  }

  onCopy = () => {
    this.setState({copied: true})
    this.changeCopyTimeout = setTimeout(
      () => this.setState({copied: false}),
      this.props.showDuration
    )
  }

  componentWillUnmount() {
    this.changeCopyTimeout && clearTimeout(this.changeCopyTimeout)
  }

  render() {
    return (
      <CopyToClipboard text={this.props.href} onCopy={this.onCopy}>
        <Button disabled={this.state.copied}>
          <LinkIcon height="14" />
          {this.props.showLinkCopied
            ? this.state.copied
              ? this.props.linkCopiedText
              : this.props.children
            : this.props.children}
        </Button>
      </CopyToClipboard>
    )
  }
}

export default CopyableLink
