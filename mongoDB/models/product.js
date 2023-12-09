const mongoose = require("mongoose");

const poroductSchema = mongoose.Schema({
    title:String,
    price:Number,
    tags:[string],
    slug: {
        type:string,
        lowercase:true,
    },
});
//defining schema as mongoDB is schema less

const product = mongoose.model("ProductModel",poroductSchema);//model of schema
module.exports = ProductModel;
