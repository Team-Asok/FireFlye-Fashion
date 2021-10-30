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
}



  return (<table id="characteristics">
    <tr>
      <th>100% of reviews recommend this product</th>
    </tr>
    <tr>
      <td>5 stars</td>
      <td>
        <svg width="100" height="20">
          <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="50%" style={{'stop-color':'rgb(255,255,0)', 'stop-opacity':1}} />
                <stop offset="51%" style={{'stop-color':'rgb(255,0,0)', 'stop-opacity':1}} />
              </linearGradient>
          </defs>
          <rect width="100" height="20" fill="url(#grad1)"/>
        </svg>
      </td>
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
