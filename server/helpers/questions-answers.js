const axios = require('axios');
const config = require('../config');

// GET QUESTIONS
//   product_id
//   page
//   count
const getAllQuestions = () => {
  const options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/',
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

// GET ANSWERS
//   params
//     question_id
//   query parameters
//     page
//     count
const getAnswers = (questionId) => {
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe//qa/questions/:${questionId}/answers`,
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
  getAllQuestions,
  getAnswers,
};

/*
GET QUESTIONS
  product_id
  page
  count

GET ANSWERS
  params
    question_id
  query parameters
    page
    count

POST QUESTIONS
  body params
    body
    name
    email
    product_id

POST ANSWERS
  params
    question_id
  body params
    body
    name
    email
    photos

PUT QUESTIONS HELPFUL
  question_id

PUT QUESTIONS REPORT
  question_id

PUT ANSWERS REPORT
  answer_id

PUT ANSWERS HELPFUL
  answer_id
*/
