const router = require('express').Router();
let Amuse = require('../models/amusement.models');

router.route('/').get((req, res) => {
    Amuse.find()
    .then(amuses => res.json(amuses))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.imageUrl;
    const newAmuse = new Amuse({name, description, price, imageUrl});
    newAmuse.save()
    .then(() => res.json('Amuse Added!'))
    .catch(err => res.status(400).json('Error: '+ err));
});
module.exports = router;