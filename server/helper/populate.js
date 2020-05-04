const mysql = require('mysql');
const connection = require('../../db/config.js');
const method = require('./seedData.js');

const randomGeneratedMethod = {
  // declaration of data to be generate
  restaurantDataLimt: 100,
  userDataLimt: 100,
  postDataLimt: 200,
  postImageDataLimt: 200,

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
    randomGeneratedMethod.restaurantObj["posts"] = method.generatePost(randomGeneratedMethod.postDataLimt, randomGeneratedMethod.restaurantObj.restaurants, randomGeneratedMethod.restaurantObj.users);
  },

  // function to generate post images
  generatePostImage: () => {
    randomGeneratedMethod.restaurantObj["post_images"] = method.generateImage(randomGeneratedMethod.postImageDataLimt);
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
// console.log(restaurantData.posts)


let relationTable = restaurantObj.relationTable;

for(let i = 0; i < relationTable.length; i++) {
  for(let j = 0; j < restaurantObj.posts.length; j++) {
    if(relationTable[i].post_id === restaurantObj.posts[j].id) {
      restaurantObj.posts[j].user_id = relationTable[i].user_id;
      restaurantObj.posts[j].restaurant_id = relationTable[i].restaurant_id;
    }
  }
}

// ############################################################################################
// POPULATE THE DATABASE WITH THE DUMMY DATA
// ############################################################################################
const databaseMethods = {
  // function to insert all the restaurant to mysql
  insertRestaurants: (restaurant, callback) => {
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
  },

  // let restaurantData = restaurantObj.restaurants;

  // restaurantLoop function
  restaurantLoop: (restaurants) => {
    for(let i = 0 ; i < restaurants.length; i++) {
      databaseMethods.insertRestaurants(restaurants[i], (err, res) => {
        if(err) {
          console.log('Error saving', err)
        } else {
          console.log('Successfully save restaurants: ', i)
        }
      })
    }
  },

  // function to insert all the users to mysql
  insertUsers: (user, callback) => {
    let queryStr = `INSERT INTO users (user_name, location, friends, reviews, photos) VALUES (?, ?, ?, ?, ?)`;

    connection.query(queryStr, [user.user_name, user.location, user.friends, user.reviews, user.photos], (err, res) => {
      if(err) {
        console.log('error saving..')
        callback(err, null)
      } else {
        callback(null, 'Success')
      }
    });
  },

  // let userData = restaurantObj.users;

  // userLoop function
  userLoop: (users) => {
    for(let i = 0 ; i < users.length; i++) {
      databaseMethods.insertUsers(users[i], (err, res) => {
        if(err) {
          console.log('Error saving', err)
        } else {
          console.log('Successfully save users: ', i)
        }
      })
    }
  },

  // function to insert all the posts to mysql
  insertPosts: (post, callback) => {
    let queryStr = `INSERT INTO posts (rating, created_at, check_in, useful, funny, cool, post, user_id, restaurant_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    connection.query(queryStr, [post.rating, post.created_at, post.check_in, post.useful, post.funny, post.cool, post.post,post.user_id, post.restaurant_id], (err, res) => {
      if(err) {
        callback(err, null)
      } else {
        callback(null, res)
      }
    });
  },

  // let postData = restaurantObj.posts;

  // postLoop function
  postLoop: (posts) => {
    for(let i = 0 ; i < posts.length; i++) {
      databaseMethods.insertPosts(posts[i], (err, res) => {
        if(err) {
          console.log('Error saving', err)
        } else {
          console.log('Successfully save posts:', i)
        }
      })
    }
  },


  // function to insert all the posts to mysql
  insertPostImages: (image, callback) => {
    let queryStr = `INSERT INTO post_images (post_id, image_url) VALUES (?, ?)`;

    connection.query(queryStr, [image.post_id, image.image_url], (err, res) => {
      if(err) {
        callback(err, null)
      } else {
        callback(null, res)
      }
    });

  },

  // let postImageData = restaurantObj.post_images;

  // postLoop function
  postImageLoop: (postImage) => {
    for(let i = 0 ; i < postImage.length; i++) {
      databaseMethods.insertPostImages(postImage[i], (err, res) => {
        if(err) {
          console.log('Error saving', err)
        } else {
          console.log('Successfully save postImage: ', i)
        }
      })
    }
    return;
  }
}

let restaurantDetail = randomGeneratedMethod.restaurantObj;

databaseMethods.restaurantLoop(restaurantDetail.restaurants);
databaseMethods.userLoop(restaurantDetail.users);
databaseMethods.postLoop(restaurantDetail.posts);
databaseMethods.postImageLoop(restaurantDetail.post_images);

