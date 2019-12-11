export type CouponId = number;
export type DateTimeString = string;
export type Id = string | number;
export type InvoiceId = number;
export type InvoiceItemId = number;
export type PlanId = number;
export type PaymentMethodId = number;
export type SubscriptionId = number;
export type NetworkOrganizationId = number;
export interface FormOption {
  value: string;
  label: string;
}

export type ObjectifiableFormOption = FormOption | string;
