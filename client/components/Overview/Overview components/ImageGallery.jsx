import React from 'react';

const styling = {
  default: {
    width: 600,
    height: 600,
    objectFill: 'contain',
  },
};

const Gallery = ({style}) => (
  <img id="Gallery" src={style.photos[0].url} style={styling.default}/>
);

export default Gallery;
