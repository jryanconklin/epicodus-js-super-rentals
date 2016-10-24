import Ember from 'ember';

//Dummy Data Exists Here, In Our Hearts

export default Ember.Route.extend({

//Include Commas on the exported route, it is an object.
  model() {
    return this.store.findAll('rental');
  },
});
