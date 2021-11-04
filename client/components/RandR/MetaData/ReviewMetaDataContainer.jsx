import React from 'react';
import Characteristics from './Characteristics.jsx';
import MetaScore from './MetaScore.jsx';
import { StarRating, findTotalStars } from './StarRatingGraph.jsx';
import StarGraphic from '../../GlobalComponents/StarGraphic.jsx'
import getMetaScore from './getMetaScoreFn.js'

const ReviewMetaDataContainer = function(props) {
  if (props.metaData.product_id) {
  return (
    <div id="review-meta-data-container">
      <MetaScore metaData={props.metaData} findTotalStars={findTotalStars} metaScore={props.metaScore} />
      <div id="percent-recommended">100% of People recommended this product</div>
      <StarRating metaData={props.metaData} filter={props.filter}/>
      <Characteristics characteristics={props.metaData.characteristics}/>
    </div>
  );
  }
  return null;
};

export default ReviewMetaDataContainer;
