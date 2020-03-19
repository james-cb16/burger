var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "u0zbt18wwjva9e0v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",

    port: 3306,

    user: "c8cswvixj0mjb280",

    password: "d2pf8mudmadx8v67",
    database: "ren7kbjw9m3kw1qg"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.end();
});
