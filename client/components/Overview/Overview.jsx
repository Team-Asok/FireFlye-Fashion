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
      currentFeatures: [],
      currentStyles: [],
    };
    this.getProductFeatures = this.getProductFeatures.bind(this);
    this.getProductStyles = this.getProductStyles.bind(this);
  }

  componentDidMount() {
    this.getProductFeatures();
    this.getProductStyles();
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

  getProductStyles() {
    axios.get(`/products/${this.props.currentProd.id}/styles`)
      .then((styles) => {
        this.setState({currentStyles: styles.data.results});
      })
      .catch((err) => {
        console.log('Axios getProductStyles Error: ', err);
      });
  }

  render() {
    if (this.state.currentFeatures.length === 0 || this.state.currentStyles.length === 0) {
      return null;
    }
    return (
      <div id="Overview">
        <Banner />
        <SiteMessage />
        <Gallery />
        <ProductInfo products={this.props.products} currentProd={this.props.currentProd} styles={this.state.currentStyles} metaScore={this.props.metaScore} reviews={this.props.reviews} />
        <ProductDescription currentProd={this.props.currentProd} features={this.state.currentFeatures} />
      </div>
    );
  }
}

export default Overview;
