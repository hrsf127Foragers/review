const express = require('express');
const path = require('path');
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
app.use(express.static(path.join(__dirname, '../client/dist')));

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

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
})