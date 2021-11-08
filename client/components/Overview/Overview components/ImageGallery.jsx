import React from 'react';
import ImageThumbnail from './ImageThumbnail.jsx';
import NoImage from './NoImage.png';

const styling = {
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
  },
};

const Gallery = ({ style }) => (
  <div id="Gallery" style={styling.container}>
    {style.photos[0].url ? <img src={style.photos[0].url} style={styling.main}/> : <img src={NoImage} style={styling.main}/>}
    <div style={styling.tn}>
      {style.photos.map((photo) => <ImageThumbnail photo={photo} />)}
    </div>
  </div>
);

export default Gallery;
