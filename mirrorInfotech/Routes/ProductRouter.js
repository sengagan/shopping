const express = require("express")
const productController = require("../Controller/ProductController");
const productRouter = express.Router()

productRouter.post("/registration",productController.registrationProduct)
productRouter.put("/update",productController.updateProduct)

productRouter.post("/search",productController.search)
productRouter.get("/getAll",productController.getAllProduct)
productRouter.get("/get/:token",productController.getById)                 // user id
productRouter.delete("/delete/:id",productController.deleteProduct)   // product id

module.exports = productRouter