import React from 'react';
import axios from 'axios';

const HelpfulQuestion = ({questionID}) => {
  console.log(questionID)
  const updateQuestion = (targetQuestion) => {
    axios.put(`/qa/questions/${targetQuestion}/helpful`, {
      params : targetQuestion
    })
    .then(response => response)
    .catch(err => err);
  }

  return (
    <button onClick={() => updateQuestion(questionID)} id="helpful-question" type="button">Helpful question?</button>
  )
}

export default HelpfulQuestion;