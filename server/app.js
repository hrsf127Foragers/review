const express = require('express');
const path = require('path');
const db = require('../db/model.js');

const app = express();

const PORT = 3000;

// enable express middleware
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/restaurants', (req, res) => {
  db.getRestaurants((err, data) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data)
    }
  })
})

app.get('/api/:restaurant_id', (req, res) => {
  console.log('end-point (/api/:restaurant_id): item list by restaurant id');
  db.getReviewByRestaurantId(req.params.restaurant_id, (err, data) => {
    if(err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data);
    }
  })
});

app.get('/api/:restaurant_id/users', (req, res) => {
  console.log('end-point (/api/:restaurant_id/users): retrive all review by restaurant id')
  res.send('end-point (/api/:restaurant_id/users): retrive all review by restaurant id')
})

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
})