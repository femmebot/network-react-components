import { Model, prop } from "datx";
import { jsonapi } from "datx-jsonapi";
import {
  DateTimeString,
  PaymentMethodId,
  PlanId,
  SubscriptionId
} from "~shared/data";
import { PaymentMethod, Plan } from "~shared/api.nt.v1";

export class Subscription extends jsonapi(Model) {
  public static type = "subscriptions";

  @prop.identifier
  public id: SubscriptionId;

  @prop
  public created_at: DateTimeString;

  @prop
  public plan_id: PlanId;

  @prop
  public payment_method_id: PaymentMethodId;

  @prop
  public quantity: number;

  @prop
  public prorate: boolean;

  @prop.toOne(PaymentMethod)
  payment_method: PaymentMethod;

  @prop.toOne(Plan)
  plan: Plan;
}
