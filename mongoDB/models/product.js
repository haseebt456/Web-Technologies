const mongoose = require("mongoose");

const poroductSchema = mongoose.Schema({
    title:String,
    price:Number,
    tags:[String],
});
//defining schema as mongoDB is schema less

const products = mongoose.model("products",poroductSchema);//model of schema
module.exports = products;
