import { Model } from 'datx';
import { jsonapi } from 'datx-jsonapi';

class BaseModel extends jsonapi(Model) {}

export default BaseModel;
