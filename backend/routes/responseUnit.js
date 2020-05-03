const express = require('express');
const { responseUnitValidation } = require('../middleware/validationMiddleware');

const router = express.Router();

const responseUnitCtrl = require('../controllers/responseUnitController');

router.post('/signup', responseUnitValidation, responseUnitCtrl.signup);
router.post('/login', responseUnitCtrl.login);
router.get('/', responseUnitCtrl.getAllResponseUnits);
router.get('/:id', responseUnitCtrl.getResponseUnit);

module.exports = router;
