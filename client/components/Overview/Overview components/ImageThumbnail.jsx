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
};

const ImageThumbnail = function ({ photo, updatePhoto }) {
  return (
    <img
      src={photo.thumbnail_url}
      style={styling.tn}
      onClick={() => updatePhoto(photo)}
      alt="thumbnail image"
    />
  );
};

export default ImageThumbnail;
