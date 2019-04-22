import BaseModel from '~shared/api.network.v1/BaseModel'
import { prop } from 'datx'
import { PlanId } from '~shared/data'
import { apiUrl } from '~shared/api.network.v1/util'

export class Plan extends BaseModel {
  public static type = 'plans'

  public static endpoint = apiUrl('plans')

  @prop.identifier
  public id: PlanId

  @prop
  public name: string
}
