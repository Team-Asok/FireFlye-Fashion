import React from 'react';

const ReviewTile = function(props) {
  console.log(props.review);
  return (
     <div list-style-type="none" id="reviewtile">
       <h1 id="review-tile-summary">{props.review.summary}</h1>
       <div id="review-tile-body">{props.review.body}</div>
     </div>
  );
};

export default ReviewTile;
