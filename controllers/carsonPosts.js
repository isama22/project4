let carsonPost = require('../models/carsonPost')

module.exports = {
    create,
    index,
    update,
    findCarsonPost,
    // deleteOne

}

async function create(req, res) {
    req.body.user = req.user._id
    req.body.creator = req.user.name
    try {
        await carsonPost.create(req.body)
        index(req, res)
    } catch (err) {
        res.json({err})
    }
}

async function index(req, res) {
    const carsonPosts = await carsonPost.find({})
    res.json(carsonPosts)
}

async function update(req, res) {
    try {
        const updatedCarsonPost = await carsonPost.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedCarsonPost)
    }
    catch(err){
        res.status(500).json(err)
    }
}

async function findCarsonPost(req, res) {
    console.log(req.params.id)
    try {
        const foundCarsonPost = await carsonPost.findById(req.params.id)
        console.log(foundCarsonPost)
        res.status(200).json(foundCarsonPost)
    }
    catch(err){
        res.status(500).json(err)
    }
}