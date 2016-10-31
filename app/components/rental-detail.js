import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['rating:desc'],
  sortedReviews: Ember.computed.sort('rental.reviews', 'sortBy'),

  actions: {
    delete(rental) {
      if (confirm('Are you sure???')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
