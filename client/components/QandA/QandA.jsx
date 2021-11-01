import React from 'react';
import QAList from './QAComponents/QAList.jsx';
import AddQuestion from './QAComponents/AddQuestion.jsx'
import MoreAnsweredQuestions from './QAComponents/MoreAnsweredQuestions.jsx'

const QandA = ({ qAndA }) => {
  return (
    <div id="QandA">
      Questions and Answers
      <QAList questions={qAndA.results}/>
      <AddQuestion />
      <MoreAnsweredQuestions />
    </div>
  );
};

export default QandA;
