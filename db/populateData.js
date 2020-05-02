const mysql = require('mysql');
const connection = require('./db.js');

// function to insert all the restaurant to mysql
const insertRestaurants = (restaurant, callback) => {
  let restaurantName = [restaurant.storeName];
  console.log('name => ', restaurantName)

  let queryStr = `INSERT INTO restaurants (restaurant_name) VALUES (${restaurantName})`;

  connection.query(queryStr, (err, res) => {
    if(err) {
      console.log('error saving..')
      callback(err)
    } else {
      callback('Success')
    }
  });
}

module.exports = {
  insertRestaurants
}