const express = require("express")
const router = express.Router()
const order = require("../controllers/order")
const auth = require('../middleware/auth')

router.post("",auth.checkAuthentication,auth.checkBuyer,order.createOrder)


module.exports = router