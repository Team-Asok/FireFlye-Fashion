import React from 'react';
import ReviewModal from './ReviewModal.jsx'

class AddReview extends React.Component {
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
      <>
        <button id="add-review" onClick={(e) => this.showModal()}>Add a Review</button>
        <ReviewModal getProductReviews={this.props.getProductReviews} productId={this.props.productId} show={this.state.show} handleClose={this.hideModal} metaData={this.props.metaData}/>
      </>
    )
  }
}

export default AddReview;