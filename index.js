const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'SQL-playlist'

});


connection.connect(function(err){
    if(err) throw err;
    console.log(`connected as thread id# ${connection.threadId}`);

});