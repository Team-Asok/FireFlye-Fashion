/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import axios from "axios";

class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      name: "",
      email: "",
      productID: this.props.productID,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/qa/questions", {
        data: {
          body: this.state.question,
          name: this.state.name,
          email: this.state.email,
          product_id: Number(this.state.productID),
        },
      })
      .then(() => {
        console.log("Question posted");
        this.props.handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="model-header">
            <h4 className="modal-title">Ask Your Question</h4>
            <div>About the {this.props.productName}</div>
          </div>
          <div className="modal-body">
            <form onSubmit={this.handleSubmit}>
              <div className="modal-question">
                <label>
                  {" "}
                  QUESTION:*
                  <textarea
                    type="text"
                    name="question"
                    maxLength="1000"
                    onChange={this.handleChange}
                    required
                  />
                </label>
              </div>
              <div className="modal-name">
                <label>
                  {" "}
                  NAME:*
                  <input
                    type="text"
                    name="name"
                    placeholder="Example: jackson11!"
                    maxLength="60"
                    onChange={this.handleChange}
                    required
                  />
                  <span>
                    For privacy reasons, do not use your full name or email
                    address
                  </span>
                </label>
              </div>
              <div className="modal-email" />
              <label>
                {" "}
                EMAIL:*
                <input
                  type="email"
                  name="email"
                  maxLength="60"
                  placeholder="Why did you like the product or not?"
                  onChange={this.handleChange}
                  required
                />
                <span>For authentication reasons, you will not be emailed</span>
              </label>
              <div className="modal-submit">
                <input type="submit" name="submit question" />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="modal-close-button"
              onClick={this.props.handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionModal;
