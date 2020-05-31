const router = require('express').Router();
let Post = require('../models/Post.model');

router.route('/').get((req, res) => {
  Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    //change to post not text?? or entry
  const text = req.body.text;


  const newPost = new Post({
    text
  });

  newPost.save()
  .then(() => res.json('Post added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;