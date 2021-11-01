import React from 'react';
import axios from 'axios';

const ReportAnswer = ({answerID}) => {
  const updateAnswerReport = (targetAnswer) => {
    axios.put(`/qa/answers/${targetAnswer}/report`, {
      params: targetAnswer
    })
    .then(response => response)
    .catch(err => err);
  }

  return (
    <button onClick={() => updateAnswerReport(answerID)} id="report-answer" type="button">Report answer!</button>
  )
}

export default ReportAnswer;