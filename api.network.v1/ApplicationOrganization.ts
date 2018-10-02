import BaseModel from '~shared/api.network.v1/BaseModel'
import { prop } from 'datx'
import { apiUrl } from '~shared/api.network.v1/util'

export class ApplicationOrganization extends BaseModel {
  public static type = 'application_organizations'

  public static endpoint = apiUrl('application_organizations')

  @prop.identifier
  public id: number

  @prop
  public organization_id: string

  @prop
  public external_id: string
}
