/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import Characteristics from "./Characteristics";
import MetaScore from "./MetaScore";
import { StarRating, findTotalStars } from "./StarRatingGraph";

const ReviewMetaDataContainer = function (props) {
  const total =
    Number(props.metaData.recommended.true) +
    Number(props.metaData.recommended.false);
  console.log(props.metaData.recommended.true);
  let percentage = (props.metaData.recommended.true / total).toFixed(2) * 100;
  if (isNaN(percentage)) {
    percentage = 0;
  }

  if (props.metaData.product_id) {
    return (
      <div id="review-meta-data-container">
        <MetaScore
          metaData={props.metaData}
          findTotalStars={findTotalStars}
          metaScore={props.metaScore}
        />
        <div id="percent-recommended">
          {`${percentage}%`} of People recommended this product
        </div>
        <StarRating metaData={props.metaData} filter={props.filter} />
        <Characteristics characteristics={props.metaData.characteristics} />
      </div>
    );
  }
  return null;
};

export default ReviewMetaDataContainer;
