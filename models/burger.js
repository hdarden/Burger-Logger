const orm = require("../config/orm");

const burger = {
    selectAll: function(cb){
    orm.selectAll("burgers", function(res){
        cb(res);
        });
    },

    insertOne: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },

    updateOne: function(burgerId, cb){
        orm.updateOne("burgers", "devoured", true, "id", burgerId, function(res){
            cb(res);
        });
    },

    deleteOne: function(condition, cb){
        orm.delete("burgers", condition, function(res) {
            cb(res);
        })
    }
};

//exporting to burgers_controller.js
module.exports = burger;