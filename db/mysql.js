const mysql = require('mysql');
const mysqlConfig = require('./db.js');

let connection = mysql.createConnection(mysqlConfig);

connection.connect(() => {
  console.log('Mysql database is connected.')
});

// function to insert all the restaurant to mysql
const insertData = (data, callback) => {
  let restaurants = data.restaurants;
  let posts = data.posts;
  let users = data.users;



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