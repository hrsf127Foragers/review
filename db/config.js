const mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'reviews'
});

connection.connect(() => {
  console.log('Mysql database is connected.')
});

module.exports = connection;