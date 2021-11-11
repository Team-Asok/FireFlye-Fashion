import React from 'react';
import HelpfulButton from './HelpfulButton.jsx'
import ReportButton from './ReportButton.jsx'
import AddAnswer from './AddAnswer.jsx'

class QuestionEntry extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <React.Fragment>
        <span id="q-marker">Q:&nbsp;</span>
        {this.props.questionBody}
        <span id="question-buttons">
          <AddAnswer
            questionBody={this.props.questionBody}
            productID={this.props.productID}
            questionID={this.props.questionID}
            productName={this.props.productName}
          />
          <HelpfulButton
            id={this.props.questionID}
            path={`/qa/questions/${this.props.questionID}/helpful`}
            helpfulness={this.props.helpfulness}
            productID={this.props.productID}
          />
          <ReportButton
            id={this.props.questionID}
            path={`/qa/questions/${this.props.questionID}/report`}
          />
        </span>
      </React.Fragment>
    )
  }
}

export default QuestionEntry;