const mongoose = require("mongoose");

const poroductSchema = mongoose.Schema({
    title:String,
    price:Number,
    tags:[string],
});
//defining schema as mongoDB is schema less

const product = mongoose.model("products",poroductSchema);//model of schema
module.exports = ProductModel;
