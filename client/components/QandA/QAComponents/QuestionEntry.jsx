import React from 'react';
import HelpfulButton from './HelpfulButton.jsx'
import ReportButton from './ReportButton.jsx'
import AddAnswer from './AddAnswer.jsx'

const QuestionEntry = ({ questionBody, questionID, getProductQandA, productID, helpfulness, productName}) => {
  return (
    <div id="question-entry">
      Q: {questionBody}
      <div id="question-buttons">
        <AddAnswer questionBody={questionBody} productID={productID} questionID={questionID} getProductQandA={getProductQandA} productName={productName}/>
        <HelpfulButton id={questionID} path={`/qa/questions/${questionID}/helpful`} helpfulness={helpfulness} getProductQandA={getProductQandA} productID={productID}/>
        <ReportButton id={questionID} path={`/qa/questions/${questionID}/report`}/>
      </div>
    </div>
  )
};

export default QuestionEntry;