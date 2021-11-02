import React from 'react';

const QuestionModal = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

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
            <label> QUESTION:
              <input type="text" name="question" maxlength="1000"/>
            </label>
            </div>
            <div className="modal-name">
            <label> NAME:
              <input type="text" name="nickname" placeholder="Example: jackson11!" maxlength="60"/>
              <span>For privacy reasons, do not use your full name or email address</span>
            </label>
            </div>
            <div className="modal-email">
            </div>
            <label> EMAIL:
              <input type="text" name="email" maxlength="60" placeholder="Why did you like the product or not?"/>
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
}

export default QuestionModal;

/**
 question - req
 nickname - req
 email - req
 submit button
 */