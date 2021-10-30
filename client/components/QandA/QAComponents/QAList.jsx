import React from 'react';
import QAListEntry from './QAListEntry.jsx';

const QAList = ({ questions }) => {
  if (!questions) {
    return <ul></ul>
  } else {
    let qaEntry = questions.map((question) => {
      <QAListEntry question={question} />
    })
    return (
      <ul id="QAList">
        {qaEntry}
      </ul>
    )
  };
}
export default QAList;
