import * as React from 'react'
import * as colors from '~shared/styles/constants/color'
import AmexIcon from '~shared/images/icon-card-amex.svg'
import DiscoverIcon from '~shared/images/icon-card-discover.svg'
import MastercardIcon from '~shared/images/icon-card-mastercard.svg'
import PaypalIcon from '~shared/images/icon-card-paypal.svg'
import PlaceholderIcon from '~shared/images/icon-card-placeholder.svg'
import VisaIcon from '~shared/images/icon-card-visa.svg'
import { Brand } from '~shared/api.network.v1'

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
        <AmexIcon
          height={height}
          width={width}
          style={{ fill: colors.black }}
        />
      )
    case Brand.Discover:
      return (
        <DiscoverIcon
          height={height}
          width={width}
          style={{ fill: colors.black }}
        />
      )
    case Brand.MasterCard:
      return (
        <MastercardIcon
          height={height}
          width={width}
          style={{ fill: colors.black }}
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
