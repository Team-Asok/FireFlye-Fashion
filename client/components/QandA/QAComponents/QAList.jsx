import React from 'react';
import QAListEntry from './QAListEntry.jsx'
import sortQA from './sortQA.js'

class QAList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: sortQA(this.props.questions),
      productID: this.props.productID,
      productName: this.props.productName
    }
  }

  render() {
    if (!this.state.questions.length) {
      return (
        <h4>Be the first one to ask a question!</h4>
      )
    } else {
      return (
      <ul id="qa-list">
        {this.props.questions.map(question =>
        <QAListEntry productName={this.state.productName} productID={this.state.productID} question={question} key={question.question_id} />
        )}
      </ul>
      )
    }
  }
}

export default QAList;