let Post = require('../models/post')

module.exports = {
    create,
    poemPosts
}

async function create(req, res) {
    console.log('user: ', req.user)
    try {
        await Post.create(req.body)
        poemPosts(req, res)
    } catch (err) {
        res.json({err})
    }
}

async function poemPosts(req, res) {
    const posts = await Post.find({})
    res.json(posts)
}