import React from 'react';

const ReviewTile = function(props) {
  if (props.review) {
    return (
     <div list-style-type="none" id="reviewtile">
       <div>star tile placeholder</div>
       <div id="timestamp">{props.review.date}</div>
       <div id="review-tile-summary">{props.review.summary}</div>
       <div class="review-body" id="review-tile-body">{props.review.body}</div>
       <div class="review-body" id="review-tile-response">{props.review.response}</div>
     </div>
    );
  }
  return null;
};

export default ReviewTile;
