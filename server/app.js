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
  product.getProductStyles(req.params.product_id)
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

// GET ALL ANSWER SPECIFIC TO A PRODUCT ID
app.get('/qa/questions/:question_id/answers', (req, res) => {
  qa.getAnswers(req.params.question_id)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

// POST QUESTION
app.post('/qa/questions', (req, res) => {
  qa.addQuestion(req.body.data)
    .then((response) => {
      res.status(201).send();
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// POST ANSWER
app.post('qa/questions/:question_id/answers', (req, res) => {
  let answerData = {
    body: req.data.body,
    name: req.data.name,
    email: req.data.email,
    photos: req.data.photos,
  };
  qa.addAnswer(req.params.question_id, answerData)
    .then((response) => {
      res.status(201).send();
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// MARK QUESTION HELPFUL
app.put('/qa/questions/:question_id/helpful', (req, res) => {
  qa.markQuestionHelpful(req.params.question_id)
    .then((response) => {
      res.status(204).send();
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// REPORT QUESTION
app.put('/qa/questions/:question_id/report', (req, res) => {
  qa.reportQuestion(req.params.question_id)
    .then((response) => {
      res.status(204).send();
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// MARK answer HELPFUL
app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  qa.markAnswerHelpful(req.params.answer_id)
    .then((response) => {
      res.status(204).send();
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// REPORT ANSWER
app.put('/qa/answers/:answer_id/report', (req, res) => {
  qa.reportAnswer(req.params.answer_id)
    .then((response) => {
      res.status(204).send();
    })
    .catch((err) => {
      res.status(500).send(err);
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
app.get('/reviews/meta/:product_id', (req, res) => {
  review.getReviewMeta(req.params.product_id)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

// POST REVIEW
app.post('/reviews', (req, res) => {
  let reviewData = {
    product_id: req.data.product_id,
    rating: req.data.rating,
    summary: req.data.summary,
    body: req.data.body,
    recommend: req.data.recommend,
    name: req.data.name,
    email: req.data.email,
    photos: req.data.photos,
    characteristics: req.data.characteristics,
  };
  review.addReview(reviewData)
    .then((response) => {
      res.status(201).send();
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// PUT REVIEW AS HELPFUL
app.put('/reviews/:review_id/helpful', (req, res) => {
  review.markReviewHelpful(req.params.review_id)
    .then((response) => {
      res.status(204).send();
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// PUT REVIEW REPORT
app.put('/reviews/:review_id/report', (req, res) => {
  review.reportReview(req.params.review_id)
    .then((response) => {
      res.status(204).send();
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// ----------------------------------
app.post('/', (req, res) => {
  res.send('this is from post request inside app.js');
});
