const express = require('express');
const defaultcontroller = require('../controllers/defaultcontroller');
const router = express.Router();
const deafultcontrollers = require('../controllers/defaultcontroller')


router.all('/*', (req, res, next) => {

    req.app.locals.layout = 'default';

    next();
})



router.route('/')
     .get(deafultcontrollers.index);


router.route('/login')
     .get(defaultcontroller.loginGet)
     .post(defaultcontroller.loginpost);
     
     
router.route('/register')
     .get(defaultcontroller.registerget)
     .post(defaultcontroller.registerpost);

module.exports = router;