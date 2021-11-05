import React from 'react';
import axios from 'axios';
import Banner from './Overview components/Banner.jsx';
import Gallery from './Overview components/ImageGallery.jsx';
import ProductDescription from './Overview components/ProductDescription.jsx';
import ProductInfo from './Overview components/ProductInfo.jsx';
import SiteMessage from './Overview components/SiteMessage.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFeatures: [],
      currentStyles: [],
      currentStyle: '',
    };
    this.getProductFeatures = this.getProductFeatures.bind(this);
    this.getProductStyles = this.getProductStyles.bind(this);
    this.setDefaultStyle = this.setDefaultStyle.bind(this);
    this.selectStyle = this.selectStyle.bind(this);
  }

  componentDidMount() {
    this.getProductFeatures();
    this.getProductStyles();
  }

  getProductFeatures() {
    axios.get(`/products/${this.props.currentProd.id}`)
      .then((product) => {
        this.setState({ currentFeatures: product.data.features });
      })
      .catch((err) => {
        console.log('Axios getProductFeatures Error: ', err);
      });
  }

  getProductStyles() {
    axios.get(`/products/${this.props.currentProd.id}/styles`)
      .then((styles) => {
        this.setState({ currentStyles: styles.data.results, currentStyle: styles.data.results[0] });
        this.setDefaultStyle(styles.data.results);
      })
      .catch((err) => {
        console.log('Axios getProductStyles Error: ', err);
      });
  }

  setDefaultStyle(data) {
    for (let j = 1; j < data.length; j++) {
      if (data[j]['default?'] === true) {
        this.setState({ currentStyle: data[j] });
        break;
      }
    }
  }

  selectStyle(style) {
    this.setState({ currentStyle: style });
  }

  render() {
    if (this.state.currentFeatures.length === 0 || this.state.currentStyles.length === 0) {
      return null;
    }
    return (
      <div id="Overview">
        <Banner />
        <SiteMessage />
        <Gallery style={this.state.currentStyle} />
        <ProductInfo
          select={this.selectStyle}
          style={this.state.currentStyle}
          styles={this.state.currentStyles}
          currentProd={this.props.currentProd}
          metaScore={this.props.metaScore}
          reviews={this.props.reviews}
        />
        <ProductDescription
          currentProd={this.props.currentProd}
          features={this.state.currentFeatures}
        />
      </div>
    );
  }
}

export default Overview;
