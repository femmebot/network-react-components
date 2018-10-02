import BaseModel from '~shared/api.network.v1/BaseModel'
import { prop } from 'datx'
import { DateTimeString, InvoiceId } from '~shared/data'
import { InvoiceItem } from '~shared/api.network.v1/InvoiceItem'
import { PaymentMethod } from '~shared/api.network.v1/PaymentMethod'
import { apiUrl } from '~shared/api.network.v1/util'

export class Invoice extends BaseModel {
  public static type = 'invoices'

  public static baseUrl = apiUrl('invoices')

  @prop.identifier
  public id: InvoiceId
  @prop
  public period_start: DateTimeString
  @prop
  public period_end: DateTimeString
  @prop
  public status: 'paid' | 'unpaid'
  @prop
  public amount: number
  @prop
  public subtotal: number

  @prop.toMany(InvoiceItem)
  invoice_items: InvoiceItem[]
  @prop.toMany(PaymentMethod)
  payment_methods: PaymentMethod[]
}
