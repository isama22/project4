const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');

router.get('/', postsCtrl.seePost);



/*---------- Protected Routes ----------*/
// Process the token for only the routes below
// router.use(require('../../config/auth'));
//everything below auth requires the user be logged in 
router.post('/', postsCtrl.create);

module.exports = router;