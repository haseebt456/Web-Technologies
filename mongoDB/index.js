const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {createProduct,getAllProducts,deleteProduct,updateProduct} = require("./productOperations");
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
    //let product2 = await deleteProduct("6574b7406bd54d4ef1010aef");
    //console.log(product2+"is deleted");
    let productUpd = await updateProduct('6574bd85636f612f3fe6c9de',"Mobile",150000,["black","iphone"]);
    console.log(productUpd);
})
.catch((err)=>{
    console.log("Error connecting");
    console.log(err);
});
app.listen(3000);