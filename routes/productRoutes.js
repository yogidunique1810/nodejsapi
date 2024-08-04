const express = require("express");

const {findAllProduct,findProductById,updateProductById,deleteProductById,insertProduct}=require("../controller/productController")
const routes = express.Router();
routes.get("/",findAllProduct)

routes.get("/:id",findProductById)

routes.put("/:id",updateProductById)

routes.delete("/:id",deleteProductById)

routes.post("/",insertProduct)

module.exports=routes