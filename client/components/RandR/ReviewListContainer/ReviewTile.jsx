import React from 'react';
import moment from 'moment'
import StarGraphic from '../../GlobalComponents/StarGraphic.jsx';
import HelpfulButton from '../../QandA/QAComponents/HelpfulButton.jsx'
import ReportButton from '../../QandA/QAComponents/ReportButton.jsx';

const ReviewTile = function(props) {
  const photosRender = () => {
    if (props.review.photos.length === 0) {
      return null;
    } else {
      return (<span>{props.review.photos.map((photo, index ) => <img key={index} style={{display: 'inline-block', 'marginLeft': '10px'}} width="15%" height="auto" src={photo.url} />)}</span>)

    }
  }
  const recommendRender = () => {
    if (props.review.recommend) {
      return '✓  I recommend this product!'
    } else {
      return;
    }
  }

  if (props.review) {
    return (
     <div list-style-type="none" id="reviewtile">
       <div id="tile-container">
        <StarGraphic metaScore={props.review.rating}/>
        <span id="reviewer-name">{props.review.reviewer_name}</span>
        <span id="timestamp">{moment(props.review.date).format('MMM Do YYYY')}</span>
       </div>
       <div id="review-tile-summary">{props.review.summary}</div>
       <br />
       <span className="review-body" id="review-tile-body">{props.review.body}</span>
       <br/>
       <div className="review-body" id="review-tile-response">{props.review.response}</div>
       {photosRender()}
       <div id="recommended-review" style={{fontSize: "17px"}}>{recommendRender()}</div>
       <div id="helpful-report-buttons">
         <HelpfulButton path={`/reviews/${props.review.review_id}/helpful`} id={props.review.review_id} helpfulness={props.review.helpfulness} />
         <span id="button-separator"> || </span>
         <ReportButton path={`/reviews/${props.review.review_id}/report`} id={props.review.review_id} />
       </div>
     </div>
    );
  }
  return null;
};

export default ReviewTile;
