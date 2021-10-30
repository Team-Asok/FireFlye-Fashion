import React from 'react';
import Characteristics from './Characteristics.jsx';
import MetaScore from './MetaScore.jsx';
import { StarRating, findTotalStars } from './StarRatingGraph.jsx';

const ReviewMetaDataContainer = function(props) {
  if (props.metaData.product_id) {
  return (
    <div id="review-meta-data-container">
      <MetaScore metaData={props.metaData}/>
      <StarRating metaData={props.metaData}/>
      <Characteristics />
    </div>
  );
  }
  return null;
};

export default ReviewMetaDataContainer;
