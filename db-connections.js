var mysql = require('mysql');
var connection = mysql.createConnection({
    //host: 'localhost',
    host: 'mysqlinstance.c1klrnqbqiee.ap-southeast-1.rds.amazonaws.com',
    port: '3306',
    //user: 'root',
    //password: 'mysql255',
    user: 'admin',
    password: 'testing255',
    database: 'music_website'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connect To DB');
});
module.exports = connection;
