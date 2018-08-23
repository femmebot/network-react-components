import {Model, prop} from 'datx'
import {jsonapi} from 'datx-jsonapi'
import {DateTimeString, InvoiceItemId} from '~data'

export class InvoiceItem extends jsonapi(Model) {
  public static type = 'invoice_items'

  @prop.identifier public id: InvoiceItemId
  @prop public description: string
  @prop public quantity: number
  @prop public amount: number
  @prop public unit_amount: number
  @prop public period_start: DateTimeString
  @prop public period_end: DateTimeString
  @prop public prorated: boolean
}
