import React from 'react';
import ReviewList from './ReviewListContainer/ReviewList.jsx';
import ReviewMetaDataContainer from './MetaData/ReviewMetaDataContainer.jsx';

class RandR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allreviews: this.props.reviews,
      filteredreviews: this.props.reviews
    }
  }

  filterReviews(stars) {
    var filteredReviews = [];

 }



  render() {
    if (this.props.reviews.length === 0) {
      return null;
    }

    return (
    <div id="RandR">
      Reviews and ratings
      <ReviewMetaDataContainer metaData={this.props.metaData} filter={this.filterReviews.bind(this)} reviews={this.state.allreviews} />
      <ReviewList reviews={this.state.filteredreviews} />
    </div>
    )
  }
}

export default RandR
