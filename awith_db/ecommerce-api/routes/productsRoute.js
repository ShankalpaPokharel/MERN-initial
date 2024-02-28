const express = require("express")
const router = express.Router()
const productCont = require('../controllers/product_cont')

router.get('/',productCont.fetchProduct)
router.post('/',productCont.storeProduct)


module.exports = router