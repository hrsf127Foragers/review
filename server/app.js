const express = require('express');
const path = require('path');
const db = require('../db/mysql.js');

// require the dummy data
const data = require('./helper/restaurants.js');

console.log('data => ', data)

const app = express();

const PORT = 3000;

// enable express middleware
app.use(express.static(path.join(__dirname, '../client/dist')));

app.post('/api/insert', (req, res) => {
  db.insertData(data, function(err, data) => {
    if(err) {
      console.log('Error: insert => ', err);
    } else {
      console.log('Success: insert => ', data);
    }
  })
})

app.get('/api/:restaurant_id', (req, res) => {
  console.log('end-point (/api/:restaurant_id): item list by restaurant id');
  res.send('end-point (/api/:restaurant_id): item list by restaurant id');
});

app.get('/api/:restaurant_id/users', (req, res) => {
  console.log('end-point (/api/:restaurant_id/users): retrive all review by restaurant id')
  res.send('end-point (/api/:restaurant_id/users): retrive all review by restaurant id')
})


app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
})