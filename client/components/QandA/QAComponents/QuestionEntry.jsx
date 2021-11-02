import React from 'react';
import HelpfulButton from './HelpfulButton.jsx'
import ReportButton from './ReportButton.jsx'
import AddAnswer from './AddAnswer.jsx'

const QuestionEntry = ({ questionBody, questionID }) => {
  return (
    <div id="question-entry">
      Question: {questionBody}
      <div>
        <AddAnswer />
      </div>
      <HelpfulButton id={questionID} path={`/qa/questions/${questionID}/helpful`}/>
      <ReportButton id={questionID} path={`/qa/questions/${questionID}/report`}/>
    </div>
  )
};

export default QuestionEntry;