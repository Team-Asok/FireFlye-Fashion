const axios = require('axios');
const config = require('../config');

// GET REVIEW LIST
const getAllReviews = (productID) => {
  const options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/',
    headers: {
      'User-Agent': 'request',
      Authorization: config.API_KEY,
    },
    params: {
      product_id: productID,
    },
  };
  return (
    axios(options)
      .then((response) => response.data)
      .catch((err) => err)
  );
};

// GET REVIEW METADATA
const getReviewMeta = (productID) => {
  const options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta',
    headers: {
      'User-Agent': 'request',
      Authorization: config.API_KEY,
    },
    params: {
      product_id: productID,
    },
  };
  return (
    axios(options)
      .then((response) => response.data)
      .catch((err) => err)
  );
};

module.exports = {
  getAllReviews,
  getReviewMeta,
};
/*
POST REVIEW
  body params
    product_id
    rating
    summary
    body
    recommend
    name
    email
    photos
    characteristics

PUT REVIEW HELPFUL
  review_id

PUT REVIEW REPORT
  review_id
*/
