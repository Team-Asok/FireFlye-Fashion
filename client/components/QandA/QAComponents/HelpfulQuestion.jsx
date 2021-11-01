import React from 'react';
import axios from 'axios';

const HelpfulQuestion = ({questionID}) => {
  const updateQuestionHelpful = (targetQuestion) => {
    axios.put(`/qa/questions/${targetQuestion}/helpful`, {
      params : targetQuestion
    })
    .then(response => response)
    .catch(err => err);
  }

  return (
    <button onClick={() => updateQuestionHelpful(questionID)} id="helpful-question" type="button">Helpful question?</button>
  )
}

export default HelpfulQuestion;