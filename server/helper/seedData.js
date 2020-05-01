let names = ['Joe', 'Mike', 'Trevor', 'Servio', 'Charlie', 'Lou', 'Jake', 'Jack', 'Tom', 'Jill', 'Sandy', 'Beth', 'Bob', 'Lindsay', 'Mary', 'Carlos', 'Nick', 'Ben', 'Jerry', 'Scooby', 'Scrappy'];

let lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Davis', 'Wilson', 'Taylor', 'Thomas', 'Lee', 'Harris', 'Lewis', 'Robinson', 'Walker', 'Hall'];

let cityNames = ['Washington', 'Springfield', 'Franklin', 'Greenville', 'Bristol', 'Clinton', 'Fairview', 'Salem', 'Madison', 'Georgetown', 'Oakland', 'Riverside', 'Fresno', 'San Francisco', 'Waverly', 'Kingston', 'Dayton', 'Oxford', 'Midford', 'Chester', 'Burlington', 'Ashland', 'Springfield', 'Milton', 'Manchester', 'Clayton', 'Georgetown', 'Arlington', 'Salem', 'Pacifica'];

let states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IA', 'WI', 'NY', 'TX', 'OH', 'MN', 'GA', 'MN']

let foodTypes = ['Mexican', 'Tacos', 'Burritos', 'Pizza', 'Italian', 'American', 'Burgers', 'Seafood', 'Crab', 'Lobster', 'Dumplings', 'Fried Chicken', 'Chinese', 'Sandwiches', 'Sushi', 'Pancakes', 'Waffles', 'Beer'];

let storeTypes = ['Bistro', 'Stand', 'Shack', 'Restaurant', 'House', 'Parlor', 'Bar', 'Truck', 'Place', 'Kitchen', 'Corner', 'Spot'];

module.exports = {
  // random generate index
  randomIndexGenerator: function(array) {
    return Math.floor(Math.random() * (array.length));
  },

  // random generate number by range
  randomNumberGenerator: function(range) {
    return Math.floor(Math.random() * range);
  },

  // randomly generate restaurant's name
  generateRestaurant: function() {
    let randomName = names[this.randomIndexGenerator(names)];
    let randomFoodType = foodTypes[this.randomIndexGenerator(foodTypes)];
    let randomStoreType = storeTypes[this.randomIndexGenerator(storeTypes)];

    let randomStoreName = `${randomName}'s ${randomFoodType} ${randomStoreType}`

    let restaurantObj = {
      foodTypes: randomFoodType,
      storeTypes: randomStoreType,
      storeName: randomStoreName
    }

    return restaurantObj;
  },

  // randomly generate users
  generateUser: function() {
    let randomFirstName = names[this.randomIndexGenerator(names)];
    let randomLastName = lastNames[this.randomIndexGenerator(lastNames)];

    let randomCity = cityNames[this.randomIndexGenerator(cityNames)];
    let randomState = states[this.randomIndexGenerator(states)];

    let friends = this.randomNumberGenerator(10000000);
    let reviews = this.randomNumberGenerator(1000);
    let photos = this.randomNumberGenerator(100);

    let userName = `${randomFirstName} ${randomLastName}`;
    let location = `${randomCity}, ${randomState}`

    let userObj = {
      user_name: userName,
      location: location,
      friends: friends || 0,
      reviews: reviews || 0,
      photos: photos || 0,
    }

    return userObj;
  }

};

