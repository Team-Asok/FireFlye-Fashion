const axios = require('axios');
const config = require('../config');

// GET CART
const getCart = () => {
  const options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/cart',
    headers: {
      'User-Agent': 'request',
      Authorization: config.API_KEY,
    },
  };
  return (
    axios(options)
      .then((response) => response.data)
      .catch((err) => err)
  );
};

// POST CART
const addCart = (skuID) => {
  const options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/cart',
    method: 'post',
    headers: {
      'User-Agent': 'request',
      Authorization: config.API_KEY,
    },
    data: {
      sku_id: skuID,
    },
  };
  return (
    axios(options)
      .then((response) => response.data)
      .catch((err) => err)
  );
};

module.exports = {
  addCart,
  getCart,
};
