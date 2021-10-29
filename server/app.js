const express = require('express');

const app = express();

const port = 3000;

const product = require('./helpers/products');

const qa = require('./helpers/questions-answers');

const review = require('./helpers/review');

// middleware
app.use(express.json());
app.use(express.static('dist'));

app.listen(port, () => {
  console.log(`Currently listening to ${port}`);
});

/*
* PRODUCT REQUEST HANDLERS ------------------
*/
// GET ALL PRODUCTS
app.get('/products', (req, res) => {
  product.getProductList()
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

// GET PRODUCT INFO
app.get('/products/:product_id', (req, res) => {
  product.getProductInfo(req.params.product_id)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

// GET PRODUCT STYLES
app.get('/products/:product_id/styles', (req, res) => {
  product.getProductInfo(req.params.product_id)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

// GET RELATED PRODUCTS
app.get('/products/:product_id/related', (req, res) => {
  product.getProductInfo(req.params.product_id)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

/*
* Q&A REQUEST HANDLERS ------------------
*/
// GET ALL QUESTIONS SPECIFIC TO A PRODUCT ID
app.get('/qa/questions/:product_id', (req, res) => {
  // console.log('this is insde get qa', req.params); <--- PRODUCT ID
  qa.getAllQuestions(req.params.product_id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

/*
* REVIEW REQUEST HANDLERS ------------------
*/
// GET ALL REVIEWS SPECIFIC TO A PRODUCT ID
app.get('/reviews/:product_id', (req, res) => {
  review.getAllReviews(req.params.product_id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

// GET REVIEW METADATA
app.get('/reviews/meta', (req, res) => {
  review.getAllReviews(req.params.product_id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

// ----------------------------------
app.post('/', (req, res) => {
  res.send('this is from post request inside app.js');
});
