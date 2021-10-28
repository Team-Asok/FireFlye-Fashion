const axios = require('axios');
const config = require('../config');

// https://app-hrsei-api.herokuapp.com/api/fec2/:CAMPUS_CODE/.

const options = {
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products',
  headers: {
    'User-Agent': 'request',
    Authorization: config.API_KEY,
  },
};

const getProductList = () => {
  return (
    axios(options)
      .then((response) =>
        console.log(response.data))
      .catch((err) =>
        console.log(err))
  )
};

module.exports = {
  getProductList,
};
/*
GET PRODUCT LIST
  page
  count

GET PRODUCT INFO
  product_id

GET PRODUCT STYLES
  product_id

GET RELATED PRODUCTS
  product_id
*/
