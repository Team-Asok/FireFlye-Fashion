const axios = require('axios');
const config = require('../config');

// GET REVIEW LIST
const getAllReviews = (productID) => {
  let options = {
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
  let options = {
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

// POST REVIEW
const addReview = (paramsObj) => {
  let options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta',
    method: 'post',
    headers: {
      'User-Agent': 'request',
      Authorization: config.API_KEY,
    },
    params: paramsObj,
  };
  return (
    axios(options)
      .then((response) => response)
      .catch((err) => err)
  );
};

module.exports = {
  getAllReviews,
  getReviewMeta,
  addReview,
};

/*
PUT REVIEW HELPFUL
  review_id

PUT REVIEW REPORT
  review_id
*/
