import React from 'react';
import LoadAnswers from './LoadAnswers.jsx'
import HelpfulButton from './HelpfulButton.jsx'
import ReportButton from './ReportButton.jsx'
import moment from 'moment'

class AnswerEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sortedAnswers: this.props.answers,
      limitedAnswers: this.props.answers.slice(0, 2),
      showAll: false
    }
    this.showAllAnswers = this.showAllAnswers.bind(this);
    this.setView = this.setView.bind(this);
    this.closeView = this.closeView.bind(this);
  }

  showAllAnswers() {
    if (!this.state.showAll) {
      return (
        this.state.limitedAnswers.map(answer =>
          <li key={answer.id}>
            <div>
              <div id="answer-body">
                {answer.body}
              </div>
              <div id="answer-info">
                by: {answer.answerer_name === 'Seller' || 'seller' ? <strong>{answer.answerer_name}</strong> : answer.answerer_name},
                {moment(answer.date).format('MMMM Do YYYY')} |
                <HelpfulButton id={answer.id} path={`/qa/answers/${answer.id}/helpful`} helpfulness={answer.helpfulness} /> |
                <ReportButton id={answer.id} path={`/qa/answers/${answer.id}/report`} />
              </div>
            </div>
          </li>
        )
      )
    } else {
      return (
        this.state.sortedAnswers.map(answer =>
          <li key={answer.id}>
            <div>
              <div id="answer-body">
                {answer.body}
              </div>
              <div id="answer-info">
              by: {answer.answerer_name === 'Seller' || 'seller' ? <strong>{answer.answerer_name}</strong> : answer.answerer_name},
                {moment(answer.date).format('MMMM Do YYYY')}
                <HelpfulButton id={answer.id} path={`/qa/answers/${answer.id}/helpful`} helpfulness={answer.helpfulness} />
                <ReportButton id={answer.id} path={`/qa/answers/${answer.id}/report`} />
              </div>
            </div>
          </li>
        )
      )
    }
  }

  setView() {
    this.setState({ showAll: true })
  }

  closeView() {
    this.setState({ showAll: false })
  }

  render() {
      return (
        <ul> A:
          {this.showAllAnswers()}
          {this.state.sortedAnswers.length > 2 ? <LoadAnswers onClick={this.setView} closeView={this.closeView} return={this.state.showAll} /> : null}
        </ul>
      )
  }
};

export default AnswerEntry;
