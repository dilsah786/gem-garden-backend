const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
})

const userDetailsSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    mobile:{type:String,required:true},
    alternate_Mobile:{type:String},
    locality:{type:String,required:true},
    pincode:{type:String,required:true},
    city:{type:String,required:true},
    state:{type:String,required:true},
    userId:{type:String,required:true},
    
})

const UserModel = mongoose.model("user",userSchema)
const UserDetailsModel = mongoose.model("userDetails",userDetailsSchema)

module.exports = {UserModel,UserDetailsModel}
