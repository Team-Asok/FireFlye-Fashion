/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import QuestionModal from "./QuestionModal.jsx";

class AddQuestion extends React.Component {
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
          id="add-question"
          onClick={() => this.showModal()}
        >
          Ask a question
        </button>
        <QuestionModal
          productID={this.props.productID}
          show={this.state.show}
          handleClose={this.hideModal}
          productName={this.props.productName}
        />
      </>
    );
  }
}

export default AddQuestion;
