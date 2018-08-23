import {Model, prop} from 'datx'
import {jsonapi} from 'datx-jsonapi'
import {InvoiceItem} from '~api.nt.v1/InvoiceItem'
import {PaymentMethod} from '~api.nt.v1/PaymentMethod'
import {DateTimeString, InvoiceId} from '~data'

export class Invoice extends jsonapi(Model) {
  public static type = 'invoices'

  @prop.identifier public id: InvoiceId
  @prop public period_start: DateTimeString
  @prop public period_end: DateTimeString
  @prop public status: 'paid' | 'unpaid'
  @prop public amount: number

  @prop.toMany(InvoiceItem) invoice_items: InvoiceItem[]
  @prop.toMany(PaymentMethod) payment_methods: PaymentMethod[]
}
