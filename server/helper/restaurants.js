const data = require('./seedData.js');

// declaration of data to be generate
let limitData = 100;

// declaration of restaurant information
const restaurantObj = {};

// function to randomly generate 100 restaurant's name
const getRestaurants = () => {
  let restaurants = [];

  for (var i = 0; i < limitData; i++) {
    restaurants.push(data.generateRestaurant());
  }

  restaurantObj.restaurants = restaurants;
};

getRestaurants();

// function to randomly generate 100 users
const getUsers = () => {
  let users = [];

  for(let i = 0; i < limitData; i++) {
    users.push(data.generateUser());
  }

  restaurantObj.users = users;
}

getUsers();

console.log('random generated data => ', restaurantObj)