import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [
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
    ];
  }
});
