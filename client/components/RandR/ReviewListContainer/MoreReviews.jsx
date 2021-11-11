/* eslint-disable func-names */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";

const MoreReviews = function (props) {
  return (
    <button
      onClick={props.onClick}
      id="more-reviews"
      type="button"
      text="More reviews +"
    >
      More Reviews +
    </button>
  );
};

export default MoreReviews;
