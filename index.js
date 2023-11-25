const express = require("express");
const { connection } = require("./db");
const { UserModel } = require("./models/userModels");
const { userController } = require("./controller/user.controller");
require("dotenv").config()
const app = express();
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("HomePage for Gem-Garden");
})

app.use("/user",userController)


app.listen(process.env.port||8080,async()=>{
    try{
        await connection
        console.log("Connected to DataBase(Mongo)");
        
    }catch(err){
        console.log(err);
        console.log("Error Occured while connecting to DataBase(Mongo)")
    }
    console.log(`App is running on port ${process.env.port}`);
})