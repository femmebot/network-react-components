import BaseModel from '~shared/api.network.v1/BaseModel'
import { prop } from 'datx'
import { DateTimeString, PaymentMethodId } from '~shared/data'
import { Brand } from '~shared/api.network.v1'
import { apiUrl } from '~shared/api.network.v1/util'

export class PaymentMethod extends BaseModel {
  public static type = 'payment_methods'

  public static endpoint = apiUrl('payment_methods')

  @prop.identifier
  public id: PaymentMethodId

  @prop
  public brand: Brand

  @prop
  public created_at: DateTimeString

  @prop
  public exp_month: number

  @prop
  public exp_year: number

  @prop
  public last4: string

  @prop
  public default: boolean

  @prop
  public expired: boolean

  @prop
  public address_city: string

  @prop
  public address_country: string

  @prop
  public address_line1: string

  @prop
  public address_line2: string

  @prop
  public address_state: string

  @prop
  public address_zip: string

  @prop
  public payment_type: string
}
