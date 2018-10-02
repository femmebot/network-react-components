import BaseModel from '~shared/api.network.v1/BaseModel'
import { prop } from 'datx'
import { apiUrl } from '~shared/api.network.v1/util'

export class NetworkOrganization extends BaseModel {
  public static type = 'organizations'

  public static baseUrl = apiUrl('organizations')

  @prop.identifier
  public id: number

  @prop
  public name: string

  @prop
  public external_id: string
}
