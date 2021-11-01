import React from 'react';
import LoadAnswers from './LoadAnswers.jsx'
import HelpfulAnswer from './HelpfulAnswer.jsx'
import ReportAnswer from './ReportAnswer.jsx'

const AnswerEntry = ({ answer }) => {

  if (!answer[0]) {
    return null;
  } else if (answer.length === 1) {
    return (
      <div id="answer-entry">
        <div>
        Answer: {answer[0][1].body}
        </div>
        <div>
        by: {answer[0][1].answerer_name}
        </div>
        <div>
        when: {answer[0][1].date}
        </div>
        <HelpfulAnswer />
        <ReportAnswer />
      </div>
    )
  } else {
    return (
      <div id="answer-entry">
        <div>
        Answer: {answer[0][1].body}
        </div>
        <div>
        by: {answer[0][1].answerer_name}
        </div>
        <div>
        when: {answer[0][1].date}
        </div>
        <HelpfulAnswer />
        <ReportAnswer />
        <LoadAnswers />
      </div>
    )
  }
};

export default AnswerEntry;