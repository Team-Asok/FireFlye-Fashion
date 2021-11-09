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
      currentPhoto: '',
    };
    this.getProductFeatures = this.getProductFeatures.bind(this);
    this.getProductStyles = this.getProductStyles.bind(this);
    this.setDefaultStyle = this.setDefaultStyle.bind(this);
    this.updateStyle = this.updateStyle.bind(this);
    this.updatePhoto = this.updatePhoto.bind(this);
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
        this.setState({ currentStyles: styles.data.results }, () => {
          this.setDefaultStyle(styles.data.results);
        });
      })
      .catch((err) => {
        console.log('Axios getProductStyles Error: ', err);
      });
  }

  setDefaultStyle(data) {
    for (let j = 0; j < data.length; j++) {
      if (data[j]['default?'] === true) {
        this.setState({
          currentStyle: data[j],
          currentPhoto: data[j].photos[0],
        });
        break;
      }
    }
  }

  updateStyle(style) {
    this.setState({ currentStyle: style });
  }

  updatePhoto(photo) {
    this.setState({ currentPhoto: photo });
  }

  render() {
    if (this.state.currentFeatures.length === 0 || this.state.currentStyles.length === 0 || this.state.currentStyle.length === 0) {
      return null;
    }
    return (
      <div id="Overview">
        <Banner />
        <SiteMessage />
        <Gallery
        updatePhoto={this.updatePhoto}
        style={this.state.currentStyle}
        photo={this.state.currentPhoto}
        />
        <ProductInfo
          updateStyle={this.updateStyle}
          updatePhoto={this.updatePhoto}
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
