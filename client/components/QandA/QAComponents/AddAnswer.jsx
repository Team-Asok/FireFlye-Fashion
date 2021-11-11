/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import AnswerModal from "./AnswerModal";

class AddAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    return (
      <>
        <button
          type="button"
          className="add-answer-button"
          id={`add-answer-button${this.props.questionID}`}
          onClick={() => this.showModal()}
        >
          Add Answer
        </button>
        <AnswerModal
          questionBody={this.props.questionBody}
          productName={this.props.productName}
          productID={this.props.productID}
          questionID={this.props.questionID}
          show={this.state.show}
          handleClose={this.hideModal}
        />
      </>
    );
  }
}

export default AddAnswer;
