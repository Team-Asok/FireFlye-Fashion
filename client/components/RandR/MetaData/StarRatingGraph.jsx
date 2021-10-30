import React from 'react';

const StarRating = (props) => {
  if (props.metaData.ratings) {
  const findTotalStars = function(ratings) {
    let totalRatings = 0;
    for (var key in ratings) {
      totalRatings += parseInt(ratings[key])
    }
    return totalRatings;
  }
  let totalStars = findTotalStars(props.metaData.ratings)
  // Line 14 Gets percentage of total rounded to second decimal point
  let starPercentage = ((parseInt(props.metaData.ratings['1']) / totalStars) * 100).toFixed(2);
  console.log(starPercentage)

}



  return (<table id="characteristics">
    <tr>
      <th>100% of reviews recommend this product</th>
    </tr>
    <tr>
      <td>5 stars</td>
      <td>graph</td>
    </tr>
    <tr>
      <td>4 stars</td>
      <td>graph</td>
    </tr>
    <tr>
      <td>3 stars</td>
      <td>graph</td>
    </tr>
    <tr>
      <td>2 stars</td>
      <td>graph</td>
    </tr>
    <tr>
      <td>1 stars</td>
      <td>graph</td>
    </tr>

  </table>)
};

export default StarRating;
