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
      showAll: false,
      search: '',
    }
    this.showAllQuestions = this.showAllQuestions.bind(this);
    this.setView = this.setView.bind(this);
    this.closeView = this.closeView.bind(this);
    this.search = this.search.bind(this);
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


  search (searchedTerm) {
    if (searchedTerm.length > 3) {
      this.setState({search: searchedTerm});
      //console.log('this is what im searching for ', this.state.search)
      this.state.questions.find((question) => {
        if (question.question_body.includes(this.state.search)) {
          console.log(question.question_body)
        }
      })
    }
  }

  render () {
    return (
      <div id="QandA">
        Questions and Answers
        <SearchAnswer search={this.search}/>
        {this.showAllQuestions()}
        <AddQuestion productID={this.props.qAndA.product_id} getProductQandA={this.props.getProductQandA}/>
        {this.state.questions.length > 2 ? <MoreAnsweredQuestions onClick={this.setView} closeView={this.closeView} return={this.state.showAll}/> : null}
      </div>
    );
  }
};

export default QandA;
