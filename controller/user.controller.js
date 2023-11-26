const express = require("express");
const { UserModel,UserDetailsModel } = require("../models/userModels");
const bcrypt= require("bcrypt");
const jwt = require("jsonwebtoken")
require("dotenv").config();

const userController = express.Router();
const userDetailsController = express.Router();



userController.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    bcrypt.hash(password, 8, async function (err, hash) {
      if (err) {
        return json({ status: "User not Created" });
      }
      const user = await UserModel.create({
        name: name,
        email: email,
        password: hash,
      });
      res.json({ status: "User Signup SuccessFully", newUser: name });
    });
  } catch (err) {
    console.log(err);
  }
});

userController.post("/login", async (req, res) => {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({email});
    console.log(user)
    const hashed_password = user.password;
    try {
      bcrypt.compare(password, hashed_password, async function (err, result) {
        if (err || !result) {
          return json({ status: "User not Logged in" });
        }
        const token = jwt.sign({ userId: user._id }, process.env.secretToken);
        res.json({ status: "User Logged in SuccessFully", userIs: name , token:token});
      });
    } catch (err) {
      console.log(err);
    }
  });

  userDetailsController.post("/address", async (req, res) => {
    const { name, email, mobile,alternate_Mobile,locality,city,state,userId ,pincode } = req.body;
    try {
        const userDetails = await UserDetailsModel.create({name,email,mobile,alternate_Mobile,city,state,locality,pincode,userId});
        res.json({ status: "User Address Saved SuccessFully", newAddress: name });
    } catch (err) {
      console.log(err);
    }
  });



module.exports = { userController,userDetailsController };
