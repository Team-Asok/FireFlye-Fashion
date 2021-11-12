/* eslint-disable func-names */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

const styling = {
  tn: {
    width: 75,
    height: 75,
    margin: 5,
    border: "2px solid white",
  },
  selected: {
    width: 75,
    height: 75,
    margin: 5,
    border: "5px solid black",
  }
};

const ImageThumbnail = function ({ photo, updatePhoto, current }) {
  return (
    current.thumbnail_url === photo.thumbnail_url ?
      <img
        src={photo.thumbnail_url}
        style={styling.selected}
        onClick={() => updatePhoto(photo)}
        alt="thumbnail image"
      />
    :
    <img
      src={photo.thumbnail_url}
      style={styling.tn}
      onClick={() => updatePhoto(photo)}
      alt="thumbnail image"
    />
  );
};

export default ImageThumbnail;
