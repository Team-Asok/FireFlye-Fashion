const express = require('express');

const app = express();

const port = 3000;

const path = require('path');

const product = require('./helpers/products');

// middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, () => {
  console.log(`Currently listening to ${port}`);
});

app.get('/products', (req, res) => {
  product.getProductList()
    .then((response) => {
      res.send(response.data)
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post('/', (req, res) => {
  res.send('this is from post request inside app.js');
});
