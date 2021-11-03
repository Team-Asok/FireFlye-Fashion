import React from 'react';

const styling = {
  format: {
    display: 'flex',
    flexDirection: 'row',
  },
  anchor: {
    fontSize: 20,
  },
};

const RatingLink = (props) => (
  <div id="OverviewRating" style={styling.format}>
    <div>Rating</div>
    <a href="#RandR" style={styling.anchor}>Read all reviews</a>
  </div>
);

export default RatingLink;
