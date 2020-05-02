const express = require('express');
const validationMiddleware = require('../middleware/validationMiddleware');

const router = express.Router();

const userCtrl = require('../controllers/userController');

router.post('/signup', validationMiddleware, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;
