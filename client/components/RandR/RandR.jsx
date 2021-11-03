import React from 'react';
import ReviewList from './ReviewListContainer/ReviewList.jsx';
import ReviewMetaDataContainer from './MetaData/ReviewMetaDataContainer.jsx';

class RandR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allreviews: this.props.reviews,
      starsFiltered: [],
      filteredReviews: this.props.reviews
    }
    this.starsFiltered = [];
  }

  filterReviews(starRating) {
    if (this.starsFiltered.indexOf(starRating) === -1) {
      this.starsFiltered.push(starRating)
    }

    var reviewsFilteredByStarRating = [];

    this.state.allreviews.forEach((review) => {
      if (this.starsFiltered.indexOf(review.rating) !== -1) {
        reviewsFilteredByStarRating.push(review);
      }
    })

    this.setState({filteredReviews: reviewsFilteredByStarRating})

 }



  render() {

    return (
    <div id="RandR">
      Reviews and ratings
      <ReviewMetaDataContainer metaData={this.props.metaData} filter={this.filterReviews.bind(this)} reviews={this.state.allreviews} metaScore={this.props.metaScore}/>
      <ReviewList reviews={this.state.filteredReviews} metaData={this.props.metaData}/>
    </div>
    )
  }
}

export default RandR
