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
    // add params page and count later
  };
  return (
    axios(options)
      .then((response) => response)
      .catch((err) => err)
  );
};

// GET PRODUCT INFO
const getProductInfo = (productID) => {
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productID}`,
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
      .then((response) => response)
      .catch((err) => err)
  );
};

// GET PRODUCT STYLES
const getProductStyles = (productID) => {
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productID}/styles`,
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
      .then((response) => response)
      .catch((err) => err)
  );
};

// GET RELATED PRODUCTS
const getRelatedProducts = (productID) => {
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productID}/related`,
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
      .then((response) => response)
      .catch((err) => err)
  );
};

module.exports = {
  getProductList,
  getProductInfo,
  getProductStyles,
  getRelatedProducts,
};
