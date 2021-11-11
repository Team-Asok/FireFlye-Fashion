/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from "react";
import HelpfulButton from "./HelpfulButton";
import ReportButton from "./ReportButton";
import AddAnswer from "./AddAnswer";

class QuestionEntry extends React.Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}

export default QuestionEntry;
