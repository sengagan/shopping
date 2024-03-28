
var mysql      = require('mysql2');

var Connection = mysql.createConnection({
    host: "localhost",
    user : "root",
    password : "152897",
    database : "shopping"
})

Connection.connect(function(error){
    if(error){
        console.log("database not connected");
    }
    else{
        console.log("database connected successfully");
    }
})

module.exports = {Connection}


