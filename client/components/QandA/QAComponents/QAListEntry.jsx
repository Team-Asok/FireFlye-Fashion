import React from 'react';

const QAListEntry = ({ question }) => {
  console.log('this is questions isnde qa list entry ', question)
  return (
    <li>
      <div>
       id: {question.question_id}
      </div>
      <div>
       question: {question.question_body}
      </div>
      <div>
       asker: {question.asker_name}
      </div>
  </li>
  )
};

export default QAListEntry;