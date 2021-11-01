import React from 'react';
import HelpfulQuestion from './HelpfulQuestion.jsx'
import ReportQuestion from './ReportQuestion.jsx'

const QuestionEntry = ({ questionBody, questionID }) => {
  return (
    <div id="question-entry">
      Question: {questionBody}
      <HelpfulQuestion questionID={questionID}/>
      <ReportQuestion questionID={questionID}/>
    </div>
  )
};

export default QuestionEntry;