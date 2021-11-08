import React from 'react';

const styling = {
  tn: {
    width: 75,
    height: 75,
    margin: 5,
  },
};

const ImageThumbnail = ({ photo }) => (
  <img src={photo.thumbnail_url} style={styling.tn}/>
);

export default ImageThumbnail;
