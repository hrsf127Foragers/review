const express = require('express');
const path = require('path');
const model = require('../db/model.js');

const app = express();

const PORT = 3000;

// enable express middleware
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/restaurants', (req, res) => {
  model.getRestaurants((err, data) => {
    if(err) {
      res.status(500).send(err);
    } else {
      console.log('(/api/restaurants) => ', data)
      res.status(200).send(data)
    }
  })
})

app.get('/api/users', (req, res) => {
  model.getUsers((err, data) => {
    if(err) {
      res.status(500).send(err);
    } else {
      console.log('(/api/users) => ', data)
      res.status(200).send(data)
    }
  })
})

app.get('/api/posts', (req, res) => {
  model.getPosts((err, data) => {
    if(err) {
      res.status(500).send(err);
    } else {
      console.log('(/api/posts) => ', data)
      res.status(200).send(data)
    }
  })
})

app.get('/api/postImages', (req, res) => {
  model.getPostImage((err, data) => {
    if(err) {
      res.status(500).send(err);
    } else {
      console.log('(/api/posts) => ', data)
      res.status(200).send(data)
    }
  })
})

app.get('/api/:restaurant_id', (req, res) => {
  model.getReviewByRestaurantId(req.params.restaurant_id, (err, data) => {
    if(err) {
      res.status(500).send(err)
    } else {
      console.log('end-point (/api/:restaurant_id): item list by restaurant id =>', req.params.restaurant_id, data.length);
      res.status(200).send(data);
    }
  })
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
})