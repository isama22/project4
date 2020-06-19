const express = require('express')
const router = express.Router()
const danaPostsCtrl = require('../../controllers/danaPosts')

router.get('/', danaPostsCtrl.index)

router.use(require('../../config/auth'))

router.post('/', checkAuth, danaPostsCtrl.create)
router.put('/:id', checkAuth, danaPostsCtrl.update)
router.get('/:id', checkAuth, danaPostsCtrl.findDanaPost)
router.delete('/:id', checkAuth, danaPostsCtrl.deleteOne);

function checkAuth(req, res, next) {
    if (req.user) return next()
    return res.status(401).json({ msg: 'Not Authorized' })
}

module.exports = router