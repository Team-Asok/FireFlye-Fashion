/* eslint-disable import/extensions */
/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import moment from "moment";
import LoadAnswers from "./LoadAnswers.jsx";
import HelpfulButton from "./HelpfulButton.jsx";
import ReportButton from "./ReportButton.jsx";

class AnswerEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedAnswers: this.props.answers,
      limitedAnswers: this.props.answers.slice(0, 2),
      showAll: false,
    };
    this.showAllAnswers = this.showAllAnswers.bind(this);
    this.setView = this.setView.bind(this);
    this.closeView = this.closeView.bind(this);
  }

  setView() {
    this.setState({ showAll: true });
  }

  closeView() {
    this.setState({ showAll: false });
  }

  showAllAnswers() {
    if (!this.state.showAll) {
      return this.state.limitedAnswers.map((answer) => (
        <li id="individual-answer" key={answer.id}>
          <div id="answer-body">{answer.body}</div>
          <div id="answer-info">
            by:{" "}
            {answer.answerer_name === "Seller" || "seller" ? (
              <strong>{answer.answerer_name}</strong>
            ) : (
              answer.answerer_name
            )}
            , {moment.utc(answer.date).format("MMMM Do YYYY")} |
            <HelpfulButton
              id={answer.id}
              path={`/qa/answers/${answer.id}/helpful`}
              helpfulness={answer.helpfulness}
            />{" "}
            |
            <ReportButton
              id={answer.id}
              path={`/qa/answers/${answer.id}/report`}
            />
          </div>
        </li>
      ));
    }
    return this.state.sortedAnswers.map((answer) => (
      <li id="individual-answer" key={answer.id}>
        <div id="answer-body">{answer.body}</div>
        <div id="answer-info">
          by:{" "}
          {answer.answerer_name === "Seller" || "seller" ? (
            <strong>{answer.answerer_name}</strong>
          ) : (
            answer.answerer_name
          )}
          , {moment.utc(answer.date).format("MMMM Do YYYY")}
          <HelpfulButton
            id={answer.id}
            path={`/qa/answers/${answer.id}/helpful`}
            helpfulness={answer.helpfulness}
          />
          <ReportButton
            onReport={this.answerReported}
            id={answer.id}
            path={`/qa/answers/${answer.id}/report`}
          />
        </div>
      </li>
    ));
  }

  render() {
    return (
      <ul id="answer-list">
        {this.showAllAnswers()}
        {this.state.sortedAnswers.length > 2 ? (
          <LoadAnswers
            onClick={this.setView}
            closeView={this.closeView}
            return={this.state.showAll}
          />
        ) : null}
      </ul>
    );
  }
}

export default AnswerEntry;
