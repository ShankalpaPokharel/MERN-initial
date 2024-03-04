const express = require('express')
const router = express.Router();
const auth_cont = require('../controllers/auth')

router.post('/signup', auth_cont.signup)
router.get('/login', auth_cont.login)
router.get('/getAllUser',auth_cont.getAllUser)

module.exports = router;

