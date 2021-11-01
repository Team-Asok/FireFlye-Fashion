import React from 'react';
import QAList from './QAComponents/QAList.jsx';

const QandA = ({ qAndA }) => {
  return (
    <div id="QandA">
      Questions and Answers
      <QAList questions={qAndA.results}/>
    </div>
  );
};

export default QandA;
