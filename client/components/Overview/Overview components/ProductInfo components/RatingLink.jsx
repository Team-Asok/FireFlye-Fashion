import React from 'react';
import StarGraphic from '../../../GlobalComponents/StarGraphic.jsx';

const styling = {
  format: {
    display: 'flex',
    flexDirection: 'row',
  },
  anchor: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10,
  },
};

const RatingLink = ({metaScore, reviews}) => (
  <div id="OverviewRating" style={styling.format}>
    <StarGraphic metaScore={metaScore} />
    {reviews.results.length > 0 ? <a href="#RandR" style={styling.anchor}>Read all reviews</a> : null}
  </div>
);

export default RatingLink;
