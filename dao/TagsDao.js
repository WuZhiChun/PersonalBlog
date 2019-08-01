var dbutil = require("./DBUtil");


function  insetTag(tag, ctime, utime, success) {
    var insertSql = "insert into tags (`tag`, `ctime`, `utime`) values (?, ?, ?)";
    var params = [tag, ctime, utime];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function (error, result) {
        if(error == null) {
            success(result)
        } else {
            console.log(error);
        }
    });
    connection.end();
}

function  queryTag(tag, success) {
    var insertSql = "select * from tags where tag = ?;";
    var params = [tag];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function (error, result) {
        if(error == null) {
            success(result)
        } else {
            console.log(error);
        }
    });
    connection.end();
}
function  queryTag(tag, success) {
    var insertSql = "select * from tags where tag = ?;";
    var params = [tag];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function (error, result) {
        if(error == null) {
            success(result)
        } else {
            console.log(error);
        }
    });
    connection.end();
}

function  queryAllTag(success) {
    var insertSql = "select * from tags;";
    var params = [];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function (error, result) {
        if(error == null) {
            success(result)
        } else {
            console.log(error);
        }
    });
    connection.end();
}

module.exports.insetTag = insetTag;
module.exports.queryTag = queryTag;
module.exports.queryAllTag = queryAllTag;