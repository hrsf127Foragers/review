const mysql = require('mysql');
// const connection = require('../../db/config.js');
const method = require('./seedData.js');
const fs = require('fs');

let mysqlStr = `
  -- drop the database if there exists the same database
  DROP DATABASE IF EXISTS reviews;

  -- create the database
  CREATE DATABASE reviews;

  -- change to use the database
  USE reviews;


  -- create table restaurants
  CREATE TABLE restaurants (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    restaurant_name VARCHAR(100)
  );

  -- create table users
  CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(100),
    image_url VARCHAR(100),
    location VARCHAR(100),
    friends INT,
    reviews INT,
    photos INT,
    PRIMARY KEY (id)
  );

  -- create table posts
  CREATE TABLE posts (
    id INT NOT NULL AUTO_INCREMENT,
    rating INT,
    created_at VARCHAR(50),
    check_in INT,
    useful INT,
    funny INT,
    cool INT,
    post VARCHAR(1000),
    PRIMARY KEY (id)
  );

  CREATE TABLE relation_table (
    post_id INT,
    restaurant_id INT,
    user_id INT,
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
  );

  -- create table post_images
  CREATE TABLE post_images (
    post_id INT NOT NULL,
    review_image_url VARCHAR(100) NOT NULL,
    FOREIGN KEY (post_id) REFERENCES posts(id)
  ); \n
`;

const randomGeneratedMethod = {
  // declaration of data to be generate
  restaurantDataLimt: 100,
  userDataLimt: 100,
  postDataLimt: 2000,
  postImageDataLimt: 1000,

  // declaration of restaurant information
  restaurantObj: {},

  // function to randomly generate 100 restaurant's name
  generateRestaurants: () => {
    let restaurants = [];

    for (var i = 1; i <= randomGeneratedMethod.restaurantDataLimt; i++) {
      restaurants.push(method.generateRestaurant(i));
    }

    randomGeneratedMethod.restaurantObj["restaurants"] = restaurants;
  },

  // function to randomly generate 100 users
  generateUsers: () => {
    let users = [];

    for(let i = 1; i <= randomGeneratedMethod.userDataLimt; i++) {
      users.push(method.generateUser(i));
    }

    randomGeneratedMethod.restaurantObj["users"] = users;
  },

  // function to generate post
  generatePost: () => {
    randomGeneratedMethod.restaurantObj["posts"] = method.generatePost(randomGeneratedMethod.postDataLimt, randomGeneratedMethod.restaurantDataLimt, randomGeneratedMethod.userDataLimt);
  },

  // function to generate post images
  generatePostImage: () => {
    randomGeneratedMethod.restaurantObj["post_images"] = method.generateImage(randomGeneratedMethod.postDataLimt);
  },

  // function to create the relationship between restaurant, post and user
  generateRelationship: () => {
    let relationTable = method.createRelation(randomGeneratedMethod.restaurantObj.restaurants, randomGeneratedMethod.restaurantObj.users, randomGeneratedMethod.restaurantObj.posts)

    randomGeneratedMethod.restaurantObj["relationTable"] = relationTable;
  }

}

randomGeneratedMethod.generateRestaurants();
randomGeneratedMethod.generateUsers();
randomGeneratedMethod.generatePost();
randomGeneratedMethod.generatePostImage();
randomGeneratedMethod.generateRelationship();

let restaurantData = randomGeneratedMethod.restaurantObj;
// console.log(restaurantData)


// ############################################################################################
// POPULATE THE DATABASE WITH THE DUMMY DATA
// ############################################################################################
const databaseMethods = {
  // function to insert all the restaurant to mysql
  insertRestaurants: (restaurant) => {
    let restaurantName = restaurant.storeName;

    // let queryStr = `INSERT INTO restaurants (restaurant_name) VALUES ("${restaurantName}")`;

    mysqlStr += `INSERT INTO restaurants (restaurant_name) VALUES ("${restaurantName}");\n`

  },

  // restaurantLoop function
  restaurantLoop: (restaurants) => {
    for(let i = 0 ; i < restaurants.length; i++) {
      databaseMethods.insertRestaurants(restaurants[i])
    }
  },

  // function to insert all the users to mysql
  insertUsers: (user) => {
    // let queryStr = `INSERT INTO users (user_name, image_url, location, friends, reviews, photos) VALUES (?, ?, ?, ?, ?, ?)`;

    mysqlStr += `INSERT INTO users (user_name, image_url, location, friends, reviews, photos) VALUES ("${user.user_name}", "${user.image_url}", "${user.location}", ${user.friends}, ${user.reviews}, ${user.photos});\n`

  },

  // userLoop function
  userLoop: (users) => {
    for(let i = 0 ; i < users.length; i++) {
      databaseMethods.insertUsers(users[i])
    }
  },

  // function to insert all the posts to mysql
  insertPosts: (post) => {
    // let queryStr = `INSERT INTO posts (rating, created_at, check_in, useful, funny, cool, post) VALUES (post.rating, post.created_at, post.check_in, post.useful, post.funny, post.cool, post.post)`;

    mysqlStr += `INSERT INTO posts (rating, created_at, check_in, useful, funny, cool, post) VALUES (${post.rating}, "${post.created_at}", ${post.check_in}, ${post.useful}, ${post.funny}, ${post.cool}, "${post.post}");\n`;

  },

  // postLoop function
  postLoop: (posts) => {
    for(let i = 0 ; i < posts.length; i++) {
      databaseMethods.insertPosts(posts[i])
    }
  },

  // function to insert relation data to mysql
  insertRelationTable: (relation, callback) => {
    // let queryStr = `INSERT INTO relation_table (post_id, restaurant_id, user_id) VALUES (${relation.post_id}, ${relation.restaurant_id}, ${relation.user_id})`;

    mysqlStr += `INSERT INTO relation_table (post_id, restaurant_id, user_id) VALUES (${relation.post_id}, ${relation.restaurant_id}, ${relation.user_id});\n`;

  },

  // relationTable loop
  // postLoop function
  relationTableLoop: (relation) => {
    for(let i = 0 ; i < relation.length; i++) {
      databaseMethods.insertRelationTable(relation[i]);
    }
  },

  // function to insert all the posts to mysql
  insertPostImages: (image) => {
    // let queryStr = `INSERT INTO post_images (post_id, review_image_url) VALUES (${image.post_id}, ${image.review_image_url})\n`;

    mysqlStr += `INSERT INTO post_images (post_id, review_image_url) VALUES (${image.post_id}, "${image.review_image_url}");\n`;


  },

  // postLoop function
  postImageLoop: (postImage) => {
    for(let i = 0 ; i < postImage.length; i++) {
      databaseMethods.insertPostImages(postImage[i]);
    }
  }
}

let restaurantDetail = randomGeneratedMethod.restaurantObj;

databaseMethods.restaurantLoop(restaurantDetail.restaurants);
databaseMethods.userLoop(restaurantDetail.users);
databaseMethods.postLoop(restaurantDetail.posts);
databaseMethods.relationTableLoop(restaurantDetail.relationTable);
databaseMethods.postImageLoop(restaurantDetail.post_images);

fs.writeFile('schema.sql', mysqlStr, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

