const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const shuffle = require('underscore').shuffle;
const sortBy = require('underscore').sortBy;
var faker = require('faker');

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
  generateRestaurant: function(id) {
    let randomName = names[this.randomIndexGenerator(names)];
    let randomFoodType = foodTypes[this.randomIndexGenerator(foodTypes)];
    let randomStoreType = storeTypes[this.randomIndexGenerator(storeTypes)];

    let randomStoreName = `${randomName}'s ${randomFoodType} ${randomStoreType}`

    let restaurantObj = {
      id: id,
      foodTypes: randomFoodType,
      storeTypes: randomStoreType,
      storeName: randomStoreName
    }

    return restaurantObj;
  },

  // randomly generate users
  generateUser: function(id) {
    let randomFirstName = names[this.randomIndexGenerator(names)];
    let randomLastName = lastNames[this.randomIndexGenerator(lastNames)];

    let randomCity = cityNames[this.randomIndexGenerator(cityNames)];
    let randomState = states[this.randomIndexGenerator(states)];

    let friends = this.randomNumberGenerator(1000);
    let reviews = this.randomNumberGenerator(500);
    let photos = this.randomNumberGenerator(100);

    let userName = `${randomFirstName} ${randomLastName}`;
    let location = `${randomCity}, ${randomState}`

    let userObj = {
      id: id,
      user_name: userName,
      location: location,
      friends: friends || 0,
      reviews: reviews || 0,
      photos: photos || 0,
    }

    return userObj;
  },

  // randomly generate post
  generatePost: function(range) {
    // predefined auto generate placeholder text
    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 8,
        min: 4
      },
      wordsPerSentence: {
        max: 16,
        min: 4
      }
    });

    let posts = [];

    for(let i = 0; i < range; i++) {
      let numOfParagraphs = 1 + Math.floor(Math.random() * 3);

      let post = {
        id: i,
        rating: Math.floor(Math.random() * 5 + 0),
        created_at: new Date(),
        check_in: Math.floor(Math.random() * 5 + 0),
        useful: Math.floor(Math.random() * 5 + 0),
        funny: Math.floor(Math.random() * 5 + 0),
        cool: Math.floor(Math.random() * 5 + 0),
        paragraphs: lorem.generateParagraphs(numOfParagraphs)
      }

      posts.push(post)
    }

    return posts;
  },

  // random create image for post
  generateImage: function(range) {
    let postImage = [];


    for(let i = 0; i < range; i++) {
      let randomPostIndex = this.randomNumberGenerator(range)
      let imageObj = {
        post_id: randomPostIndex,
        image_url: faker.image.imageUrl()
      }

      postImage.push(imageObj)
    }

    return postImage;
  },

  // random create relationship between restaurant, post and user
  createRelation: function(restaurants, users, posts) {
    let restaurantShuffle = shuffle(restaurants);
    let userShuffle = shuffle(users);
    let postShuffle = shuffle(posts);

    let relationTable = []

    for(let i = 0; i < restaurantShuffle.length; i++) {
      let randomRestaurantIndex = this.randomIndexGenerator(restaurants);
      let randomUserIndex = this.randomIndexGenerator(users);
      let randomPostIndex = this.randomIndexGenerator(posts);

      let table = {
        post_id: randomPostIndex,
        restaurant_id: randomRestaurantIndex,
        user_id: randomUserIndex
      }

      relationTable.push(table);
    }

    return sortBy(relationTable, "restaurant_id");
  }

};
