import React from 'react';
import axios from 'axios';

const HelpfulAnswer = ({answerID}) => {
  const updateAnswerHelpful = (targetAnswer) => {
    axios.put(`/qa/answers/${targetAnswer}/helpful`, {
      params: targetAnswer
    })
    .then(response => response)
    .catch(err => err);
  }
  return (
    <button onClick={() => updateAnswerHelpful(answerID)} id="helpful-answer" type="button">Helpful answer?</button>
  )
}

export default HelpfulAnswer;