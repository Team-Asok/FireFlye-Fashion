/* eslint-disable prefer-const */
const axios = require('axios');
const config = require('../config');

// GET QUESTIONS
const getAllQuestions = (productID) => {
  let options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/',
    headers: {
      'User-Agent': 'request',
      Authorization: config.API_KEY,
    },
    params: { // ADD PAGE AND COUNT PARAMS LATER
      product_id: productID,
    },
  };
  return (
    axios(options)
      .then((response) => response.data)
      .catch((err) => err)
  );
};

// GET ANSWERS
const getAnswers = (questionID) => {
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/:${questionId}/answers`,
    headers: {
      'User-Agent': 'request',
      Authorization: config.API_KEY,
    },
    params: { // ADD QUERY PARAMS LATER
      question_id: questionID,
    },
  };
  return (
    axios(options)
      .then((response) => response)
      .catch((err) => err)
  );
};

// POST QUESTIONS
const addQuestion = (paramsObj) => {
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions`,
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
      .catch((err) => err)
  );
};

// POST ANSWER
const addAnswer = (questionID, paramsObj) => {
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${questionID}/answers`,
    method: 'post',
    headers: {
      'User-Agent': 'request',
      Authorization: config.API_KEY,
    },
    data: paramsObj,
    params: {
      question_id: questionID,
    },
  };
  return (
    axios(options)
      .then((response) => response)
      .catch((err) => err)
  );
};

// PUT QUESTION HELPFUL
const markQuestionHelpful = (questionID) => {
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${questionID}/helpful`,
    method: 'put',
    headers: {
      'User-Agent': 'request',
      Authorization: config.API_KEY,
    },
    params: {
      question_id: questionID,
    },
  };
  return (
    axios(options)
      .then((response) => response)
      .catch((err) => err)
  );
};

// PUT QUESTION REPORT
const reportQuestion = (questionID) => {
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${questionID}/report`,
    method: 'put',
    headers: {
      'User-Agent': 'request',
      Authorization: config.API_KEY,
    },
    params: {
      question_id: questionID,
    },
    data: {
      reported: true
    }
  };
  return (
    axios(options)
      .then((response) => response)
      .catch((err) => err)
  );
};

// PUT ANSWER HELPFUL
const markAnswerHelpful = (answerID) => {
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${answerID}/helpful`,
    method: 'put',
    headers: {
      'User-Agent': 'request',
      Authorization: config.API_KEY,
    },
    params: {
      answer_id: answerID,
    },
  };
  return (
    axios(options)
      .then((response) => response)
      .catch((err) => err)
  );
};

// PUT QUESTION REPORT
const reportAnswer = (answerID) => {
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${answerID}/report`,
    method: 'put',
    headers: {
      'User-Agent': 'request',
      Authorization: config.API_KEY,
    },
    params: {
      answer_id: answerID,
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
  addQuestion,
  addAnswer,
  markQuestionHelpful,
  reportQuestion,
  markAnswerHelpful,
  reportAnswer,
};

/*

PUT QUESTIONS HELPFUL
  question_id

PUT QUESTIONS REPORT
  question_id

PUT ANSWERS REPORT
  answer_id

PUT ANSWERS HELPFUL
  answer_id
*/
