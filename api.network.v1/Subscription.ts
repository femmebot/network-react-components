import {Model, prop} from 'datx'
import {jsonapi} from 'datx-jsonapi'
import {
  CouponId,
  DateTimeString,
  PaymentMethodId,
  PlanId,
  SubscriptionId,
} from '~shared/data'
import {Coupon, PaymentMethod, Plan} from '~shared/api.network.v1'

export class Subscription extends jsonapi(Model) {
  public static type = 'subscriptions'

  @prop.identifier public id: SubscriptionId

  @prop public created_at: DateTimeString

  @prop public plan_id: PlanId

  @prop public payment_method_id: PaymentMethodId

  @prop public coupon_id?: CouponId

  @prop public quantity: number

  @prop public prorate: boolean

  @prop.toOne(PaymentMethod) payment_method: PaymentMethod

  @prop.toOne(Plan) plan: Plan

  @prop.toOne(Coupon) coupon: Coupon
}
