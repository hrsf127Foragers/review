const express = require('express');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');

const model = require('../db/model.js');

const app = express();

const PORT = 3001;


// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// enable express middleware
// app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(expressStaticGzip(path.join(__dirname, '../client/dist'), {
  enableBrotli: true,
  orderPreference: ['br', 'gz']
}));

app.get('/api/restaurants', (req, res) => {
  model.getRestaurants((err, data) => {
    if(err) {
      res.status(500).send(err);
    } else {
      console.log('(/api/restaurants) => ', data.length)
      res.status(200).send(data)
    }
  })
})

app.get('/api/users', (req, res) => {
  model.getUsers((err, data) => {
    if(err) {
      res.status(500).send(err);
    } else {
      console.log('(/api/users) => ', data.length)
      res.status(200).send(data)
    }
  })
})

app.get('/api/posts', (req, res) => {
  model.getPosts((err, data) => {
    if(err) {
      res.status(500).send(err);
    } else {
      console.log('(/api/posts) => ', data.length)
      res.status(200).send(data)
    }
  })
})

app.get('/api/postImages', (req, res) => {
  model.getPostImage((err, data) => {
    if(err) {
      res.status(500).send(err);
    } else {
      console.log('(/api/posts) => ', data.length)
      res.status(200).send(data)
    }
  })
})

app.get('/api/:restaurant_id/reviews', (req, res) => {
  model.getReviewByRestaurantId(req.params.restaurant_id, (err, data) => {
    if(err) {
      res.status(500).send(err)
    } else {
      // console.log('end-point (/api/:restaurant_id): item list by restaurant id =>', req.params.restaurant_id, data.length);
      res.status(200).send(data);
    }
  })
});


// testing with dummy data
// app.get('/api/:restaurant_id/reviews', (req, res) => {
//   let dummyData = [
//     {
//         "post_id": 1197,
//         "restaurant_id": 5,
//         "user_id": 73,
//         "id": 1197,
//         "restaurant_name": "Jack's Beer Stand",
//         "user_name": "Scooby Harris",
//         "image_url": "https://loremflickr.com/g/320/240/user?lock73",
//         "location": "Clayton, HI",
//         "friends": 358,
//         "reviews": 101,
//         "photos": 30,
//         "rating": 0,
//         "created_at": "05-15-2019",
//         "check_in": 1,
//         "useful": 4,
//         "funny": 2,
//         "cool": 0,
//         "post": "Laboris incididunt aute magna voluptate adipisicing. Nostrud do excepteur.\nIpsum sit aute est. Elit aute qui. In eu eu eiusmod. Irure in aliquip magna anim.",
//         "review_image_url": "https://loremflickr.com/g/320/240/restaurant?lock=1381"
//     }];

//     res.status(200).send(dummyData);
// });

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
})