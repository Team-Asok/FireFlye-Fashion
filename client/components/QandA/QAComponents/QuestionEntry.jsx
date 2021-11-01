import React from 'react';
import HelpfulButton from './HelpfulButton.jsx'
import ReportButton from './ReportButton.jsx'

const QuestionEntry = ({ questionBody, questionID }) => {
  return (
    <div id="question-entry">
      Question: {questionBody}
      <HelpfulButton id={questionID} path={`/qa/questions/${questionID}/helpful`}/>
      <ReportButton id={questionID} path={`/qa/questions/${questionID}/report`}/>
    </div>
  )
};

export default QuestionEntry;