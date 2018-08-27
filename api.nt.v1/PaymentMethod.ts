import { Model, prop } from "datx";
import { jsonapi } from "datx-jsonapi";
import { DateTimeString, PaymentMethodId } from "~shared/data";
import { Brand } from "~shared/api.nt.v1";

export class PaymentMethod extends jsonapi(Model) {
  public static type = "payment_methods";

  @prop.identifier
  public id: PaymentMethodId;

  @prop
  public brand: Brand;

  @prop
  public created_at: DateTimeString;

  @prop
  public exp_month: number;

  @prop
  public exp_year: number;

  @prop
  public last4: string;

  @prop
  public default: boolean;

  @prop
  public expired: boolean;

  @prop
  public address_city: string;

  @prop
  public address_country: string;

  @prop
  public address_line1: string;

  @prop
  public address_line2: string;

  @prop
  public address_state: string;

  @prop
  public address_zip: string;

  @prop
  public payment_type: string;
}
