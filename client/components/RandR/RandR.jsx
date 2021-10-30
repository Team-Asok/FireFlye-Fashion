import React from 'react';
import ReviewList from './ReviewListContainer/ReviewList.jsx';
import ReviewMetaDataContainer from './MetaData/ReviewMetaDataContainer.jsx';

const RandR = (props) => (
  <div id="RandR">
    Reviews and ratings
    <ReviewMetaDataContainer />
    <ReviewList reviews={props.reviews} getReviews={props.getAllProducts} />
  </div>

);
export default RandR;
