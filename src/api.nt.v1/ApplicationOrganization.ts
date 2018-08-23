import {Model, prop} from 'datx'
import {jsonapi} from 'datx-jsonapi'

export class ApplicationOrganization extends jsonapi(Model) {
  public static type = 'application_organization'

  @prop.identifier public id: number

  @prop public organization_id: string

  @prop public external_id: string
}
