const express = require("express");
const {
  ProductsModel,
  CartProductsModel,
} = require("../models/productsModels");

const productController = express.Router();

productController.get("/", async (req, res) => {
  const products = await ProductsModel.find();
  res.json({ status: "All products are here", data: products });
});

// productController.post("/addtocart/:id", async (req, res) => {
//   const itemId = req.params.id;
//   const { userId } = req.body;
 
//   try {
//     const productforCart = await ProductsModel.findOne({ _id: itemId });
  
//     if (!productforCart) {
//       return res.status(404).json({ status: "Error", message: "Product not found" });
//     }
//     const newProduct = await CartProductsModel.create({
//       product: productforCart,
//       userId,
//     });
//     res.json({ status: "New Products  Added to cart", data: newProduct });
//   } catch (err) {
//     console.log(err);
//     console.log("Error Occured while Adding Item to cart Page");
//   }
// });

productController.patch("/update", async (req, res) => {
  res.json({ data: "All products are here" });
});

productController.delete("/delete", async (req, res) => {
  res.json({ data: "All products are here" });
});

module.exports = { productController };
