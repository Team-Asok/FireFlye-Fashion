import React from 'react';
import AnswerModal from './AnswerModal.jsx'

class AddAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
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
      <div>
        <button id="add-answer-button" value="123123"onClick={(e) => this.showModal()}>ANSWER THIS QUESTION</button>
        <AnswerModal questionBody={this.props.questionBody} productName={this.props.productName} getProductQandA={this.props.getProductQandA} productID={this.props.productID} questionID={this.props.questionID} show={this.state.show} handleClose={this.hideModal}/>
      </div>
    )
  }
}

export default AddAnswer;

