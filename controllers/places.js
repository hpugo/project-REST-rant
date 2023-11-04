const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/', (req, res) => {
    let places = [{
        name: 'Canes',
        city: 'Chicago',
        state: 'IL',
        cuisine: 'Chicken Tenders',
        pic: '/images/canes.jpeg'
    }, {
        name: 'Taco Max',
        city: 'Chicago',
        state: 'IL',
        cuisine: 'Mexican',
        pic: 'http://placekitten.com/250/250'
    },{
        name: 'Happy China',
        city: 'Chicago',
        state: 'IL',
        cuisine: 'asian',
        pic: 'http://placekitten.com/250/250'
    }]
    res.render('places/index', {places})
})
module.exports = router
