/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import axios from "axios";
import Banner from "./Overview components/Banner.jsx";
import Gallery from "./Overview components/ImageGallery.jsx";
import ProductDescription from "./Overview components/ProductDescription.jsx";
import ProductInfo from "./Overview components/ProductInfo.jsx";
import SiteMessage from "./Overview components/SiteMessage.jsx";

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFeatures: [],
      currentStyles: [],
      currentStyle: "",
      currentPhoto: "",
      photos: [],
      currentPhotoIndex: 0,
    };
    this.getProductFeatures = this.getProductFeatures.bind(this);
    this.getProductStyles = this.getProductStyles.bind(this);
    this.setDefaultStyle = this.setDefaultStyle.bind(this);
    this.updateStyle = this.updateStyle.bind(this);
    this.updatePhoto = this.updatePhoto.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.filterPhotos = this.filterPhotos.bind(this);
  }

  componentDidMount() {
    this.getProductFeatures();
    this.getProductStyles();
  }

  getProductFeatures() {
    axios
      .get(`/products/${this.props.currentProd.id}`)
      .then((product) => {
        this.setState({ currentFeatures: product.data.features });
      })
      .catch((err) => {
        console.log("Axios getProductFeatures Error: ", err);
      });
  }

  getProductStyles() {
    axios
      .get(`/products/${this.props.currentProd.id}/styles`)
      .then((styles) => {
        this.setState({ currentStyles: styles.data.results }, () => {
          this.setDefaultStyle(styles.data.results);
        });
      })
      .catch((err) => {
        console.log("Axios getProductStyles Error: ", err);
      });
  }

  setDefaultStyle(data) {
    for (let j = 0; j < data.length; j++) {
      if (data[j]["default?"] === true) {
        this.setState({
          currentStyle: data[j],
          currentPhoto: data[j].photos[0],
          photos: data[j].photos,
        }, () => {
          this.filterPhotos(data[j].photos);
        });
        break;
      }
    }
  }

  updateStyle(style) {
    this.setState({
      currentStyle: style,
      photos: style.photos,
      currentPhotoIndex: 0,
    }, () => {
      this.filterPhotos(this.state.currentStyles)
    });
  }

  updatePhoto(photo) {
    let current = this.state.currentPhotoIndex;

    for (let i = 0; i < this.state.photos.length; i++) {
      if (photo.url === this.state.photos[i].url) {
        current = i;
        break;
      }
    }

    this.setState({
      currentPhoto: photo,
      currentPhotoIndex: current,
    });
  }

  previousSlide() {
    if (this.state.currentPhotoIndex === 0) {
      return;
    }
    const current = this.state.currentPhotoIndex;
    this.setState({
      currentPhoto: this.state.photos[current - 1],
      currentPhotoIndex: current - 1,
    });
  }

  nextSlide() {
    if (this.state.currentPhotoIndex === this.state.photos.length - 1) {
      return;
    }
    const current = this.state.currentPhotoIndex;
    this.setState({
      currentPhoto: this.state.photos[current + 1],
      currentPhotoIndex: current + 1,
    });
  }

  //Handle duplicate slacks photos
  filterPhotos(styles) {
    if (styles.some((style) => style.style_id === 221014) && this.state.currentStyle.style_id !== 221014) {
      this.setState({photos: this.state.photos.slice(0, 1)})
    }
  }

  render() {
    if (
      this.state.currentFeatures.length === 0 ||
      this.state.currentStyles.length === 0 ||
      this.state.currentStyle.length === 0
    ) {
      return null;
    }
    return (
      <div id="Overview">
        <Banner />
        <SiteMessage style={this.props.style}/>
        <Gallery
          updatePhoto={this.updatePhoto}
          previousSlide={this.previousSlide}
          nextSlide={this.nextSlide}
          style={this.state.currentStyle}
          photo={this.state.currentPhoto}
          photos={this.state.photos}
          currentIndex={this.state.currentPhotoIndex}
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
