const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');

router.get('/endpage1', postsCtrl.seePost);

//Just be sure to mount your auth middleware before mounting any routes/routers that need access to req.user.

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require('../../config/auth'));
//everything below auth requires the user be logged in 
router.post('/endpage1', checkAuth, postsCtrl.create);

//helper func
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router;