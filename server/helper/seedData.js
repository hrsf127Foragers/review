const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const shuffle = require('underscore').shuffle;
const sortBy = require('underscore').sortBy;

let names = ['Joe', 'Mike', 'Trevor', 'Servio', 'Charlie', 'Lou', 'Jake', 'Jack', 'Tom', 'Jill', 'Sandy', 'Beth', 'Bob', 'Lindsay', 'Mary', 'Carlos', 'Nick', 'Ben', 'Jerry', 'Scooby', 'Scrappy'];

let lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Davis', 'Wilson', 'Taylor', 'Thomas', 'Lee', 'Harris', 'Lewis', 'Robinson', 'Walker', 'Hall'];

let cityNames = ['Washington', 'Springfield', 'Franklin', 'Greenville', 'Bristol', 'Clinton', 'Fairview', 'Salem', 'Madison', 'Georgetown', 'Oakland', 'Riverside', 'Fresno', 'San Francisco', 'Waverly', 'Kingston', 'Dayton', 'Oxford', 'Midford', 'Chester', 'Burlington', 'Ashland', 'Springfield', 'Milton', 'Manchester', 'Clayton', 'Georgetown', 'Arlington', 'Salem', 'Pacifica'];

let states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IA', 'WI', 'NY', 'TX', 'OH', 'MN', 'GA', 'MN']

let foodTypes = ['Mexican', 'Tacos', 'Burritos', 'Pizza', 'Italian', 'American', 'Burgers', 'Seafood', 'Crab', 'Lobster', 'Dumplings', 'Fried Chicken', 'Chinese', 'Sandwiches', 'Sushi', 'Pancakes', 'Waffles', 'Beer'];

let storeTypes = ['Bistro', 'Stand', 'Shack', 'Restaurant', 'House', 'Parlor', 'Bar', 'Truck', 'Place', 'Kitchen', 'Corner', 'Spot'];

let date = [
  ['01', '02', '05', '10', '15', '12', '25'], // days
  ['01', '02', '05', '06', '08', '09', '11'], // months
  ['2014', '2015', '2016', '2017', '2018', '2019', '2020'], // years
]


module.exports = {
  // random generate index
  randomIndexGenerator: function(array) {
    return Math.floor(Math.random() * (array.length));
  },

  // random generate number by range
  randomNumberGenerator: function(range) {
    return Math.floor(Math.random() * range +1);
  },

  // randomly generate restaurant's name
  generateRestaurant: function(id) {
    let randomName = names[this.randomIndexGenerator(names)];
    let randomFoodType = foodTypes[this.randomIndexGenerator(foodTypes)];
    let randomStoreType = storeTypes[this.randomIndexGenerator(storeTypes)];

    let randomStoreName = `${randomName}'s ${randomFoodType} ${randomStoreType}`

    let restaurantObj = {
      id: id,
      // foodTypes: randomFoodType,
      // storeTypes: randomStoreType,
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
      image_url: 'https://loremflickr.com/g/320/240/user?lock' + id,
      location: location,
      friends: friends || 0,
      reviews: reviews || 0,
      photos: photos || 0,
    }

    return userObj;
  },

  // randomly generate post
  generatePost: function(range, restaurants, users) {
    // predefined auto generate placeholder text
    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 7,
        min: 2
      },
      wordsPerSentence: {
        max: 7,
        min: 3
      }
    });

    let posts = [];

    for(let i = 1; i <= range; i++) {
      let numOfParagraphs = 1 + Math.floor(Math.random() * 3);

      let dateLength = date[0].length -1;

      let randomDate = date[1][this.randomNumberGenerator(dateLength)] + '-' + date[0][this.randomNumberGenerator(dateLength)] + '-' + date[2][this.randomNumberGenerator(dateLength)];

      // console.log(`post: ${i} user: ${this.randomNumberGenerator(users)} restaurant: ${i%restaurants === 0 ? 1 : i % restaurants}`)

      let restaurantId = i%restaurants === 0 ? 1 : i % restaurants;

      let post = {
        id: i,
        rating: Math.floor(Math.random() * 5 + 0),
        created_at: randomDate,
        check_in: Math.floor(Math.random() * 5 + 0),
        useful: Math.floor(Math.random() * 5 + 0),
        funny: Math.floor(Math.random() * 5 + 0),
        cool: Math.floor(Math.random() * 5 + 0),
        user_id: this.randomNumberGenerator(users),
        restaurant_id: restaurantId,
        post: lorem.generateParagraphs(numOfParagraphs)
      }

      posts.push(post)
    }

    return posts;
  },

  // random create image for post
  generateImage: function(range) {
    let postImage = [];

    for(let i = 1; i <= range; i++) {
      let randomPostIndex = this.randomNumberGenerator(range)
      let imageObj = {
        post_id: randomPostIndex,
        review_image_url: 'https://loremflickr.com/g/320/240/restaurant?lock=' + i
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

    for(let i = 1; i <= postShuffle.length; i++) {
      let randomRestaurantIndex = this.randomNumberGenerator(restaurants.length);
      let randomUserIndex = this.randomNumberGenerator(users.length);
      let randomPostIndex = this.randomNumberGenerator(posts.length);

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