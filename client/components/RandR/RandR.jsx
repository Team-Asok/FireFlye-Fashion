import React from 'react';
import ReviewList from './ReviewListContainer/ReviewList.jsx';
import ReviewMetaDataContainer from './MetaData/ReviewMetaDataContainer.jsx';
import trackAnalytic from '../GlobalComponents/Analytics.jsx'
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
    console.log(this.context);
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
      <span id="review-title" style={{'justifySelf': 'center', 'color':'white'}}>
      Reviews and ratings
      </span>
      <ReviewMetaDataContainer reviewCount={this.props.reviewCount} metaData={this.props.metaData} filter={this.filterReviews.bind(this)} reviews={this.state.allreviews} metaScore={this.props.metaScore}/>
      <ReviewList getProductReviews={this.props.getProductReviews} filteredReviews={this.state.filteredReviews} reviews={this.state.allreviews} metaData={this.props.metaData} productId={this.props.productId}/>
    </div>
    )
  }
}

export default RandR
