import React from 'react';
import ReviewList from '.ReviewListContainer/ReviewList.jsx';
import ReviewMetaDataContainer from './ReviewMetaDataContainer.jsx';

// class RandR extends React.Component {
//   constructor({ reviews }) {
//     super();
//     this.state = {
//       reviews: { reviews },
//     };
//   }

//   render() {
//     return (
//       <div id="RandR">
//         Reviews and ratings
//         <ReviewMetaDataContainer />
//         <ReviewList reviews={this.state.reviews} />
//       </div>

//     );
//   }
// }
const RandR = (props) => (
  <div id="RandR">
    Reviews and ratings
    <ReviewMetaDataContainer />
    <ReviewList reviews={props.reviews} getReviews={props.getAllProducts} />
  </div>

);
export default RandR;
