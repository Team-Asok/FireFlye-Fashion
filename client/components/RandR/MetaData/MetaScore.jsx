import React from 'react';
import StarGraphic from '../../GlobalComponents/StarGraphic.jsx';
import { findTotalStars } from './StarRatingGraph.jsx';


const MetaScore = (props) => {

  const scoreSum = (ratingsObject) => {
    let sum = 0;
    for (var key in ratingsObject) {
      sum += (parseInt(key) * parseInt(ratingsObject[key]))
    }
    return sum
  }

  const totalStars = props.findTotalStars(props.metaData.ratings)

  let metaScore = (scoreSum(props.metaData.ratings) / totalStars).toFixed(1)
  if (isNaN(metaScore)) {
    metaScore = '0.0';
    return (
    <div id="meta-score">
      {metaScore}
      <StarGraphic metaScore={props.metaScore}/>
    </div>
    )
  }

  return (
    <div id="meta-score">
      {metaScore}
      <StarGraphic metaScore={metaScore}/>
    </div>
  )
}

export default MetaScore;
