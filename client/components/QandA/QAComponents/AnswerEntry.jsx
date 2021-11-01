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
        <HelpfulButton id={answer[0][1].id} path={`/qa/answers/${answer[0][1].id}/helpful`}/>
        <ReportButton id={answer[0][1].id} path={`/qa/answers/${answer[0][1].id}/report`}/>
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
        <HelpfulButton id={answer[0][1].id} path={`/qa/answers/${answer[0][1].id}/helpful`}/>
        <ReportButton id={answer[0][1].id} path={`/qa/answers/${answer[0][1].id}/report`}/>
        <LoadAnswers />
      </div>
    )
  }
};

export default AnswerEntry;