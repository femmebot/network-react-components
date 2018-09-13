import {Model, prop} from 'datx'
import {jsonapi} from 'datx-jsonapi'
import {CouponId, DateTimeString} from '~shared/data'

export class Coupon extends jsonapi(Model) {
  public static type = 'coupons'

  @prop.identifier public id: CouponId

  @prop public code: string

  @prop public name: string

  @prop public amount_off: number

  @prop public percent_off: number

  @prop public currency: string

  @prop public expires_at: DateTimeString
}
