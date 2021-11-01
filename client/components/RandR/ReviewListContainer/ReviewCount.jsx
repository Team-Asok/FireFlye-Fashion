import React from 'react';
import DropDownMenu from '../../GlobalComponents/DropDownMenu.jsx'

const ReviewCount = (props) => (
  <div id="review-count">{props.count} reviews, sorted by {<DropDownMenu select={props.select} default="relevance" dataList={['helpful', 'newest', 'relevance']}/>}
  </div>
);

export default ReviewCount;
