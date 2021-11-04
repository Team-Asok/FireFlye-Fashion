import React from 'react';
import QAList from './QAComponents/QAList.jsx';
import AddQuestion from './QAComponents/AddQuestion.jsx'
import MoreAnsweredQuestions from './QAComponents/MoreAnsweredQuestions.jsx'
import SearchAnswer from './QAComponents/SearchAnswer.jsx'

class QandA extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: this.props.qAndA.results,
      limitedQuestions: this.props.qAndA.results.slice(0, 2),
      showAll: false
    }
    this.showAllQuestions = this.showAllQuestions.bind(this);
    this.setView = this.setView.bind(this);
    this.closeView = this.closeView.bind(this);
  }

  showAllQuestions () {
    if (!this.state.showAll) {
      return (
        <React.Fragment>
          <QAList questions={this.state.limitedQuestions} getProductQandA={this.props.getProductQandA} productID={this.props.qAndA.product_id}/>
        </React.Fragment>
      )
    } else {
      return (
        <QAList questions={this.state.questions} getProductQandA={this.props.getProductQandA} productID={this.props.qAndA.product_id}/>
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
      <div id="QandA">
        Questions and Answers
        <SearchAnswer />
        {this.showAllQuestions()}
        <AddQuestion productID={this.props.qAndA.product_id} getProductQandA={this.props.getProductQandA}/>
        {this.state.questions.length > 2 ? <MoreAnsweredQuestions onClick={this.setView} closeView={this.closeView} return={this.state.showAll}/> : null}
      </div>
    );
  }
};

export default QandA;
