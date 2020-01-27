import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test-cat', 'Unit | Model | i-i-s-test-cat', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-test-cat'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
