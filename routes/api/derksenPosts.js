const express = require('express')
const router = express.Router()
const derksenPostsCtrl = require('../../controllers/derksenPosts')

router.get('/', derksenPostsCtrl.index)

router.use(require('../../config/auth'))

router.post('/', checkAuth, derksenPostsCtrl.create)
router.put('/:id', checkAuth, derksenPostsCtrl.update)
router.get('/:id', checkAuth, derksenPostsCtrl.findDerksenPost)
router.delete('/:id', checkAuth, derksenPostsCtrl.deleteOne);

function checkAuth(req, res, next) {
    if (req.user) return next()
    return res.status(401).json({ msg: 'Not Authorized' })
}

module.exports = router