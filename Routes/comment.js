const router = require('express').Router();
let Comments = require('../models/comment.model');

router.route('/').get((req, res) => {
    Comments.find()
    .then(comments => res.json(comments))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const description = req.body.description;
    const newComment = new Comments({description});
    newComment.save()
    .then(() => res.json('Comment Added!'))
    .catch(err => res.status(400).json('Error: '+ err));
});
module.exports = router;