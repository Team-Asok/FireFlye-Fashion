/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import QuestionEntry from "./QuestionEntry";
import AnswerEntry from "./AnswerEntry";

class QAListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: Object.values(this.props.question.answers),
      question: this.props.question,
    };
  }

  render() {
    return (
      <li id="question-container">
        <div id="question-entry">
          <QuestionEntry
            helpfulness={this.state.question.question_helpfulness}
            productID={this.props.productID}
            productName={this.props.productName}
            questionBody={this.state.question.question_body}
            questionID={this.state.question.question_id}
          />
        </div>
        <div id="answer-entry">
          {this.state.answers.length ? <span id="a-marker">A:</span> : null}
          <AnswerEntry
            answers={this.state.answers}
            questionBody={this.state.question.question_body}
            productName={this.props.productName}
          />
        </div>
      </li>
    );
  }
}

export default QAListEntry;
