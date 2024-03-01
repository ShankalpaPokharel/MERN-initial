const express = require('express')
const router = express.Router();
const auth_cont = require('../controllers/auth')

router.post('/signup', auth_cont.signup)

module.exports = router;

