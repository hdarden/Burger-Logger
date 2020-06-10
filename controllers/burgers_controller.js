const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function(req, res){
    cat.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/cats", function(req, res){
    
})




module.exports = router;