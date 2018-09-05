import { Model, prop } from 'datx';
import { jsonapi } from 'datx-jsonapi';
import { PlanId } from '~shared/data';

export class Plan extends jsonapi(Model) {
  public static type = 'plans';

  @prop.identifier
  public id: PlanId;

  @prop
  public name: string;
}
