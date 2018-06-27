import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return [
            {
                id:0,
                location:'Asilomar',
                sightedAt:new Date('2017-03-07')
            },{
                id:1,
                location:'Asilomar',
                sightedAt:new Date('2017-03-08')
            },{
                id:2,
                location:'Asilomar',
                sightedAt:new Date('2017-05-04')
            },{
                id:3,
                location:'Asilomar',
                sightedAt:new Date('2017-05-06')
            },{
                id:4,
                location:'Asilomar',
                sightedAt:new Date('2017-05-10')
            },{
                id:5,
                location:'Asilomar',
                sightedAt:new Date('2017-05-20')
            },{
                id:6,
                location:'Asilomar',
                sightedAt:new Date('2017-08-16')
            }
        ]
    }
});
