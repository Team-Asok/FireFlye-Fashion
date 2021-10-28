import React from 'react';
<<<<<<< HEAD
import ReviewList from './ReviewList';
import ReviewMetaDataContainer from './ReviewMetaDataContainer';

const RandR = function () {
  return (
    <div>
      <ReviewMetaDataContainer />
      <ReviewList />
    </div>

  );
};
=======
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
>>>>>>> dev
export default RandR;
