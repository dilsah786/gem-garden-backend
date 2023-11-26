const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
    brand:{type:String,required:true},
    title:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:String},
    origPrice:{type:String,required:true},
    img1:{type:String,required:true},
    img2:{type:String,required:true},
    img3:{type:String,required:true},
    img4:{type:String,required:true},
    img5:{type:String,required:true},
    category:{type:String,required:true,enum:['Rings','Earrings','Necklaces']},
    userId:{type:String,required:true},
    
})
const CartProductsSchema = mongoose.Schema({
    brand:{type:String},
    title:{type:String},
    description:{type:String},
    price:{type:String},
    origPrice:{type:String},
    img1:{type:String},
    img2:{type:String},
    img3:{type:String},
    img4:{type:String},
    img5:{type:String},
    category:{type:String,enum:['Rings','Earrings','Necklaces']},
    userId:{type:String},
    
})

const ProductsModel = mongoose.model("product",productsSchema);
const CartProductsModel = mongoose.model("cart",CartProductsSchema);

module.exports = {ProductsModel,CartProductsModel}