import React from 'react';
import moment from 'moment'

const ReviewTile = function(props) {
  if (props.review) {
    return (
     <div list-style-type="none" id="reviewtile">
       <div>star tile placeholder</div>
       <div id="timestamp">{moment(props.review.date).format('MMM do YYYY')}</div>
       <div id="review-tile-summary">{props.review.summary}</div>
       <div className="review-body" id="review-tile-body">{props.review.body}</div>
       <div className="review-body" id="review-tile-response">{props.review.response}</div>
     </div>
    );
  }
  return null;
};

export default ReviewTile;
