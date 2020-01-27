import { Model as CatMixin, defineNamespace, defineProjections } from
  '../mixins/regenerated/models/i-i-s-test-cat';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, CatMixin, {

});

defineNamespace(Model);
defineProjections(Model);
export default Model;
