import React from 'react';

const AnswerEntry = ({ answer }) => {
  // line 5, prints single answer
 // console.log('this is answers ', answer[0][1])

  return (
    <div id="AnswerEntry">
      <div>
      Answer: {answer[0][1].body}
      </div>
      <div>
      by: {answer[0][1].answerer_name}
      </div>
      <div>
      when: {answer[0][1].date}
      </div>
    </div>
  )
};

export default AnswerEntry;