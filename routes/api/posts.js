const express = require('express')
const router = express.Router()
const postsCtrl = require('../../controllers/posts')

router.get('/', postsCtrl.poemPosts)

// protected routes //

router.use(require('../../config/auth'))

router.post('/', checkAuth, postsCtrl.create)


function checkAuth(req, res, next) {
    if (req.user) return next()
    return res.status(401).json({ msg: 'Not Authorized' })
}

module.exports = router