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
      <React.Fragment>
        <span id="q-marker">Q:</span>
        <li id="question-container">
          <div>
            <div id="question-entry">
              <QuestionEntry
                helpfulness={this.state.question.question_helpfulness}
                productID={this.props.productID}
                productName={this.props.productName}
                questionBody={this.state.question.question_body}
                getProductQandA={this.props.getProductQandA}
                questionID={this.state.question.question_id}
              />
            </div>
            <div id="answer-entry">
            {this.state.answers.length ?<span id="a-marker">A:</span> : null}
              <AnswerEntry
                answers={this.state.answers}
                questionBody={this.state.question.question_body}
                productName={this.props.productName}
              />
            </div>
          </div>
        </li>
      </React.Fragment>

    )
  }
}

export default QAListEntry;