import React from 'react';

const styling = {
  tn: {
    width: 75,
    height: 75,
    margin: 5,
    border: '2px solid black',
  },
};

const ImageThumbnail = ({ photo, updatePhoto }) => (
  <img src={photo.thumbnail_url} style={styling.tn} onClick={() => updatePhoto(photo)}/>
);

export default ImageThumbnail;
