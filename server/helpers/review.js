const axios = require('axios');
const config = require('../config');

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

module.exports = {
  getAllReviews,
};
/*
GET REVIEW LIST
  query params
    page
    count
    sort
    product_id

GET REVIEW METADATA
  query params
    product_id

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
