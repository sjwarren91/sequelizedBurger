var orm = require("../config/orm");

var burger = {
    all: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },

    create: (col, val, cb) => {
        orm.insertOne("burgers", col, val, (res) => {
            cb(res);
        });
    },

    update: (colVal, condition, cb) => {
        orm.updateOne("burgers", colVal, condition, (res) => {
            cb(res);
        });
    }
}

module.exports = burger;