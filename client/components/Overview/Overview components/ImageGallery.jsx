import React from 'react';
import ImageThumbnail from './ImageThumbnail.jsx';
import NoImage from './NoImage.png';

const styling = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  main: {
    width: 500,
    height: 500,
  },
  tn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
  },
};

const Gallery = ({ style }) => (
  <div id="Gallery" style={styling.container}>
    { style.photos[0].thumbnail_url
      ? <div style={styling.tn}>
          {style.photos.map((photo) => <ImageThumbnail photo={photo} />)}
        </div>
      : null}
    {style.photos[0].url ? <img src={style.photos[0].url} style={styling.main}/> : <img src={NoImage} style={styling.main}/>}
  </div>
);

export default Gallery;
