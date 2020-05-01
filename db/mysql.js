const mysql = require('mysql');
const mysqlConfig = require('./db.js');

let connection = mysql.createConnection(mysqlConfig);

connection.connect(() => {
  console.log('Mysql database is connected.')
});

// function to insert all the restaurant to mysql
const insertData = (data, callback) => {
  let restaurants = data.restaurants;

  let queryStr = `INSERT INTO restaurants (restaurant_name) VALUES (?);`

  for(let i = 0; i < restaurants.length; i++) {
    connection.query(queryStr, (err, res) => {
      if(!err) {
        res.status(201).send(res);
      } else {

      }
    })
  }


}


// function to select the restaurant by id
const getRestaurantById = (id, callback) => {

}


// function to select all review by restaurant id
const getReviewsByRestaurantId = (id, callback) => {

}

module.exports = {
  insertData,
  getRestaurantById,
  getReviewsByRestaurantId
}