/* eslint-disable import/extensions */
/* eslint-disable func-names */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from "react";
import ImageThumbnail from "./ImageThumbnail.jsx";
import NoImage from "./NoImage.png";
import Arrow from "./Arrow.jsx";
import ImageMain from './ImageMain.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false
    }
    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
  }

  changeView() {
    this.setState({expanded: !this.state.expanded}, () => {
      this.renderView();
    });
  }

  renderView() {
    if (!this.state.expanded) {
      return (
        <ImageMain
        updatePhoto={this.props.updatePhoto}
        previousSlide={this.props.previousSlide}
        nextSlide={this.props.nextSlide}
        style={this.props.style}
        currentPhoto={this.props.currentPhoto}
        photos={this.props.photos}
        currentIndex={this.props.currentIndex}
        changeView={this.changeView}
        status={'default'}
        />
      )
    } else if (this.state.expanded) {
      return (
        <ImageMain
        updatePhoto={this.props.updatePhoto}
        previousSlide={this.props.previousSlide}
        nextSlide={this.props.nextSlide}
        style={this.props.style}
        currentPhoto={this.props.currentPhoto}
        photos={this.props.photos}
        currentIndex={this.props.currentIndex}
        changeView={this.changeView}
        status={'expanded'}
        />
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderView()}
      </div>
    )
  }
}

export default Gallery;
