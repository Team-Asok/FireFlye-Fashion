import React from 'react';
import HelpfulButton from './HelpfulButton.jsx'
import ReportButton from './ReportButton.jsx'

const QuestionEntry = ({ questionBody, questionID }) => {
  return (
    <div id="question-entry">
      Question: {questionBody}
      <HelpfulButton questionID={questionID} path={`/qa/questions/${questionID}/helpful`}/>
      <ReportButton questionID={questionID} path={`/qa/questions/${questionID}/report`}/>
    </div>
  )
};

export default QuestionEntry;