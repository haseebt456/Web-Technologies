var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send("<h1>hello world</h1>");
});

router.get("/products",function(req,res,next){
  //res.send("hello products");
  res.render("products");
})
router.get("/contactUs",function(req,res,next){
  res.render("contactUs");
})

module.exports = router;
