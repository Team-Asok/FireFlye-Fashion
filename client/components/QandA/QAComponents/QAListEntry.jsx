import React from 'react';
import QuestionEntry from './QuestionEntry.jsx';
import AnswerEntry from './AnswerEntry.jsx';
import sortQA from './sortQA.js'

class QAListEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answers: Object.values(this.props.question.answers),
      question: this.props.question
    }
  }

  render() {
    return (
      <li>
        <div id="question-container">
          <div id="question-entry">
            <QuestionEntry
              helpfulness={this.state.question.question_helpfulness}
              productID={this.props.productID}
              productName={this.props.productName}
              questionBody={this.state.question.question_body}
              getProductQandA={this.getProductQandA}
              questionID={this.state.question.question_id}
            />
          </div>
          <div id="answer-entry">
            <AnswerEntry
            answers={this.state.answers}
            questionBody={this.state.question.question_body}
            productName={this.props.productName}
            />
          </div>
        </div>
      </li>
    )
  }
}

export default QAListEntry;