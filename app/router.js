import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test-cat-l');
  this.route('i-i-s-test-cat-e',
  { path: 'i-i-s-test-cat-e/:id' });
  this.route('i-i-s-test-cat-e.new',
  { path: 'i-i-s-test-cat-e/new' });
});

export default Router;
