const express = require("express");
const { UserDetailsModel } = require("../models/userModels");
require("dotenv").config();

const userDetailsController = express.Router();


userDetailsController.get("/addresses", async (req, res) => {
    const {userId} = req.body;
  try {
    const userDetails = await UserDetailsModel.find({userId:userId});
    res.json({
      status: "User Address Saved SuccessFully",
      newAddress: userDetails,
    });
  } catch (err) {
    console.log(err);
  }
});

userDetailsController.post("/address/create", async (req, res) => {
  const {
    name,
    email,
    mobile,
    alternate_Mobile,
    locality,
    city,
    state,
    userId,
    pincode,
  } = req.body;
  try {
    const userDetails = await UserDetailsModel.create({
      name,
      email,
      mobile,
      alternate_Mobile,
      city,
      state,
      locality,
      pincode,
      userId,
    });
    res.json({ status: "User Address Saved SuccessFully", newAddress: name });
  } catch (err) {
    console.log(err);
  }
});

userDetailsController.patch("/address/edit/:id", async (req, res) => {
  const id = req.params.id;
  const {userId} = req.body;
  const editAddress = req.body;
  console.log(editAddress);
  try {
    const userDetails = await UserDetailsModel.findOneAndUpdate(
     {_id:id,userId:userId},
      editAddress,
      { new: true }
    );
    res.json({
      status: "User Address Changed SuccessFully",
      newAddress: userDetails,
    });
  } catch (err) {
    console.log(err);
  }
});

userDetailsController.delete("/address/delete/:id", async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;
  console.log(userId);
  try {
    const userDetails = await UserDetailsModel.deleteOne({
      _id: id,
      userId: userId,
    });
    res.json({
      status: "User Address Deleted SuccessFully",
      newAddress: userDetails,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = { userDetailsController };
