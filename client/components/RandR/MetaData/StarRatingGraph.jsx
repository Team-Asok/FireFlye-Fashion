import React from 'react';
import PercentBar from './PercentBar.jsx'

const StarRating = (props) => {

  if (props.metaData.ratings) {

// Helper fn. Find total stars of given review
  const findTotalStars = function(ratings) {
    let totalRatings = 0;
    for (var key in ratings) {
      totalRatings += parseInt(ratings[key])
    }
    return totalRatings;
  }

  // Total amount of stars for any given review

  let totalStars = findTotalStars(props.metaData.ratings)

  // Gets percentage of total rounded to second decimal point

  let starPercentage = (starRating) => {
    return ((parseInt(props.metaData.ratings[starRating]) / totalStars) * 100).toFixed(2);
}



  return (<table id="characteristics">
    <tr>
      <th>100% of reviews recommend this product</th>
    </tr>
    <tr>
      <td>5 stars</td>
       <PercentBar percentage={starPercentage('5')} />
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
}

export default StarRating;
