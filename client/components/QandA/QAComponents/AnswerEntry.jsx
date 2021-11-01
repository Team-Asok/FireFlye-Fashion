import React from 'react';
import LoadAnswers from './LoadAnswers.jsx'

const AnswerEntry = ({ answer }) => {

  if (!answer[0]) {
    return null;
  } else {
    //let answer = answer[0][1];
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
        <LoadAnswers />
      </div>
    )
  }
};

export default AnswerEntry;