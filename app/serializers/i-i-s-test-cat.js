import { Serializer as CatSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test-cat';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(CatSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
