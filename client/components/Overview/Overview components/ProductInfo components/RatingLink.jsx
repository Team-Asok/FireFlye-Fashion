import React from 'react';
import StarGraphic from '../../../GlobalComponents/StarGraphic.jsx';
import getMetaScore from '../../../RandR/MetaData/getMetaScoreFn.js';
import { findTotalStars } from '../../../RandR/MetaData/StarRatingGraph.jsx';

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

const RatingLink = ({metaData}) => (
  <div id="OverviewRating" style={styling.format}>
    <StarGraphic metaScore={getMetaScore(metaData.ratings, findTotalStars)} />
    <a href="#RandR" style={styling.anchor}>Read all reviews</a>
  </div>
);

export default RatingLink;
