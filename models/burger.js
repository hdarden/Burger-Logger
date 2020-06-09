const orm = require("../config/orm");

const burger = {
    selectAll: function(cb){
    orm.selectAll("burgers", function(res){
        cb(res);
    });

    },
    insertOne: function(cb, burgerName){
        orm.insertOne("burgers", burgerName, "burger_name", function(res){
            cb(res);
        })

    }

}
module.exports = burger;