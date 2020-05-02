const mysql = require('mysql');

let connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'reviews'
});

module.exports = connection;