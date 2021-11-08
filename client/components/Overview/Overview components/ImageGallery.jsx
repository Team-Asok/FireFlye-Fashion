import React from 'react';
import ImageThumbnail from './ImageThumbnail.jsx';

const styling = {
<<<<<<< HEAD
  container: {
    position: 'relative',
  },
  main: {
    width: 500,
    height: 500,
    position: 'absolute',
    // objectFit: 'fill',
  },
  tn: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
=======
  default: {
    width: 600,
    height: 600,
    objectFill: 'contain',
>>>>>>> dev
  },
};

const Gallery = ({ style }) => (
  <div id="Gallery" style={styling.container}>
    <img src={style.photos[0].url} style={styling.main}/>
    <div style={styling.tn}>
      {style.photos.map((photo) => <ImageThumbnail photo={photo} />)}
    </div>
  </div>
);

export default Gallery;
