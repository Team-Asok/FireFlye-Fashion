import React from 'react';
import QAList from './QAComponents/QAList.jsx';
import AddQuestion from './QAComponents/AddQuestion.jsx'
import MoreAnsweredQuestions from './QAComponents/MoreAnsweredQuestions.jsx'
import SearchAnswer from './QAComponents/SearchAnswer.jsx'

class QandA extends React.Component {

  render () {
    return (
      <div id="QandA">
        Questions and Answers
        <SearchAnswer />
        <QAList questions={qAndA.results} getProductQandA={getProductQandA} productID={qAndA.product_id}/>
        <AddQuestion productID={qAndA.product_id} getProductQandA={getProductQandA}/>
        <MoreAnsweredQuestions />
      </div>
    );
  }
};



export default QandA;
