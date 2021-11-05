import React from 'react';
import DropDownMenu from '../../GlobalComponents/DropDownMenu.jsx'

const ReviewCount = (props) => (
  <div id="review-count">{props.count} reviews, sorted by {<DropDownMenu id="sort-drop-down" select={props.select} default={props.default} dataList={['helpful', 'newest', 'relevance']}/>}
  </div>
);

export default ReviewCount;
