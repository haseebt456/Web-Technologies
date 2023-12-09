const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {createProduct} = require("./productOperations")
app.use(express.json());
mongoose.connect("mongodb://0.0.0.0:27017/testDB",{
    useNewUrlParser: true, useUnifiedTopology: true
})
.then(async ()=>{
    console.log("connection to mongoDb sucessful");
    await createProduct("Laptop",100000,["black","lenovo"],"yes");
})
.catch((err)=>{
    console.log("Error connecting");
    console.log(err);
});
app.listen(3000);