import React from 'react';
import QAListEntry from './QAListEntry.jsx';

const QAList = ({ questions }) => {
  if (!questions) {
    return <ul></ul>
  } else {
    return (
      <ul id="QAList">
        {questions.map((question) =>
        <QAListEntry key={question.question_id} question={question} />
        )}
      </ul>
    )
  };
}
export default QAList;
