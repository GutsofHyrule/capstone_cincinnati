const router = require('express').Router();
let Event = require('../models/events.models')

router.route('/').get((req, res) => {
    Event.find()
    .then(amuses => res.json(amuses))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const imageURL = req.body.imageURL;
    const newEvent = new Event({name, description, price, imageURL});
    newEvent.save()
    .then(() => res.json('Event Added!'))
    .catch(err => res.status(400).json('Error: '+ err));
});
module.exports = router;