let derksenPost = require('../models/derksenPost')

module.exports = {
    create,
    index,
    update,
    findDerksenPost,
    deleteOne

}

async function create(req, res) {
    req.body.user = req.user._id
    req.body.author = req.user.name
    try {
        await derksenPost.create(req.body)
        index(req, res)
    } catch (err) {
        res.json({err})
    }
}

async function index(req, res) {
    const derksenPosts = await derksenPost.find({})
    res.json(derksenPosts)
}

async function update(req, res) {
    try {
        const updatedDerksenPost = await derksenPost.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedDerksenPost)
    }
    catch(err){
        res.status(500).json(err)
    }
}

async function findDerksenPost(req, res) {
    console.log(req.params.id)
    try {
        const foundDerksenPost = await derksenPost.findById(req.params.id)
        console.log(foundDerksenPost)
        res.status(200).json(foundDerksenPost)
    }
    catch(err){
        res.status(500).json(err)
    }
}

async function deleteOne(req, res) {
    try{
        const deletedDerksenPost = await derksenPost.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedDerksenPost);
    }
    catch(err){
        res.status(500).json(err);
    }
}