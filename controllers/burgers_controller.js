const express = require("express");
const burger = require("../models/burger.js");

//establiching router
const router = express.Router();

//gets burgers already listed in db
router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//creates a new burger and adds to the list
router.post("/api/burgers", function(req, res){
    burger.insertOne(["burger_name"], [req.body.name], function(result){
        res.json({ id: result.insertId });
    });
});

//when burger is devoured, adds to the devoured list
router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
//updates burger to be devoured
    burger.updateOne({ devoured: req.body.devoured }, condition, function(result) {
        if (result.changedRows == 0){
            return res.status(404).end();
        }else {
            res.status(200).end();
        }
    }) 
})


//exporting to views
module.exports = router;