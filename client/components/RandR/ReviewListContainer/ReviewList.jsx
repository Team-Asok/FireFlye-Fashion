import React from 'react';
import styled from 'styled-components';
import ReviewTile from './ReviewTile.jsx';
import AddAReview from './AddAReview.jsx';
import MoreReviews from './MoreReviews.jsx';
import ReviewCount from './ReviewCount.jsx'

const StyledDiv = styled.div`
   border-style: dotted;
   background-color: red;
   border-size 50px;
 `;

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'default',
    };
    this.renderView = this.renderView.bind(this);
    this.expandReviewsClickHandler = this.expandReviewsClickHandler.bind(this);
  }

  expandReviewsClickHandler() {
    this.setState({ view: 'all-reviews' });
  }

  renderView(view) {
    if (view === 'default') {
      return (
        <>
          <ReviewTile review={this.props.reviews.results[0]} />
          <ReviewTile review={this.props.reviews.results[1]} />
        </>
      );
    }
    return this.props.reviews.results.map((review) => <ReviewTile review={review} />);
  }

  render() {
    if (this.props.reviews.results) {
      return (
        <>
          <StyledDiv id="reviewlist">
            <ReviewCount />
            <ul id="reviewListTilescontainer">
            {this.renderView(this.state.view)}
            </ul>
            <AddAReview />
            <MoreReviews onClick={this.expandReviewsClickHandler} />
          </StyledDiv>
        </>
      );
    }
    return null;
  }
}
export default ReviewList;
