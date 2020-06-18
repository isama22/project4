let Post = require('../models/post')

module.exports = {
    create,
    poemPosts,
    update,
    findPost,
    deleteOne

}

async function create(req, res) {
    req.body.user = req.user._id
    req.body.creator = req.user.name
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

async function update(req, res) {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedPost)
    }
    catch(err){
        res.status(500).json(err)
    }
}

async function findPost(req, res) {
    console.log(req.params.id)
    try {
        const foundPost = await Post.findById(req.params.id)
        console.log(foundPost)
        res.status(200).json(foundPost)
    }
    catch(err){
        res.status(500).json(err)
    }
}


async function deleteOne(req, res) {
    try{
        const deletedPost = await Post.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedPost);
    }
    catch(err){
        res.status(500).json(err);
    }
}