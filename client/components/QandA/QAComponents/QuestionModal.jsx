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
              <input type="text" name="question"/>
            </label>
            </div>
            <div className="modal-name">
            <label> NAME:
              <input type="text" name="nickname"/>
            </label>
            </div>
            <div className="modal-email">
            </div>
            <label> EMAIL:
              <input type="text" name="email"/>
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