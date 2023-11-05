const router = require('express').Router()
const places = require('../models/places.js')


router.get ('/', (req,res) => {
    res.render('places/index', {places})
})
router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else {
        res.render('places/show', {place: places[id],id})
    }
})

router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      places.splice(id, 1)
      res.redirect('/places')
    }
  })
  


router.post ('/new', (req, res) => {
    res.send('POST /places')
})

// router.get('/', (req, res) => {
//     let places = [{
//         name: 'Canes',
//         city: 'Chicago',
//         state: 'IL',
//         cuisine: 'Chicken Tenders',
//         pic: '/images/canes.jpeg'
//     }, {
//         name: 'Taco Max',
//         city: 'Chicago',
//         state: 'IL',
//         cuisine: 'Mexican',
//         pic: 'http://placekitten.com/250/250'
//     },{
//         name: 'Happy China',
//         city: 'Chicago',
//         state: 'IL',
//         cuisine: 'asian',
//         pic: 'http://placekitten.com/250/250'
//     }]
//     res.render('places/index', {places})
// })
// module.exports = router


router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.state = 'anytown'
    }
    if (!req.body.state) {
        req.body.state = "USA"
    }
    places.push(req.body)
    res.redirect('/places')
})