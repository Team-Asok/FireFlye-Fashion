import React from 'react';
import ReviewList from './ReviewListContainer/ReviewList.jsx';
import ReviewMetaDataContainer from './MetaData/ReviewMetaDataContainer.jsx';

const RandR = (props) => (
  <div id="RandR">
    Reviews and ratings
    <ReviewMetaDataContainer metaData={props.metaData} />
    <ReviewList reviews={props.reviews} />
  </div>

);
export default RandR;
