import React from 'react';
import LoadAnswers from './LoadAnswers.jsx'
import HelpfulButton from './HelpfulButton.jsx'
import ReportButton from './ReportButton.jsx'

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
        <HelpfulButton />
        <ReportButton />
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
        <HelpfulButton />
        <ReportButton />
        <LoadAnswers />
      </div>
    )
  }
};

export default AnswerEntry;