import React from 'react';

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
  if (metaScore) {
    metaScore = '0.0';
    return (
    <h3 id="meta-score">{metaScore}</h3>
    )
  }

  return (
    <h3 id="meta-score">{metaScore}</h3>
  )
}

export default MetaScore;
