const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {createProduct} = require("./productOperations");
const {getAllProducts} = require("./productOperations");
const {deleteProduct} = require("./productOperations");
app.use(express.json());
mongoose.connect("mongodb://0.0.0.0:27017/testDB",{
    useNewUrlParser: true, useUnifiedTopology: true
})
.then(async ()=>{
    console.log("connection to mongoDb sucessful");
    //let product=await createProduct("Laptop",100000,["black","lenovo"]);
    //console.log(product);;
    //let products = await getAllProducts();;
    //console.log(products);
    let product2 = await deleteProduct("6574a6d71eae1308ea0fda59");
    console.log(product2+"is deleted");
})
.catch((err)=>{
    console.log("Error connecting");
    console.log(err);
});
app.listen(3000);