const express = require("express");
const { connection } = require("./db");
const { UserModel } = require("./models/userModels");
const { userController,userDetailsController } = require("./controller/user.controller");
const { authentication } = require("./Auth_middleware/authentication");
const { productController } = require("./controller/products.controller");
require("dotenv").config();
const app = express();
app.use(express.json());

app.use("/user", userController);

app.use(authentication);

app.use("/jewellery",productController)
app.use("/user",userDetailsController)
app.get("/", (req, res) => {
  res.send("HomePage for Gem-Garden");
});

app.listen(process.env.port || 8080, async () => {
  try {
    await connection;
    console.log("Connected to DataBase(Mongo)");
  } catch (err) {
    console.log(err);
    console.log("Error Occured while connecting to DataBase(Mongo)");
  }
  console.log(`App is running on port ${process.env.port}`);
});
