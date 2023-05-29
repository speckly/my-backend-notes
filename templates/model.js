const db = require("databaseConfig.js") //replace with your path

//remember to ctrl F and replace model name, exports, method names and query
const myModel = {
    get: function (callback){
        var dbConn = db.getConnection();
        dbConn.connect(function (err) {
            if (err) {//database connection issue
                return callback(err, null);
            } else {
                getQuery = `SELECT * FROM myTable`
                dbConn.query(getQuery, (err, result) => {
                    dbConn.end()
                    if (err){
                        return callback(err, null)
                    }
                    return callback(null, result)
                })
            }})
    },
    post: function(data, callback) {
        var dbConn = db.getConnection();
        dbConn.connect(function (err) {
            if (err) {//database connection issue
                return callback(err, null);
            } else {
                postQuery = `INSERT INTO myTable
                (f1, f2)
                VALUES (?, ?)`
                dbConn.query(postQuery, [data.myAttribute], (err, result) => {
                    dbConn.end()
                    if (err){
                        return callback(err, null)
                    }
                    return callback(null, result)
                })
            }})
    },
    put: function(data, callback) {
        var dbConn = db.getConnection();
        dbConn.connect(function (err) {
            if (err) {//database connection issue
                return callback(err, null);
            } else {
                const putQuery = 
                `UPDATE user
                SET
                    f1 = ?,
                    f2 = ?
                WHERE id = ?`
                dbConn.query(putQuery, [data.myAttribute], (err, result) => {
                    dbConn.end()
                    if (err){
                        return callback(err, null)
                    }
                    return callback(null, result)
                })
            }})
    },
    delete: function(data, callback) {
        var dbConn = db.getConnection();
        dbConn.connect(function (err) {
            if (err) {//database connection issue
                return callback(err, null);
            } else {
                const putQuery = 
                `UPDATE user
                SET
                    f1 = ?,
                    f2 = ?
                WHERE id = ?`
                dbConn.query(putQuery, [data.myAttribute], (err, result) => {
                    dbConn.end()
                    if (err){
                        return callback(err, null)
                    }
                    return callback(null, result)
                })
            }})
    }
}

module.exports = myModel;