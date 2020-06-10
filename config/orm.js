const connection = require("./connection");

const orm = {
    selectAll: function(tableInput, cb){
      connection.query(`SELECT * FROM ${tableInput}`, function(err, res){
          if (err) throw err;
            cb(res); 
      })
    },

    insertOne: function(tableInput, burgerName, colName, cb) {
        connection.query(`INSERT INTO ${tableInput} (${colName}) VALUES (${burgerName})`, function(err, res){
            if(err) throw err;
            cb(res);
        })
    },

   /*  updateOne: function(){
        connection.query(`UPDATE `)
    } */
    
}

module.exports = orm;