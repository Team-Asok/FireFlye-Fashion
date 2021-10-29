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

const ReviewList = (props) => {
  if (props.reviews.results) {
    return (
      <>
        <StyledDiv id="reviewlist">
          <ReviewCount />
          <ul id="reviewListTilescontainer">
          {props.reviews.results.map((review) => <ReviewTile review={review} />)}
          </ul>
          <AddAReview />
          <MoreReviews />
        </StyledDiv>
      </>
    );
  }
  return null;
};
export default ReviewList;
