const express = require("express");
const app = express();



//first parameter is url
//second parameter is a function with two inputs one is request and one is response
app.get('/',function(req,res){
    res.send("home page")
});

app.get()

//specifiying port fot local server
app.listen(3000);