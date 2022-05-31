const {Router} = require('express')
const authControllers = require('../src/controllers/authControllers')

const router = Router()

router.get('/places', authControllers.places_get)
router.post('/places', authControllers.places_post)
router.get('/food', authControllers.food_get)
router.post('/food', authControllers.food_post)

module.exports= router


