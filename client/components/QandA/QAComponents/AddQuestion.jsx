import React from 'react';
import QuestionModal from './QuestionModal.jsx'

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalState: false
    }
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this)
  }
  showModal () {

  }
  hideModal () {

  }

  render () {
    return (
      <div className="add-question">
        <button>Show modal</button>
        <QuestionModal />
      </div>
    )
  }
}

export default AddQuestion;

// <button id="add-question" type="button">Add a question</button>