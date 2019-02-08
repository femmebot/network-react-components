import BaseModel from '~shared/api.network.v1/BaseModel';
import { prop } from 'datx';
import { CouponId, DateTimeString } from '~shared/data';
import { apiUrl } from '~shared/api.network.v1/util';

export class Coupon extends BaseModel {
  public static type = 'coupons';

  public static endpoint = apiUrl('coupons');

  @prop.identifier
  public id: CouponId;

  @prop
  public code: string;

  @prop
  public name: string;

  @prop
  public amount_off: number;

  @prop
  public percent_off: number;

  @prop
  public currency: string;

  @prop
  public expires_at: DateTimeString;
}
