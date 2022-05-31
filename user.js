const router = require('express').Router()
let comment = require('../src/models/comments')


router.route('/').get((req, res) => {
    comment.find()
    .then(users => res.json(users))
    .catch(err => res.status(404).json('Error: '+ err))
})


router.route().post((req, res) =>{
    const username = req.body.username


    const newUser = new comment({username})


    newUser.save()
    .then (() => res.json("User added"))
    .catch(err => res.status(400).json('Error: ' + err))
})


module.exports = router;