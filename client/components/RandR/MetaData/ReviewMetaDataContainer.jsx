import React from 'react';
import Characteristics from './Characteristics.jsx';
import MetaScore from './MetaScore.jsx';
import { StarRating, findTotalStars } from './StarRatingGraph.jsx';
import StarGraphic from '../../GlobalComponents/StarGraphic.jsx'
import getMetaScore from './getMetaScoreFn.js'

const ReviewMetaDataContainer = function(props) {

  let percentage = (props.reviews.length / props.metaData.recommended.true).toFixed(2) * 100
  if (isNaN(percentage)){
    percentage = 0;
  }



  if (props.metaData.product_id) {
  return (
    <div id="review-meta-data-container">
      <MetaScore metaData={props.metaData} findTotalStars={findTotalStars} metaScore={props.metaScore} />
      <br/>
      <div id="percent-recommended">{`${percentage}%`} of People recommended this product</div>
      <StarRating metaData={props.metaData} filter={props.filter}/>
      <Characteristics characteristics={props.metaData.characteristics}/>
    </div>
  );
  }
  return null;
};

export default ReviewMetaDataContainer;
