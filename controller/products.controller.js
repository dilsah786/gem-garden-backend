const express = require("express");
const {
  ProductsModel,
  CartProductsModel,
} = require("../models/productsModels");

const productController = express.Router();

productController.get("/", async (req, res) => {
  let products = [];

  const { sortBy, order, page, limit, category, brand, title, q } = req.query;
  const skipDataForPagination = (page - 1) * limit;
  const searchQuerry = q;


  if (searchQuerry) {
    const regex = new RegExp(searchQuerry, "i");
    products = await ProductsModel.find({
      $or: [
        { title: regex },
        { brand: regex },
        { description: regex },
        { origPrice: regex },
        { price: regex },
        { category: regex },
      ],
    });
    return res.json({ status: "Here is your Search", data: products });
  }

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
         return res.json({ status: "success combo", data: products });
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

productController.post("/carts/:id",async(req,res)=>{
  const cartId = req.params.id;
  const userId = req.body.userId
  console.log(cartId);
  const singleProduct = await ProductsModel.findOne({_id:cartId});
  console.log(singleProduct)

  const {brand,title,description,price,origPrice,img1,img2,img3,img4,img5,id,category}  = singleProduct

  try{
    const newPro = await CartProductsModel.create({brand,title,description,price,origPrice,img1,img2,img3,img4,img5,id,category,userId})
    console.log(newPro);
   return res.json(newPro)

  }catch(err){
      console.log(err); 
  }

})




module.exports = { productController };
