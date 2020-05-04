const mysql = require('mysql');
const connection = require('./config.js');

// function to insert all the restaurant to mysql
const getRestaurants = (callback) => {

  let queryStr = `SELECT * FROM restaurants`;

  connection.query(queryStr, (err, data) => {
    if(err) {
      console.log('error retriving restaurants..')
      callback(err, null)
    } else {
      callback(null, data)
    }
  });
}

// function to get all the review given restaurant id
const getReviewByRestaurantId = (id, callback) => {

  let queryStr = `SELECT
                    *
                  FROM relation_table rt
                  INNER JOIN restaurants r
                    on rt.restaurant_id = r.id and r.id = ${id}
                  INNER JOIN users u
                    on rt.user_id = u.id
                  INNER JOIN posts p
                    on rt.post_id = p.id
                  ORDER BY STR_TO_DATE(created_at, '%m-%d-%Y') DESC`;

  connection.query(queryStr, (err, data) => {
    if(err) {
      console.log('error retreiving resturants by id..')
      callback(err, null)
    } else {
      console.log('retreiving resturants by id ', data)
      callback(null, data)
    }
  });
}

const getPosts = (callback) => {
  let queryStr = `SELECT * FROM posts`;

  connection.query(queryStr, (err, data) => {
    if(err) {
      console.log('error retreiving posts..')
      callback(err, null)
    } else {
      callback(null, data)
    }
  });
}

const getUsers = (callback) => {
  let queryStr = `SELECT * FROM users`;

  connection.query(queryStr, (err, data) => {
    if(err) {
      console.log('error retreiving users..')
      callback(err, null)
    } else {
      callback(null, data)
    }
  });
}

const getPostImage = (callback) => {
  let queryStr = `SELECT * FROM post_images`;

  connection.query(queryStr, (err, data) => {
    if(err) {
      console.log('error retreiving postImages..')
      callback(err, null)
    } else {
      callback(null, data)
    }
  });
}

module.exports = {
  getRestaurants,
  getReviewByRestaurantId,
  getPosts,
  getPostImage,
  getUsers
}