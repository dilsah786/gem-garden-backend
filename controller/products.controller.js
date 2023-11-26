const express = require("express");
const {
  ProductsModel,
  CartProductsModel,
} = require("../models/productsModels");

const productController = express.Router();

productController.get("/", async (req, res) => {
  const products =[];
  products = await ProductsModel.find();
  res.json({ status: "All products are here", data: products });
});




module.exports = { productController };















































// productController.post("/addtocart/:id", async (req, res) => {
//   const productId = req.params.id;
//   const { userId } = req.body;

//   req.body.productId = productId;

//   console.log(productId);

//   try {
//     const productforCart = await ProductsModel.findOne({ _id: productId });

//     if (!productforCart) {
//       return res
//         .status(404)
//         .json({ status: "Error", message: "Product not found" });
//     }
//     const existingCartItem = await CartProductsModel.findOne({
//       _id: productId,
//       userId,
//     });

//     if (existingCartItem) {
//       // If the product is already in the cart, you might want to update quantity or handle accordingly
//       return res
//         .status(400)
//         .json({ status: "Error", message: "Product already in the cart" });
//     }

//     const data = await CartProductsModel.updateOne(
//       { itemname: "nuts" },
//       { $push: { user: userId } }
//     );

//     const newCartItem = await CartProductsModel.create({
//       productId: req.body.productId,
//       userId,
//       // Add other product details as needed
//     });
//     res.json({ status: "New Product Added to cart", data: newCartItem });
//   } catch (err) {
//     console.log(err);
//     console.log("Error Occured while Adding Item to cart Page");
//   }
// });