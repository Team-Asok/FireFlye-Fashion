import React from 'react';
import moment from 'moment'
import StarGraphic from '../../GlobalComponents/StarGraphic.jsx';
import HelpfulButton from '../../QandA/QAComponents/HelpfulButton.jsx'

const ReviewTile = function(props) {
  if (props.review) {
    return (
     <div list-style-type="none" id="reviewtile">
       <div id="tile-container">
        <StarGraphic metaScore={props.review.rating}/>
        <span id="reviewer-name">{props.review.reviewer_name}</span>
        <span id="timestamp">{moment(props.review.date).format('MMM do YYYY')}</span>
       </div>
       <div id="review-tile-summary">{props.review.summary}</div>
       <div className="review-body" id="review-tile-body">{props.review.body}</div>
       <div className="review-body" id="review-tile-response">{props.review.response}</div>
       <div id="helpful-report-buttons">
         <HelpfulButton path={`/reviews/${props.review.review_id}/helpful`} id={props.review.review_id} helpfulness={props.review.helpfulness} />
       </div>
     </div>
    );
  }
  return null;
};

export default ReviewTile;
