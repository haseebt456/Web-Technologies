const ProductModel = require("./models/product");
const createProduct = async (title,price,tags) =>{
    console.log("create product");
    let product = new ProductModel();
    product.title = title;
    product.price = price;
    product.tags = tags;
    await product.save();//save data to database
    return product;
} 
const getAllProducts = async ()=>{
    let products = await ProductModel.find();
    return products;
}
module.exports.createProduct = createProduct;;
module.exports.getAllProducts = getAllProducts;