import React from 'react';
import QuestionEntry from './QuestionEntry.jsx';
import AnswerEntry from './AnswerEntry.jsx';
import sortQA from './sortQA.js'

const QAListEntry = ({ question, getProductQandA, productID }) => {
  let arrAnswer = Object.values(question.answers)

  return (
    <li>
      <div id="question-container">
        <QuestionEntry helpfulness={question.question_helpfulness} productID={productID} questionBody={question.question_body} questionID={question.question_id} getProductQandA={getProductQandA}/>
        <AnswerEntry answers={arrAnswer}/>
      </div>
  </li>
  )
};

export default QAListEntry;
