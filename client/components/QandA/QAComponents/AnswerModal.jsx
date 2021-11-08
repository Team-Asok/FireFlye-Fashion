import React from 'react';
import axios from 'axios'

class AnswerModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answer: '',
      name: '',
      email: '',
      photos: [],
      question_id: this.props.questionID,
      product_id: this.props.productID,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
      axios.post(`/qa/questions/${this.props.questionID}/answers`, {
        params: this.state.question_id,
        data: {
          body: this.state.question,
          name: this.state.name,
          email: this.state.email,
          photos: []
        }
      })
      .then((response) => {
        this.props.handleClose()
        this.props.getProductQandA(Number(this.state.product_id));
      })
      .catch((err) => {
        console.log(err)
      })
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render () {
    if (!this.props.show) {
      return null
    }
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="model-header">
            <h4 className="modal-title">Submit your Answer</h4>
            <div>{this.props.productName}: {this.props.questionBody}</div>
          </div>
          <div className="modal-body">
            <form onSubmit={this.handleSubmit}>
              <div className="modal-question">
              <label> ANSWER:*
                <textarea type="text" name="question" maxLength="1000" onChange={this.handleChange} required/>
              </label>
              </div>
              <div className="modal-name">
              <label> NAME:*
                <input type="text" name="name" placeholder="Example: jack543!" maxLength="60" onChange={this.handleChange} required/>
                <span>For privacy reasons, do not use your full name or email address</span>
              </label>
              </div>
              <div className="modal-email">
              </div>
              <label> EMAIL:*
                <input type="email" name="email" maxLength="60" placeholder="Example: jack@email.com" onChange={this.handleChange} required/>
                <span>For authentication reasons, you will not be emailed</span>
              </label>
              <div className="modal-submit">
              <label>
                <input type="submit" name="submit answer"/>
              </label>
              </div>
              <div className="modal-upload-pics">
                <label>
                  <button>Upload pictures</button>
                </label>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button className="modal-close-button" onClick={this.props.handleClose}>Close</button>
          </div>
        </div>
      </div>
    )
  }
}

export default AnswerModal;