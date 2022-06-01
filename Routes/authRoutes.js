const {Router} = require('express')
const authControllers = require('../controllers/authControllers')

const router = Router()

// router.get('/places', authControllers.places_get)
// router.post('/places', authControllers.places_post)
// router.get('/food', authControllers.food_get)
// router.post('/food', authControllers.food_post)
router.get('/signup', authControllers.signup_get)
router.post('/signup', authControllers.signup_post)
router.get('/login', authControllers.login_get)
router.post('/login', authControllers.login_post)

module.exports= router


