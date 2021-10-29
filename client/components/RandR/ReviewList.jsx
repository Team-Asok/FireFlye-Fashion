import React from 'react';
import ReviewTile from './ReviewTile.jsx';

// class ReviewList extends React.Component {
//   constructor(props) {
//     console.log(props.reviews)
//     super(props);
//     this.state = {
//       reviews: props.reviews.results
//     };
//   }

//   componentDidMount() {
//     this.props.getReviews();
//   }

//   render() {
//     return (
//       <div id="reviewlist">
//         {/* {this.props.reviews.map((review) => <ReviewTile review={review} />)} */}
//       </div>
//     );
//   }
// }
const ReviewList = (props) => {
  if (props.reviews.results) {
  return (<div id="reviewlist">
    {console.log(props.reviews.results)}
    {props.reviews.results.map((review) => <ReviewTile review={review} />)}
  </div>)
  } else {
    return null;
  }
};
export default ReviewList;
