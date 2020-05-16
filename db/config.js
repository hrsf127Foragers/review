const mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'password',
  database: 'reviews'
});

// connection.connect(() => {
//   console.log('Mysql database is connected.')
// });

module.exports = connection;