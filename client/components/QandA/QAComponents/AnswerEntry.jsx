import React from 'react';

const AnswerEntry = ({ answer }) => {

  if (!answer[0]) {
    return null;
  } else {
    let answer = answer[0][1];
    return (
      <div id="AnswerEntry">
        <div>
        Answer: {answer.body}
        </div>
        <div>
        by: {answer.answerer_name}
        </div>
        <div>
        when: {answer.date}
        </div>
        <button>Load More Answers</button>
      </div>
    )
  }
};

export default AnswerEntry;