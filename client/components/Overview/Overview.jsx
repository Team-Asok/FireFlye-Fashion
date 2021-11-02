import React from 'react';
import axios from 'axios';
import Banner from './Overview components/Banner.jsx';
import Gallery from './Overview components/ImageGallery.jsx';
import ProductDescription from './Overview components/ProductDescription.jsx';
import ProductInfo from './Overview components/ProductInfo.jsx';
import SiteMessage from './Overview components/SiteMessage.jsx';

// Should also need Review Info for Star component
class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFeatures: []
    };
    this.getProductFeatures = this.getProductFeatures.bind(this);
  }

  componentDidMount() {
    this.getProductFeatures();
  }

  getProductFeatures() {
    axios.get(`/products/${this.props.currentProd.id}`)
      .then((product) => {
        this.setState({currentFeatures: product.data.features});
      })
      .catch((err) => {
        console.log('Axios getProductFeatures Error: ', err);
      });
  }

  render() {
    if (this.state.currentFeatures.length === 0) {
      return <div>Hello There!</div>;
    }
    return (
      <div id="Overview">
        <Banner />
        <SiteMessage />
        <Gallery />
        <ProductInfo products={this.props.products} currentProd={this.props.currentProd} />
        <ProductDescription currentProd={this.props.currentProd} features={this.state.currentFeatures} />
      </div>
    );
  }
}

export default Overview;
