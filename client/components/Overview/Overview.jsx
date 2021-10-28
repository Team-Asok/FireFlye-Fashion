import React from 'react';
import Banner from './Banner.jsx';
import Gallery from './ImageGallery.jsx';
import ProductDescription from './ProductDescription.jsx';
import ProductInfo from './ProductInfo.jsx';
import SiteMessage from './SiteMessage.jsx';

// Should also need Review Info for Star component
class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="Overview">
        <Banner />
        <SiteMessage />
        <Gallery />
        <ProductInfo />
        <ProductDescription />
      </div>
    );
  }
}

export default Overview;
