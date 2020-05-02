const express = require('express');
const { userValidation } = require('../middleware/validationMiddleware');

const router = express.Router();

const userCtrl = require('../controllers/userController');

router.post('/signup', userValidation, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;
