import React from 'react';
import QuestionModal from './QuestionModal.jsx'

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this)
  }
  showModal (e) {
    this.setState({show: true})
  }
  hideModal () {
    this.setState({show: false})
  }

  render () {
    return (
      <div className="add-question">
        <button onClick={(e) => this.showModal()}>ADD A QUESTION</button>
        <QuestionModal show={this.state.show} handleClose={this.hideModal}/>
      </div>
    )
  }
}

export default AddQuestion;

// <button id="add-question" type="button">Add a question</button>