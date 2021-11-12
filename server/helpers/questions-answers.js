const axios = require('axios');
const config = require('../config');

// GET QUESTIONS
const getAllQuestions = (productID) => {
  const options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/',
    headers: {
      'User-Agent': 'request',
      Authorization: config.API_KEY,
    },
    params: { // ADD PAGE AND COUNT PARAMS LATER
      product_id: productID,
      count: 15
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
  const options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${questionID}/answers`,
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
  const options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions',
    method: 'post',
    headers: {
      'User-Agent': 'request',
      Authorization: config.API_KEY,
    },
    data: paramsObj
  };
  return (
    axios(options)
      .then((response) => response)
      .catch((err) => err)
  );
};

// POST ANSWER
const addAnswer = (questionID, paramsObj) => {
  const options = {
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
  const options = {
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
  const options = {
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
      reported: true,
    },
  };
  return (
    axios(options)
      .then((response) => response)
      .catch((err) => err)
  );
};

// PUT ANSWER HELPFUL
const markAnswerHelpful = (answerID) => {
  const options = {
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
  const options = {
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
