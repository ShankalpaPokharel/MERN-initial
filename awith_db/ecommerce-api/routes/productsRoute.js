const express = require("express")
const router = express.Router()
const productCont = require('../controllers/product_cont')
const auth = require('../middleware/auth')

const upload = require("../middleware/multer_mid")


router.get('/',productCont.fetchProduct)
router.post('/',auth.checkAuthentication,auth.checkAuthorization,upload.single('img'),productCont.storeProduct)
router.put('/:id',auth.checkAuthentication,auth.checkAuthorization,productCont.updateProduct)
router.delete('/:id',auth.checkAuthentication,auth.checkAuthorization,productCont.deleteProduct)


module.exports = router