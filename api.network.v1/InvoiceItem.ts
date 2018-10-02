import BaseModel from '~shared/api.network.v1/BaseModel'
import { prop } from 'datx'
import { DateTimeString, InvoiceItemId } from '~shared/data'
import { apiUrl } from '~shared/api.network.v1/util'

export class InvoiceItem extends BaseModel {
  public static type = 'invoice_items'

  public static endpoint = apiUrl('invoice_items')

  @prop.identifier
  public id: InvoiceItemId
  @prop
  public description: string
  @prop
  public quantity: number
  @prop
  public amount: number
  @prop
  public unit_amount: number
  @prop
  public period_start: DateTimeString
  @prop
  public period_end: DateTimeString
  @prop
  public prorated: boolean
}
