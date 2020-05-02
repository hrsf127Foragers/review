const mysql = require('mysql');
const connection = require('./config.js');

// function to insert all the restaurant to mysql
const getRestaurants = (callback) => {

  let queryStr = `SELECT * FROM restaurants`;

  connection.query(queryStr, (err, data) => {
    if(err) {
      console.log('error saving..')
      callback(err, null)
    } else {
      callback(null, data)
    }
  });
}

// function to get all the review given restaurant id
const getReviewByRestaurantId = (id, callback) => {

  let queryStr = `SELECT
                      restaurants.restaurant_name, restaurants.id as restaruantId, posts.restaurant_id, users.user_name, users.location, users.friends, users.reviews, users.photos, posts.rating, posts.created_at, posts.check_in, posts.check_in, posts.useful, posts.funny, posts.cool, posts.post
                    FROM
                      restaurants
                    INNER JOIN
                      posts
                    INNER JOIN
                      users
                    WHERE posts.restaurant_id = ${id} and restaurants.id = ${id}
                    ORDER BY created_at DESC`;

  connection.query(queryStr, (err, data) => {
    if(err) {
      console.log('error saving..')
      callback(err, null)
    } else {
      callback(null, data)
    }
  });
}

const getPosts = (callback) => {
  let queryStr = `SELECT * FROM posts`;

  connection.query(queryStr, (err, data) => {
    if(err) {
      console.log('error saving..')
      callback(err, null)
    } else {
      callback(null, data)
    }
  });
}

module.exports = {
  getRestaurants,
  getReviewByRestaurantId,
  getPosts
}