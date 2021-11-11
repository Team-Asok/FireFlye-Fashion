/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import axios from "axios";
import ReactFileReader from "react-file-reader";

class AnswerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      photos: [],
      thumbnail: "",
      question_id: this.props.questionID,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUploadPhoto = this.handleUploadPhoto.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`/qa/questions/${this.props.questionID}/answers`, {
        params: this.state.question_id,
        data: {
          body: this.state.question,
          name: this.state.name,
          email: this.state.email,
          photos: this.state.photos,
        },
      })
      .then(() => {
        this.props.handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleUploadPhoto(files) {
    const fileData = new FileReader();
    fileData.onloadend = (e) => {
      const content = e.target.result;
      this.setState({
        thumbnail: content,
        photos: files,
      });
    };
    fileData.readAsDataURL(files[0]);
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="model-header">
            <h4 className="modal-title">Submit your Answer</h4>
            <div>
              {this.props.productName}: {this.props.questionBody}
            </div>
          </div>
          <div className="modal-body">
            <form onSubmit={this.handleSubmit}>
              <div className="modal-question">
                <label>
                  {" "}
                  ANSWER:*
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
                    placeholder="Example: jack543!"
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
              <div className="modal-email" /> EMAIL:*
              <input
                type="email"
                name="email"
                maxLength="60"
                placeholder="Example: jack@email.com"
                onChange={this.handleChange}
                required
              />
              <label>
                <span>For authentication reasons, you will not be emailed</span>
              </label>
              <div className="modal-submit">
                <input type="submit" name="submit answer" />
              </div>
              <div className="modal-upload-pics">
                <ReactFileReader handleFiles={this.handleUploadPhoto}>
                  <button type="button">Upload Photos</button>
                </ReactFileReader>
                <p>Preview:</p>
                <img
                  alt="thumbnail"
                  src={this.state.thumbnail}
                  height="10%"
                  width="10%"
                />
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

export default AnswerModal;
