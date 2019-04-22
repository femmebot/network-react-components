import BaseModel from '~shared/api.network.v1/BaseModel'
import { prop } from 'datx'
import { apiUrl } from '~shared/api.network.v1/util'
import { NetworkOrganizationId } from '~shared/data'

export class NetworkOrganization extends BaseModel {
  public static type = 'organizations'

  public static endpoint = apiUrl('organizations')

  @prop.identifier
  public id: NetworkOrganizationId

  @prop
  public name: string

  @prop
  public external_id: string
}
