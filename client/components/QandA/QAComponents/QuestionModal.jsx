import React from 'react';

class QuestionModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      name: '',
      email: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('you asked this question ', this.state.question)
    console.log('this is the name ', this.state.name)
    console.log('this is the email ', this.state.email)
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
            <h4 className="modal-title">ADD YOUR QUESTION HERE</h4>
          </div>
          <div className="modal-body">
            <form onSubmit={this.handleSubmit}>
              <div className="modal-question">
              <label> QUESTION:*
                <input type="text" name="question" maxlength="1000" onChange={this.handleChange} required/>
              </label>
              </div>
              <div className="modal-name">
              <label> NAME:*
                <input type="text" name="name" placeholder="Example: jackson11!" maxlength="60" onChange={this.handleChange} required/>
                <span>For privacy reasons, do not use your full name or email address</span>
              </label>
              </div>
              <div className="modal-email">
              </div>
              <label> EMAIL:*
                <input type="email" name="email" maxlength="60" placeholder="Why did you like the product or not?" onChange={this.handleChange} required/>
                <span>For authentication reasons, you will not be emailed</span>
              </label>
              <div className="modal-submit">
              <label>
                <input type="submit" name="submit question"/>
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

export default QuestionModal;

/**
 question - req
 nickname - req
 email - req
 submit button

   if (!props.show) {
    return null
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="model-header">
          <h4 className="modal-title">ADD YOUR QUESTION HERE</h4>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="modal-question">
            <label> QUESTION:*
              <input type="text" name="question" maxlength="1000" required/>
            </label>
            </div>
            <div className="modal-name">
            <label> NAME:*
              <input type="text" name="nickname" placeholder="Example: jackson11!" maxlength="60" required/>
              <span>For privacy reasons, do not use your full name or email address</span>
            </label>
            </div>
            <div className="modal-email">
            </div>
            <label> EMAIL:*
              <input type="email" name="email" maxlength="60" placeholder="Why did you like the product or not?" required/>
              <span>For authentication reasons, you will not be emailed</span>
            </label>
            <div className="modal-submit">
            <label>
              <input type="submit" name="submit question" />
            </label>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button className="modal-close-button" onClick={props.handleClose}>Close</button>
        </div>
      </div>
    </div>
  )
 */