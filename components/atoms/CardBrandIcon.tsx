import * as React from 'react'
import * as colors from '~/styles/constants/color'
import {Brand} from '~api.nt.v1'
import AmexIcon from '~images/icon-card-amex.svg'
import DiscoverIcon from '~images/icon-card-discover.svg'
import MastercardIcon from '~images/icon-card-mastercard.svg'
import PaypalIcon from '~images/icon-card-paypal.svg'
import PlaceholderIcon from '~images/icon-card-placeholder.svg'
import VisaIcon from '~images/icon-card-visa.svg'

interface Props {
  brand: Brand
  width?: number
  height?: number
}

const resolveIconForBrand = (props: Props) => {
  const height = props.height || 25
  const width = props.width || 29

  switch (props.brand) {
    case Brand.Amex:
      return (
        <AmexIcon height={height} width={width} style={{fill: colors.black}} />
      )
    case Brand.Discover:
      return (
        <DiscoverIcon
          height={height}
          width={width}
          style={{fill: colors.black}}
        />
      )
    case Brand.MasterCard:
      return (
        <MastercardIcon
          height={height}
          width={width}
          style={{fill: colors.black}}
        />
      )
    case Brand.Visa:
      return <VisaIcon height={height} width={width} color={colors.black} />
    case Brand.Paypal:
      return <PaypalIcon height={height} width={width} color={colors.black} />
  }

  return (
    <PlaceholderIcon height={height} width={width} color={colors.grayBoulder} />
  )
}

const CardBrandIcon: React.SFC<Props> = resolveIconForBrand

export default CardBrandIcon
