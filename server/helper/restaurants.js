const data = require('./seedData.js');

// declaration of data to be generate
let limitData = 100;

// declaration of restaurant information
const restaurantObj = {};

// function to randomly generate 100 restaurant's name
const getRestaurants = () => {
  let restaurants = [];

  for (var i = 0; i < limitData; i++) {
    restaurants.push(data.generateRestaurant(i));
  }

  restaurantObj["restaurants"] = restaurants;
};

// function to randomly generate 100 users
const getUsers = () => {
  let users = [];

  for(let i = 0; i < limitData; i++) {
    users.push(data.generateUser(i));
  }

  restaurantObj["users"] = users;
}

// function to generate post
function getPost() {
  restaurantObj["posts"] = data.generatePost(limitData);
}

// function to generate post images
function getPostImage() {
  restaurantObj["post_images"] = data.generateImage(limitData);
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

// console.log(restaurantObj)
module.export = restaurantObj;
