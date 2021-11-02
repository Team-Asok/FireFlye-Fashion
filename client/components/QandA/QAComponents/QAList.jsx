import React from 'react';
import QAListEntry from './QAListEntry.jsx';

const QAList = ({ questions, getProductQandA, productID }) => {
  if (!questions) {
    return (
    <ul id="qa-list">BE THE FIRST ONE TO ASK A QUESTION</ul>
    )
  } else {
    return (
      <ul id="qa-list">
        {questions.map((question) =>
        <QAListEntry productID={productID} getProductQandA={getProductQandA} key={question.question_id} question={question} />
        )}
      </ul>
    )
  };
}
export default QAList;
