export type CouponId = Opaque<number, 'couponId'>;
export type DateTimeString = Opaque<string, 'datetime'>;
export type Id = string | number;
export type InvoiceId = Opaque<number, 'InvoiceId'>;
export type InvoiceItemId = Opaque<number, 'InvoiceItemId'>;
export type PlanId = Opaque<number, 'planId'>;
export type PaymentMethodId = Opaque<number, 'paymentMethodId'>;
export type SubscriptionId = Opaque<number, 'subscriptionId'>;
export type NetworkOrganizationId = Opaque<number, 'organizationId'>;
export interface FormOption {
  value: string;
  label: string;
}

export type ObjectifiableFormOption = FormOption | string;
