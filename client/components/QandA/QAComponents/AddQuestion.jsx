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
      <React.Fragment>
        <button type="button" id="add-question" onClick={(e) => this.showModal()}>ADD A QUESTION</button>
        <QuestionModal getProductQandA={this.props.getProductQandA} productID={this.props.productID} show={this.state.show} handleClose={this.hideModal}/>
      </React.Fragment>
    )
  }
}

export default AddQuestion;
