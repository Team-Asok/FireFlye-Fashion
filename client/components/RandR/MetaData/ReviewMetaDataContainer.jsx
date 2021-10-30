import React from 'react';
import Characteristics from './Characteristics.jsx';
import MetaScore from './MetaScore.jsx';
import StarRating from './StarRatingGraph.jsx';

const ReviewMetaDataContainer = function(props) {
  if (props.metaData.product_id) {
  return (
    <div id="review-meta-data-container">
      MetaData
      <MetaScore />
      <StarRating metaData={props.metaData}/>
      <Characteristics />
    </div>
  );
  }
  return null;
};

export default ReviewMetaDataContainer;
