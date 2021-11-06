import React from 'react';
import QAListEntry from './QAListEntry.jsx';
import sortByAnswers from './sortByAnswers.js'

const QAList = ({ questions, getProductQandA, productID }) => {
  let quesArr = sortByAnswers(questions)

  if (!quesArr) {
    return (
      <h4>Be the first one to ask a question!</h4>
    )
  } else {
    return (
      <ul id="qa-list">
        {quesArr.map((question) =>
        <QAListEntry productID={productID} getProductQandA={getProductQandA} key={question.question_id} question={question} />
        )}
      </ul>
    )
  };
}
export default QAList;
