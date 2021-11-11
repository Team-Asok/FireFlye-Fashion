/* eslint-disable prefer-const */
const axios = require('axios');
const config = require('../config');

// GET REVIEW LIST
const getAllReviews = (productID, sort) => {
  let options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/',
    headers: {
      'User-Agent': 'request',
      Authorization: config.API_KEY,
    },
    params: {
      product_id: productID,
      count: 50,
      // eslint-disable-next-line object-shorthand
      sort: sort,
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
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews',
    method: 'post',
    headers: {
      'User-Agent': 'request',
      Authorization: config.API_KEY,
    },
    data: paramsObj,
  };
  return (
    axios(options)
      .then((response) => response)
      .catch((err) => console.log(err))
  );
};

// PUT REVIEW HELPFUL
const markReviewHelpful = (reviewID) => {
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${reviewID}/helpful`,
    method: 'put',
    headers: {
      'User-Agent': 'request',
      Authorization: config.API_KEY,
    },
    params: {
      review_id: reviewID,
    },
  };
  return (
    axios(options)
      .then((response) => response)
      .catch((err) => err)
  );
};

// PUT REVIEW REPORT
const reportReview = (reviewID) => {
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${reviewID}/report`,
    method: 'put',
    headers: {
      'User-Agent': 'request',
      Authorization: config.API_KEY,
    },
    params: {
      review_id: reviewID,
    },
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
  markReviewHelpful,
  reportReview,
};
