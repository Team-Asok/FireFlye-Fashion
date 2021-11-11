/* eslint-disable func-names */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import DropDownMenu from "../../GlobalComponents/DropDownMenu";

const ReviewCount = function (props) {
  return (
    <div id="review-count">
      {props.count} reviews, sorted by{" "}
      <DropDownMenu
        id="sort-drop-down"
        select={props.select}
        default={props.default}
        dataList={["helpful", "newest", "relevance"]}
      />
    </div>
  );
};

export default ReviewCount;
