/* eslint-disable import/extensions */
/* eslint-disable array-callback-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";
import QAList from "./QAComponents/QAList.jsx";
import AddQuestion from "./QAComponents/AddQuestion.jsx";
import MoreAnsweredQuestions from "./QAComponents/MoreAnsweredQuestions.jsx";
import SearchAnswer from "./QAComponents/SearchAnswer.jsx";

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: this.props.qAndA.results,
      limitedQuestions: this.props.qAndA.results.slice(0, 2),
      showAll: false,
      search: "",
      found: [],
    };
    this.showAllQuestions = this.showAllQuestions.bind(this);
    this.setView = this.setView.bind(this);
    this.closeView = this.closeView.bind(this);
    this.search = this.search.bind(this);
    this.showSearchedQuestion = this.showSearchedQuestion.bind(this);
  }

  setView() {
    this.setState({ showAll: true });
  }

  showAllQuestions() {
    if (!this.state.showAll) {
      return (
        <QAList
          productName={this.props.productName}
          questions={this.state.limitedQuestions}
          productID={this.props.qAndA.product_id}
        />
      );
    }
    return (
      <QAList
        productName={this.props.productName}
        questions={this.state.questions}
        productID={this.props.qAndA.product_id}
      />
    );
  }

  closeView() {
    this.setState({ showAll: false });
  }

  showSearchedQuestion() {
    return (
      <QAList
        productName={this.props.productName}
        questions={this.state.found}
        productID={this.props.qAndA.product_id}
      />
    );
  }

  search(searchedTerm) {
    const result = [];
    if (searchedTerm.length >= 3) {
      this.setState({ search: searchedTerm });
      this.state.questions.filter((question) => {
        if (question.question_body.toLowerCase().includes(this.state.search)) {
          result.push(question);
        }
      });
    } else if (!searchedTerm.length) {
      this.setState({ search: "" });
      this.setState({ found: [] });
    }
    this.setState({ found: result });
  }

  render() {
    return (
      <div id="QandA">
        <h3 id="qa-title">Questions and Answers</h3>
        <SearchAnswer search={this.search} />
        {!this.state.found.length
          ? this.showAllQuestions()
          : this.showSearchedQuestion()}
        <div id="qa-buttons-container">
          <AddQuestion
            productID={this.props.qAndA.product_id}
            productName={this.props.productName}
          />
          {this.state.questions.length > 2 ? (
            <MoreAnsweredQuestions
              onClick={this.setView}
              closeView={this.closeView}
              return={this.state.showAll}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default QandA;
