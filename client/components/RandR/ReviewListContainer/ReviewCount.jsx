import React from 'react';
import DropDownMenu from '../../GlobalComponents/DropDownMenu.jsx'

const ReviewCount = (props) => (
  <div id="review-count">{props.count} reviews, sorted by {<DropDownMenu default="Relevance" dataList={['Helpful', 'Newest', 'Relevance']}/>}
  </div>
);

export default ReviewCount;
