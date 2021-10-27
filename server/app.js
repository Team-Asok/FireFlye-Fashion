const express = require('express');

const app = express();

const port = 3000;

const path = require('path');

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, () => {
  console.log(`Currently listening to ${port}`);
});

app.get('/', (req, res) => {
  res.send('this is from get request inside app.js');
});

app.post('/', (req, res) => {
  res.send('this is from post request inside app.js');
});
