const getMetaScore = (ratings, findTotalStarsFunction) => {

  const scoreSum = (ratingsObject) => {
    let sum = 0;
    for (var key in ratingsObject) {
      sum += (parseInt(key) * parseInt(ratingsObject[key]))
    }
    return sum
  }

  const totalStars = findTotalStarsFunction(ratings)

  let metaScore = (scoreSum(ratings) / totalStars).toFixed(1)
  if (isNaN(metaScore)) {
    metaScore = 0.0;
    return metaScore.toFixed(1);

  }

  return metaScore;

}

export default getMetaScore;