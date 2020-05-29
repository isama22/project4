var Post = require('../models/post');

module.exports = {
  create,
  seePost
};

async function create(req, res) {
  try {
    await Post.create(req.body);
   //changing seePost to makePost eventhough thats not the name of the func its referencing, gives a 200 code ref in network on page load 
   seePost(req, res);
  } catch (err) {
    res.json({err});
  }
}

async function seePost(req, res) {
  console.log(req.user);
  const posts = await Post.find({})
  .limit(req.query.limit || 20);
  res.json(posts);
}