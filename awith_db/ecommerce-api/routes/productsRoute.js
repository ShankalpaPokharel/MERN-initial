const express = require("express")
const router = express.Router()
const productCont = require('../controllers/product_cont')
const auth = require('../middleware/auth')

// const upload = require("../middleware/multer_mid")


router.get('/',productCont.fetchProduct)
// router.post('/',auth.checkAuthentication,auth.checkSeller,upload.single('img'),productCont.storeProduct)
router.post('/',auth.checkAuthentication,auth.checkSeller,productCont.storeProduct)
router.put('/:_id',auth.checkAuthentication,auth.checkSeller,productCont.updateProduct)
router.delete('/:_id',auth.checkAuthentication,auth.checkSeller,productCont.deleteProduct)


module.exports = router