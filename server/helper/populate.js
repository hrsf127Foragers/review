const mysql = require('mysql');
const connection = require('../../db/config.js');
const data = require('./seedData.js');

// declaration of data to be generate
let restaurantDataLimt = 10;
let userDataLimt = 10;
let postDataLimt = 10;
let postImageDataLimt = 10;

// declaration of restaurant information
const restaurantObj = {};

// function to randomly generate 100 restaurant's name
const getRestaurants = () => {
  let restaurants = [];

  for (var i = 1; i <= restaurantDataLimt; i++) {
    restaurants.push(data.generateRestaurant(i));
  }

  restaurantObj["restaurants"] = restaurants;
};

// function to randomly generate 100 users
const getUsers = () => {
  let users = [];

  for(let i = 1; i <= userDataLimt; i++) {
    users.push(data.generateUser(i));
  }

  restaurantObj["users"] = users;
}

// function to generate post
function getPost() {
  restaurantObj["posts"] = data.generatePost(postDataLimt, restaurantObj.restaurants, restaurantObj.users);
}

// function to generate post images
function getPostImage() {
  restaurantObj["post_images"] = data.generateImage(postImageDataLimt);
}

// function to create the relationship between restaurant, post and user
function createRelationship() {
  let relationTable = data.createRelation(restaurantObj.restaurants, restaurantObj.users, restaurantObj.posts)

  restaurantObj["relationTable"] = relationTable;
}

getRestaurants();
getUsers();
getPost();
getPostImage();
createRelationship();

console.log('before => ', restaurantObj)

// let relationTable = restaurantObj.relationTable;

// for(let i = 0; i < relationTable.length; i++) {
//   for(let j = 0; j < restaurantObj.posts.length; j++) {
//     if( relationTable[i].post_id === restaurantObj.posts[j].id) {
//       restaurantObj.posts[j].user_id = relationTable[i].user_id;
//       restaurantObj.posts[j].restaurant_id = relationTable[i].restaurant_id;
//     }
//   }
// }

// console.log('after =>', restaurantObj)
// ############################################################################################
// POPULATE THE DATABASE WITH THE DUMMY DATA
// ############################################################################################

// function to insert all the restaurant to mysql
const insertRestaurants = (restaurant, callback) => {
  let restaurantName = restaurant.storeName;

  let queryStr = `INSERT INTO restaurants (restaurant_name) VALUES ("${restaurantName}")`;

  connection.query(queryStr, (err, res) => {
    if(err) {
      console.log('error saving..')
      callback(err, null)
    } else {
      callback(null, 'Success')
    }
  });
}

let restaurantData = restaurantObj.restaurants;

for(let i = 0 ; i < restaurantData.length; i++) {
  insertRestaurants(restaurantData[i], (err, res) => {
    if(err) {
      console.log('Error saving', err)
    } else {
      console.log('Successfully save')
    }
  })
}

// function to insert all the users to mysql
const insertUsers = (user, callback) => {
  let queryStr = `INSERT INTO users (user_name, location, friends, reviews, photos) VALUES (?, ?, ?, ?, ?)`;

  connection.query(queryStr, [user.user_name, user.location, user.friends, user.reviews, user.photos], (err, res) => {
    if(err) {
      console.log('error saving..')
      callback(err, null)
    } else {
      callback(null, 'Success')
    }
  });

}

let userData = restaurantObj.users;

for(let i = 0 ; i < userData.length; i++) {
  insertUsers(userData[i], (err, res) => {
    if(err) {
      console.log('Error saving', err)
    } else {
      console.log('Successfully save')
    }
  })
}

// function to insert all the posts to mysql
const insertPosts = (post, callback) => {
  // console.log('testing => ', post)

  let queryStr = `INSERT INTO posts (rating, created_at, check_in, useful, funny, cool, post, user_id, restaurant_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  connection.query(queryStr, [post.rating, post.created_at, post.check_in, post.useful, post.funny, post.cool, post.post, post.user_id, post.restaurant_id], (err, res) => {
    if(err) {
      callback(err, null)
    } else {
      callback(null, res)
    }
  });

}

let postData = restaurantObj.posts;

for(let i = 0 ; i < postData.length; i++) {
  // insertPosts(postData[i], (err, res) => {
  //   if(err) {
  //     console.log('Error saving', err)
  //   } else {
  //     console.log('Successfully save')
  //   }
  // })
}


// function to insert all the posts to mysql
const insertPostImages = (image, callback) => {
  console.log('testing => ', image)

  let queryStr = `INSERT INTO post_images (post_id, image_url) VALUES (?, ?)`;

  connection.query(queryStr, [image.post_id, image.image_url], (err, res) => {
    if(err) {
      callback(err, null)
    } else {
      callback(null, res)
    }
  });

}

let postImageData = restaurantObj.post_images;

for(let i = 0 ; i < postImageData.length; i++) {
  // insertPostImages(postImageData[i], (err, res) => {
  //   if(err) {
  //     console.log('Error saving', err)
  //   } else {
  //     console.log('Successfully save')
  //   }
  // })
}
