const express = require("express");
const {
  ProductsModel,
  CartProductsModel,
} = require("../models/productsModels");

const productController = express.Router();

productController.get("/", async (req, res) => {
  let products = [];
  const { sortBy, order, page, limit, category, brand, title } = req.query;

  const skipDataForPagination = (page - 1) * limit;

  console.log(page, limit, order, sortBy,category);

  if (page && limit && order && sortBy) {
    if (order === "asc") {
      products = await ProductsModel.find()
        .skip(skipDataForPagination)
        .limit(limit)
        .sort({ [sortBy]: 1 });
      console.log(products + " combo");
      return res.json({ status: "success combo", data: products });
    } else if (order === "desc") {
      products = await ProductsModel.find()
        .skip(skipDataForPagination)
        .limit(limit)
        .sort({ [sortBy]: -1 });
    
    }
  } else if (category && order && sortBy) {
    if (order === "asc") {
      products = await ProductsModel.find({ category: category }).sort({
        [sortBy]: 1,
      });
      return res.json({ status: "success", data: products });
    }else if(order === "desc"){
      products = await ProductsModel.find({ category: category }).sort({
        [sortBy]: -1,
      });
      return res.json({ status: "success", data: products });
    }
  }
  else if (title && order && sortBy) {
    if (order === "asc") {
      products = await ProductsModel.find({ title: title }).sort({
        [sortBy]: 1,
      });
      return res.json({ status: "success", data: products });
    }else if(order === "desc"){
      products = await ProductsModel.find({ title: title }).sort({
        [sortBy]: -1,
      });
      return res.json({ status: "success", data: products });
    }
  }
  else if (brand && order && sortBy) {
    if (order === "asc") {
      products = await ProductsModel.find({ brand: brand }).sort({
        [sortBy]: 1,
      });
      return res.json({ status: "success", data: products });
    }else if(order === "desc"){
      products = await ProductsModel.find({ brand: brand }).sort({
        [sortBy]: -1,
      });
      return res.json({ status: "success", data: products });
    }
  } else if (page && limit) {
    products = await ProductsModel.find()
      .skip(skipDataForPagination)
      .limit(limit);
    return res.json({ status: "success combo", data: products });
  }

  if (sortBy === "price" && order === "asc") {
    products = await ProductsModel.find().sort({ price: 1 });
    return res.json({ products });
  } else if (sortBy === "price" && order === "desc") {
    products = await ProductsModel.find().sort({ price: -1 });
    return res.json({ products });
  } else if (category) {
    products = await ProductsModel.find({ category: category });
    return res.json({ status: "All products are here", data: products });
  } else if (brand) {
    products = await ProductsModel.find({ brand: brand });
    return res.json({ status: "All products are here", data: products });
  } else if (title) {
    products = await ProductsModel.find({ title: title });
    return res.json({ status: "All products are here", data: products });
  } else {
    products = await ProductsModel.find();
    return res.json({ status: "All products are here", data: products });
  }
});

// Getting Data with Category Wise

productController.get("/:category", async (req, res) => {
  let products = [];
  const category = req.params.category;
  console.log(category);
  if (category === "rings") {
    products = await ProductsModel.find({ category: "Rings" });
  } else if (category === "earrings") {
    products = await ProductsModel.find({ category: "Earrings" });
  } else if (category === "necklaces") {
    products = await ProductsModel.find({ category: "Necklaces" });
  }
  if (products.length > 0) {
    res.json({ status: "success", data: products });
  } else {
    res.json({ status: "Invalid Request No Data Found", data: products });
  }
});

// Applying Sorting in with any key in ascending or descending order

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

// const sortBy = req.query.sortBy;
// const order = req.query.order;
// const page = req.query.page;
// const limit = req.query.limit;
// const category = req.query.category;
// const brand = req.query.brand;
// const title = req.query.title;
