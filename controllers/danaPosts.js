let danaPost = require('../models/danaPost')

module.exports = {
    create,
    index,
    update,
    findDanaPost,
    deleteOne

}

async function create(req, res) {
    req.body.user = req.user._id
    req.body.author = req.user.name
    try {
        await danaPost.create(req.body)
        index(req, res)
    } catch (err) {
        res.json({err})
    }
}

async function index(req, res) {
    const danaPosts = await danaPost.find({})
    res.json(danaPosts)
}

async function update(req, res) {
    try {
        const updatedDanaPost = await danaPost.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedDanaPost)
    }
    catch(err){
        res.status(500).json(err)
    }
}

async function findDanaPost(req, res) {
    console.log(req.params.id)
    try {
        const foundDanaPost = await danaPost.findById(req.params.id)
        console.log(foundDanaPost)
        res.status(200).json(foundDanaPost)
    }
    catch(err){
        res.status(500).json(err)
    }
}


async function deleteOne(req, res) {
    try{
        const deletedDanaPost = await danaPost.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedDanaPost);
    }
    catch(err){
        res.status(500).json(err);
    }
}