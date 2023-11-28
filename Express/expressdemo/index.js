const express = require("express");
const app = express();

app.use(express.json());
const product = ["pc","laptop","Projector"];

//first parameter is url
//second parameter is a function with two inputs one is request and one is response
app.get('/',function(req,res){
    res.send("home page")
});

app.get('/api/products',function(req,res){
    res.send(product);
});
app.get('/api/products/:index',function(req,res){
    if(!product[req.params.index]){
    return res.status(400).send("Product not found");
    }
    res.send(product[req.params.index]);
});

app.put("/api/products/:index",function(req,res){
    //console.log(req.body);
    product[req.params.index] = res.req.body.name;
    res.send(product[req.params.index]);
});
app.delete("/api/products/:index",function(req,res){
    product.splice(req.params.index,1);
    res.send(product);
});

app.post("/api/products/:index",function(req,res){
    product.push(req.body.name);
    res.send(product);
})
//specifiying port fot local server
app.listen(3000);