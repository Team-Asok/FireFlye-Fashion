import React from 'react';

const QuestionEntry = ({ questionBody }) => {
  return (
    <div id="QuestionBody">
      Question: {questionBody}
      <button>Helpful?</button>
      <button>Report!</button>
    </div>
  )
};

export default QuestionEntry;