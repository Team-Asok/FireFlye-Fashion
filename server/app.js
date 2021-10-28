const express = require('express');

const app = express();

const port = 3000;

const path = require('path');

const product = require('./helpers/products');

const qa = require('./helpers/questions-answers');

// middleware
app.use(express.json());
app.use(express.static('dist'));

app.listen(port, () => {
  console.log(`Currently listening to ${port}`);
});

app.get('/products', (req, res) => {
  product.getProductList()
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/qa/questions/:product_id', (req, res) => {
  console.log(req.url)
  console.log('this is insde get qa', req.params);
});

app.post('/', (req, res) => {
  res.send('this is from post request inside app.js');
});
