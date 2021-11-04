import React from 'react';
import LoadAnswers from './LoadAnswers.jsx'
import HelpfulButton from './HelpfulButton.jsx'
import ReportButton from './ReportButton.jsx'
// import sortQA from './sortQA.js'

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

  showAllAnswers () {
    if (!this.state.showAll) {
      return (
        this.state.limitedAnswers.map(answer =>
          <li key={answer.id}>
            <div>
              <div id="answer-name">
                {answer.answerer_name}
              </div>
              <div id="answer-body">
                {answer.body}
              </div>
              <div id="answer-date">
                {answer.date}
              </div>
            <HelpfulButton id={answer.id} path={`/qa/answers/${answer.id}/helpful`} helpfulness={answer.helpfulness}/>
            <ReportButton id={answer.id} path={`/qa/answers/${answer.id}/report`}/>
            </div>
          </li>
        )
      )
    } else {
      return (
        this.state.sortedAnswers.map(answer =>
          <li key={answer.id}>
            <div>
              <div id="answer-name">
                {answer.answerer_name}
              </div>
              <div id="answer-body">
                {answer.body}
              </div>
              <div id="answer-date">
                {answer.date}
              </div>
            <HelpfulButton id={answer.id} path={`/qa/answers/${answer.id}/helpful`} helpfulness={answer.helpfulness}/>
            <ReportButton id={answer.id} path={`/qa/answers/${answer.id}/report`}/>
            </div>
          </li>
        )
      )
    }
  }

  setView () {
    this.setState({showAll: true})
  }

  closeView () {
    this.setState({showAll: false})
  }

  render () {
    return (
        <ul>
          {this.showAllAnswers()}
        </ul>
    )
  }
};

export default AnswerEntry;

/**

const AnswerEntry = ({ answers }) => {

  let sortedAnswer = sortQA(answers)

  let singleAnswer = sortedAnswer.map(answer =>
    <li key={answer.id}>
      <div>
          <div id="answer-name">
            {answer.answerer_name}
          </div>
          <div id="answer-body">
            {answer.body}
          </div>
          <div id="answer-date">
            {answer.date}
          </div>
        <HelpfulButton id={answer.id} path={`/qa/answers/${answer.id}/helpful`} helpfulness={answer.helpfulness}/>
        <ReportButton id={answer.id} path={`/qa/answers/${answer.id}/report`}/>
      </div>
    </li>
  )

  return (
      <ul>
        {singleAnswer}
      </ul>
  )
};

 */