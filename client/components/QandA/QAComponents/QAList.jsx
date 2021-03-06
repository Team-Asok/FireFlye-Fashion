/* eslint-disable import/extensions */
/* eslint-disable react/no-unused-state */
/* eslint-disable func-names */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from "react";
import QAListEntry from "./QAListEntry.jsx";
import sortQA from "./sortQA";

class QAList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: sortQA(this.props.questions),
      productID: this.props.productID,
      productName: this.props.productName,
    };
  }

  render() {
    return (
      <ul id="qa-list">
        {this.props.questions.map((question) => (
          <QAListEntry
            productName={this.state.productName}
            productID={this.state.productID}
            question={question}
            key={question.question_id}
          />
        ))}
      </ul>
    );
  }
}

export default QAList;
