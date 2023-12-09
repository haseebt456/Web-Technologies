const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
mongoose.connect("mongodb://0.0.0.0:27017/testDB",{
    useNewUrlParser: true, useUnifiedTopology: true
})
.then(()=>{
    console.log("connection to mongoDb sucessful")
})
.catch((err)=>{
    console.log("Error connecting");
    console.log(err);
});
app.listen(3000);