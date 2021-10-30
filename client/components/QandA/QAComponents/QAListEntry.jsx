import React from 'react';
import QuestionEntry from './QuestionEntry.jsx';
import AnswerEntry from './AnswerEntry.jsx';

const QAListEntry = ({ question }) => {
 // console.log('this is questions isnde qa list entry ', question)
  let answerArray = Object.entries(question.answers)
  return (
    <li>
      <div id="QuestionEntry">
       <QuestionEntry questionBody={question.question_body}/>
      </div>
      <ul id="AnswerEntry">
        <AnswerEntry answer={answerArray}/>
      </ul>
  </li>
  )
};

export default QAListEntry;

// <AnswerEntry answer={question.answers} />