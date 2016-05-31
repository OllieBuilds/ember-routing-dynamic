import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return[
      {
        id: 1,
        name: 'Jim Bob'
      },
      {
        id: 2,
        name: 'Steve Stevens'
      },
      {
        id: 3,
        name: 'Dick Robertson'
      }
    ][params.product_id - 1];
  }
});
