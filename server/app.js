const express = require('express');
const path = require('path');
const db = require('../db/db.js');

const app = express();

const PORT = 3000;

// enable express middleware
app.use(express.static(path.join(__dirname, '../client/dist')));

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