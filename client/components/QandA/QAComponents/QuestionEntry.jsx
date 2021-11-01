import React from 'react';
import HelpfulButton from './HelpfulButton.jsx'
import ReportButton from './ReportButton.jsx'

const QuestionEntry = ({ questionBody }) => {
  return (
    <div id="QuestionBody">
      Question: {questionBody}
      <HelpfulButton />
      <ReportButton />
    </div>
  )
};

export default QuestionEntry;