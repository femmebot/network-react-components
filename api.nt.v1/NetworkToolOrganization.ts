import {Model, prop} from 'datx'
import {jsonapi} from 'datx-jsonapi'

export class NetworkToolOrganization extends jsonapi(Model) {
  public static type = 'organizations'

  @prop.identifier public id: number

  @prop public name: string

  @prop public external_id: string
}
