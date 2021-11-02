import React from 'react';
import QuestionEntry from './QuestionEntry.jsx';
import AnswerEntry from './AnswerEntry.jsx';

const QAListEntry = ({ question, getProductQandA, productID }) => {
 // console.log('this is questions isnde qa list entry ', question)
  let answerArray = Object.entries(question.answers)
  return (
    <li>
      <div questionID="question-entry">
        <QuestionEntry productID={productID} questionBody={question.question_body} questionID={question.question_id} getProductQandA={getProductQandA}/>
        <AnswerEntry answer={answerArray}/>
      </div>
  </li>
  )
};

export default QAListEntry;

// <AnswerEntry answer={question.answers} />