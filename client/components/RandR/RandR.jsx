import React from 'react';
import ReviewList from './ReviewList.jsx';
import ReviewMetaDataContainer from './ReviewMetaDataContainer.jsx';

class RandR extends React.Component {
  constructor(props) {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div id="RandR">
        Reviews and ratings
        <ReviewMetaDataContainer />
        <ReviewList />
      </div>

    );
  }
}
export default RandR;
