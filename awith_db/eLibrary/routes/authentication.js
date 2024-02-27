const express = require('express')
const router = express.Router()
const autheCon = require('../controllers/autheCon')


router.post('/signup',autheCon.signUp)
router.post('/login',autheCon.login)


module.exports = router;
