const mysql = require('mysql');
const connection = require('./config.js');

// function to insert all the restaurant to mysql
const getRestaurants = (callback) => {

  let queryStr = `SELECT * FROM restaurants`;

  connection.query(queryStr, (err, data) => {
    if(err) {
      console.log('error saving..')
      callback(err)
    } else {
      callback(data)
    }
  });
}

// function to get all the review given restaurant id
const getReviewByRestaurantId = (id, callback) => {

  let queryStr = `SELECT restaurants.restaurant_name, users.user_name FROM restaurants INNER JOIN posts INNER JOIN users WHERE posts.restaurant_id = ${id} and posts.user_id = users.id;`;

  connection.query(queryStr, (err, data) => {
    if(err) {
      console.log('error saving..')
      callback(err)
    } else {
      callback(data)
    }
  });
}

module.exports = {
  getRestaurants
}