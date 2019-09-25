var connection = require("./connection");

var orm = {
    selectAll : (table, cb) => {
        connection.query("SELECT * FROM ??;", [table], (err, data) => {
            if (err) throw err;

            cb(data);
        });
    },
    insertOne: (table, col, val, cb) => {
        var query = "INSERT INTO " + table + "(" + col.toString() + ") ";
        query += "VALUES (" + printQ(val.length) + ")";

        connection.query(query, val, (err, data) => {
            if (err) throw err;

            cb(data);
        })
    },
    updateOne: (table, colVal, condition, cb) => {
        var query = "UPDATE " + table + " SET " + objToSql(colVal);
        query += " WHERE " + condition;

        connection.query(query, (err, data) => {
            if (err) throw err;

            cb(data);
        })
    }
}

function objToSql(obj) {
    var arr = [];

    for (var key in obj) {
        var val = obj[key];
        if(Object.hasOwnProperty.call(obj, key)) {
            if (typeof val === "string" && val.indexOf(" ") >= 0) {
                val = "'" + val + "'";
            }
            arr.push(key + "=" + val);
        }
    }

    return arr.toString();

}

function printQ(num) {
    var arr = [];

    for (let i = 0; i < num; i++){
        arr.push("?");
    }

    return arr.toString();
}

module.exports = orm;