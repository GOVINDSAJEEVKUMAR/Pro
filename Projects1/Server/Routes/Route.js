const express = require ('express')
const router = express.Router();
const {SignUp,getAll,login,addProduct,getProduct,feedBack,deleteProduct} = require ("../Controller/Control")


router.post("/sign",SignUp);
router.get("/getall",getAll);
router.post("/login",login);
router.post("/product",addProduct)
router.get("/getproduct",getProduct)
router.post("/feed",feedBack)
router.delete("/delete",deleteProduct)


module.exports = router;