let carsonPost = require('../models/carsonPost')

module.exports = {
    create,
    poemPosts,
    // update,
    // findPost,
    // deleteOne

}

async function create(req, res) {
    req.body.user = req.user._id
    req.body.creator = req.user.name
    try {
        await carsonPost.create(req.body)
        poemPosts(req, res)
    } catch (err) {
        res.json({err})
    }
}

async function poemPosts(req, res) {
    const carsonPosts = await carsonPost.find({})
    res.json(carsonPosts)
}