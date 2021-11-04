import React from 'react';
import LoadAnswers from './LoadAnswers.jsx'
import HelpfulButton from './HelpfulButton.jsx'
import ReportButton from './ReportButton.jsx'
import sortQA from './sortQA.js'

const AnswerEntry = ({ answers }) => {

  let sortedAnswer = sortQA(answers)

  let singleAnswer = sortedAnswer.map(answer =>
    <li key={answer.id}>
      <div>
          <div id="answer-name">
            {answer.answerer_name}
          </div>
          <div id="answer-body">
            {answer.body}
          </div>
          <div id="answer-date">
            {answer.date}
          </div>
        <HelpfulButton id={answer.id} path={`/qa/answers/${answer.id}/helpful`} helpfulness={answer.helpfulness}/>
        <ReportButton id={answer.id} path={`/qa/answers/${answer.id}/report`}/>
      </div>
    </li>
  )

  return (
    <React.Fragment>
      <ul>
        {singleAnswer}
      </ul>
    </React.Fragment>
  )
};

export default AnswerEntry;