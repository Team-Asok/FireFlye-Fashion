/* eslint-disable react/prop-types */
import React from "react";
import StarGraphic from "../../../GlobalComponents/StarGraphic.jsx";

const styling = {
  format: {
    display: "flex",
    flexDirection: "row",
  },
  star: {
    fontSize: 20,
  },
  anchor: {
    color: "white",
    fontSize: 20,
    marginTop: 27,
    marginLeft: 10,
  },
};

const RatingLink = ({metaScore, reviews}) => (
  <div id="RatingLink" style={styling.format}>
    <StarGraphic style={styling.star} metaScore={metaScore} />
    {reviews.results.length > 0 ? <a href="#RandR" style={styling.anchor}>Read all reviews</a> : null}
  </div>
);

export default RatingLink;
