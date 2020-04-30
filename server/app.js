const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

// enable express middleware
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {

})


app.listent(PORT, () => {
  console.log(`Server is listening on http;//localhost:${PORT}`);
})