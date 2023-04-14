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

router.route('/posts/edit/:id')
    .get(admincontroller.editPost);
    // .put(adminController.editPostUpdateRoute);

    
router.route('/posts/delete/:id')
    .delete(admincontroller.deletePost);

    router.route('/category')
    .get(admincontroller.getCategories)
    // .post(admincontroller.createCategories);

module.exports = router;