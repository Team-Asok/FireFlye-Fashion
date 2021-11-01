import React from 'react';
import HelpfulButton from './HelpfulButton.jsx'

const QuestionEntry = ({ questionBody }) => {
  return (
    <div id="QuestionBody">
      Question: {questionBody}
      <HelpfulButton />
    </div>
  )
};

export default QuestionEntry;