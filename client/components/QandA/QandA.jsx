import React from 'react';
import QAList from './QAComponents/QAList.jsx';
import AddQuestion from './QAComponents/AddQuestion.jsx'

const QandA = ({ qAndA }) => {
  return (
    <div id="QandA">
      Questions and Answers
      <AddQuestion />
      <QAList questions={qAndA.results}/>
    </div>
  );
};

export default QandA;
