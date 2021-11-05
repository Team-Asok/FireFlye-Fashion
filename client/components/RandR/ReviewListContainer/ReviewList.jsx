import React from 'react';
import styled from 'styled-components';
import ReviewTile from './ReviewTile.jsx';
import AddAReview from './AddAReview.jsx';
import MoreReviews from './MoreReviews.jsx';
import ReviewCount from './ReviewCount.jsx';
import sortReviews from './sortReviewsFunction.js';

const StyledDiv = styled.div`
 `;

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'default',
      sort: 'relevance'
    };
    this.renderView = this.renderView.bind(this);
    this.expandReviewsClickHandler = this.expandReviewsClickHandler.bind(this);
  }

  expandReviewsClickHandler() {
    this.setState({ view: 'all-reviews' });
  }

  handleSortSubmit() {
    event.preventDefault();
    this.setState({sort: event.target.value})
  }


  renderView(view) {
    // sort the reviews into a sorted array before rendering
    var sortedReviews = sortReviews(this.props.reviews, this.state.sort);
    if (view === 'default') {
      return (
        <>
          <ReviewTile review={sortedReviews[0]} />
          <ReviewTile review={sortedReviews[1]} />
        </>
      );
    }
    if(view === 'all-reviews') {
    return sortedReviews.map((review) => <ReviewTile key={review.id} review={review} />);
    }
  }

  render() {
    return (
        <>
          <StyledDiv id="reviewlist">
            <ReviewCount default={this.state.sort} count={this.props.reviews.length} select={this.handleSortSubmit.bind(this)}/>
            <div id="reviewListTilescontainer">
            {this.renderView(this.state.view)}
            </div>
            <div id='buttons-container'>
              <AddAReview getProductReviews={this.props.getProductReviews} productId={this.props.productId} metaData={this.props.metaData}/>
              <MoreReviews onClick={this.expandReviewsClickHandler} />
            </div>
          </StyledDiv>
        </>
      );
    }
}
export default ReviewList;
