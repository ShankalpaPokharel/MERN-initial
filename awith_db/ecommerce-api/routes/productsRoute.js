const express = require("express")
const router = express.Router()
const productCont = require('../controllers/product_cont')
const auth = require('../middleware/auth')

router.get('/',productCont.fetchProduct)
router.post('/',auth.checkAuthentication,auth.checkAuthorization,productCont.storeProduct)
router.put('/:id',auth.checkAuthentication,auth.checkAuthorization,productCont.updateProduct)
router.delete('/:id',auth.checkAuthentication,auth.checkAuthorization,productCont.deleteProduct)


module.exports = router