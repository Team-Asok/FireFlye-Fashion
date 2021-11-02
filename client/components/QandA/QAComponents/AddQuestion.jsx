import React from 'react';
import QuestionModal from './QuestionModal.jsx'

const AddQuestion = (props) => {

  return (
    <div className="add-question">
      <button>Show modal</button>
      <QuestionModal />
    </div>
  )
}

export default AddQuestion;

// <button id="add-question" type="button">Add a question</button>