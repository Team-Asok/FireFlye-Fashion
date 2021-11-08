import React from 'react';
import QuestionEntry from './QuestionEntry.jsx';
import AnswerEntry from './AnswerEntry.jsx';
import sortQA from './sortQA.js'

const QAListEntry = ({ question, getProductQandA, productID, productName }) => {
  let arrAnswer = Object.values(question.answers)

  return (
    <li>
      <div id="question-container">
        <QuestionEntry helpfulness={question.question_helpfulness} productID={productID} questionBody={question.question_body} questionID={question.question_id} getProductQandA={getProductQandA} productName={productName}/>
        <AnswerEntry answers={arrAnswer} questionBody={question.question_body} productName={productName}/>
      </div>
  </li>
  )
};

export default QAListEntry;
