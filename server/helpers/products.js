const axios = require('axios');
const config = require('../config');

// GET PRODUCT LIST
const getProductList = () => {
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/`,
    headers: {
      'User-Agent': 'request',
      Authorization: config.API_KEY,
    },
  };
  return (
    axios(options)
      .then((response) => response)
      .catch((err) => err)
  );
};

module.exports = {
  getProductList,
};
/*
GET PRODUCT INFO
  product_id

GET PRODUCT STYLES
  product_id

GET RELATED PRODUCTS
  product_id
*/
