const express = require('express')
const router = express.Router()
const carsonPostsCtrl = require('../../controllers/carsonPosts')

router.get('/', carsonPostsCtrl.index)

router.use(require('../../config/auth'))

router.post('/', checkAuth, carsonPostsCtrl.create)
router.put('/:id', checkAuth, carsonPostsCtrl.update)
router.get('/:id', checkAuth, carsonPostsCtrl.findCarsonPost)
router.delete('/:id', checkAuth, carsonPostsCtrl.deleteOne);

function checkAuth(req, res, next) {
    if (req.user) return next()
    return res.status(401).json({ msg: 'Not Authorized' })
}

module.exports = router