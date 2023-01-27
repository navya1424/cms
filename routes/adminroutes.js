const express = require('express');
const router = express.Router();
const admincontroller = require('../controllers/admincontroller');



router.all('/*', (req, res, next) => {

    req.app.locals.layout = 'admin';

    next();
})


router.route('/')
    .get(admincontroller.index);

router.route('/posts')
    .get(admincontroller.getposts);


router.route('/posts/create')
    .get(admincontroller.createposts)
    .post(admincontroller.submitposts);
module.exports = router;