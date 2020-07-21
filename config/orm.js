//imports MySQL connection
const connection = require("./connection.js");

//======================Helper function==================================
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

//======================== ORM ===========================================

const orm = {
    selectAll: function(tableInput, cb){
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
      })
    },

    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },

    
    updateOne: function (table, columnOne, condition, columnTwo, burgerId, cb) {
      connection.query(`UPDATE ${table} SET ${columnOne} = ${condition} WHERE ${columnTwo} = ${burgerId}`, function (err, result) {
          if (err) throw err;
          cb(result);
      });
  },
  delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    })
  }
}

//required by models/burger.js
module.exports = orm;