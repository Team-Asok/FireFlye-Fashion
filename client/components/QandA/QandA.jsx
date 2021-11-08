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
      limitedQuestions: this.props.qAndA.results.slice(0, 4),
      showAll: false,
      search: '',
      found: []
    }
    this.showAllQuestions = this.showAllQuestions.bind(this);
    this.setView = this.setView.bind(this);
    this.closeView = this.closeView.bind(this);
    this.search = this.search.bind(this);
    this.showSearchedQuestion = this.showSearchedQuestion.bind(this);
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

  showSearchedQuestion () {
    return (
      <QAList questions={this.state.found} getProductQandA={this.props.getProductQandA} productID={this.props.qAndA.product_id}/>
    )
  }

  search (searchedTerm) {
    let result = [];
    if (searchedTerm.length) {
      this.setState({search: searchedTerm});
      this.state.questions.filter((question) => {
        if (question.question_body.toLowerCase().includes(this.state.search)) {
          result.push(question)
        }
      })
    } else if (!searchedTerm.length) {
      this.setState({search: ''});
      this.setState({found: []})
    }
    this.setState({found: result})
  }

  render () {
    return (
      <div id="QandA">
        <h3 id="qa-title">
        Questions and Answers
        </h3>
        <SearchAnswer search={this.search}/>
        {!this.state.found.length ? this.showAllQuestions() : this.showSearchedQuestion()}
        <div id="qa-buttons-container">
          <AddQuestion productID={this.props.qAndA.product_id} getProductQandA={this.props.getProductQandA}/>
          {this.state.questions.length > 2 ? <MoreAnsweredQuestions onClick={this.setView} closeView={this.closeView} return={this.state.showAll}/> : null}
        </div>
      </div>
    );
  }
};

export default QandA;
