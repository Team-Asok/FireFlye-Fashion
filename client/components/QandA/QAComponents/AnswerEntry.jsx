import React from 'react';

const AnswerEntry = ({ answer }) => {
  // line 5, prints single answer
  //console.log('this is answers ', answer[0][1].body)

  return (
    <ul id="AnswerEntry">
      Answer: {answer[0][1].body}
    </ul>
  )
};

export default AnswerEntry;