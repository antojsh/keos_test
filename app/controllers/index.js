var express = require("express"),
  router = express.Router(),
  db = require("../models");

module.exports = function(app) {
  app.use("/", router);
};


router.get('/',(req,res)=>{
    res.render('index')
})

