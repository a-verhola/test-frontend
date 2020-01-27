import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  age: DS.attr('number'),
  name: DS.attr('string'),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export function defineNamespace(modelClass) {
  modelClass.reopenClass({
    namespace: 'IIS.Test',
  });
}

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('CatE', 'i-i-s-test-cat', {
    name: Projection.attr('Name', { index: 0 }),
    age: Projection.attr('', { index: 1 })
  });
  modelClass.defineProjection('CatL', 'i-i-s-test-cat', {
    name: Projection.attr('Name', { index: 0 }),
    age: Projection.attr('', { index: 1 })
  });
};
