import React from 'react';
import styled from 'styled-components';
import ReviewTile from './ReviewTile.jsx';

const StyledDiv = styled.div`
   border-style: dotted;
   background-color: red;
   border-size 50px;
 `;

const ReviewList = (props) => {
  if (props.reviews.results) {
    return (
    <StyledDiv id="reviewlist">
      <ul id="reviewListTilescontainer">
      {props.reviews.results.map((review) => <ReviewTile review={review} />)}
      </ul>
    </StyledDiv>
    );
  }
  return null;
};
export default ReviewList;
