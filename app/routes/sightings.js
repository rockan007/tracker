import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let record0 = this.store.createRecord('sighting', {
      location: 'Atlanta',
      sightedAt: new Date('2017-02-23')
    })
    let record1 = this.store.createRecord('sighting', {
      location: 'Banama',
      sightedAt: new Date('2018-05-16')
    })
    let record2 = this.store.createRecord('sighting', {
      location: 'Canada',
      sightedAt: new Date('2018-06-12')
    })
    return [record0, record1, record2];
  }
});
