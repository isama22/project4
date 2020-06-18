const express = require('express')
const router = express.Router()
const carsonPostsCtrl = require('../../controllers/carsonPosts')

router.get('/', carsonPostsCtrl.poemPosts)

router.use(require('../../config/auth'))

router.post('/', checkAuth, carsonPostsCtrl.create)
// router.put('/:id', checkAuth, postsCtrl.update)
// router.get('/:id', checkAuth, postsCtrl.findPost)
// router.delete('/:id', checkAuth, postsCtrl.deleteOne);

function checkAuth(req, res, next) {
    if (req.user) return next()
    return res.status(401).json({ msg: 'Not Authorized' })
}

module.exports = router