const ProductModel = require("./models/product");
const createProduct = async (title,price,tags) =>{
    console.log("create product");
    let product = new ProductModel();
    product.title = title;
    product.price = price;
    product.tags = tags;
    await product.save();
    return product;
} 

module.exports.createProduct = createProduct;