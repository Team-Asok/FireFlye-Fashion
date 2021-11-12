/* eslint-disable import/extensions */
/* eslint-disable no-restricted-globals */
/* eslint-disable radix */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable func-names */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import StarGraphic from "../../GlobalComponents/StarGraphic.jsx";

const MetaScore = function (props) {
  const scoreSum = (ratingsObject) => {
    let sum = 0;
    for (const key in ratingsObject) {
      sum += parseInt(key) * parseInt(ratingsObject[key]);
    }
    return sum;
  };

  const totalStars = props.findTotalStars(props.metaData.ratings);

  let metaScore = (scoreSum(props.metaData.ratings) / totalStars).toFixed(1);
  if (isNaN(metaScore)) {
    metaScore = "0.0";
    return (
      <div id="meta-score">
        <strong>{metaScore}</strong>
        <StarGraphic color="rgb(237, 220, 207)" id="star-in-metascore" metaScore={props.metaScore} />
      </div>
    );
  }

  return (
    <div id="meta-score">
      {metaScore}
      <StarGraphic color="rgb(237, 220, 207)" id="star-in-metascore" metaScore={metaScore} />
    </div>
  );
};

export default MetaScore;
