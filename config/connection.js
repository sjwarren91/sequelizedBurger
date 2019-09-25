var mysql = require("mysql");

//require('dotenv').config()
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: process.env.JAWSDB_URL,
        port: 3306,
        user: process.env.JAWSDB_USER,
        password: process.env.JAWSDB_PASSWORD,
        database: process.env.JAWSDB_DATABASE
    });
}

connection.connect((err) => {
    if (err) {
        console.log("error connecting: " + err.stack);
        return
    } else {
        console.log("connected as id " + connection.threadId);
    }
});

module.exports = connection;
