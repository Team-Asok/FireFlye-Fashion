import React from 'react';
import axios from 'axios';

const ReportQuestion = ({questionID}) => {
  const updateQuestionReport = (targetQuestion) => {
    axios.put(`/qa/questions/${targetQuestion}/report`, {
      params: targetQuestion,
    })
    .then(response => response)
    .catch(err => err)
  }
  return (
    <button onClick={() => updateQuestionReport(questionID)} id="report-question" type="button">Report question!</button>
  )
}

export default ReportQuestion;