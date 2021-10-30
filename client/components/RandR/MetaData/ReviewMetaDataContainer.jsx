import React from 'react';
import Characteristics from './Characteristics.jsx';
import MetaScore from './MetaScore.jsx';
import StarRating from './StarRatingGraph.jsx';

const ReviewMetaDataContainer = function(props) {
  return (
    <div id="review-meta-data-container">
      MetaData
      <MetaScore />
      <StarRating />
      <Characteristics />
    </div>
  );
};

export default ReviewMetaDataContainer;
