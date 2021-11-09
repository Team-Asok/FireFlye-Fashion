import React from 'react';
import ImageThumbnail from './ImageThumbnail.jsx';
import NoImage from './NoImage.png';

const styling = {
  main: {
    flex: 1,
    maxWidth: '100%',
    maxHeight: 800,
    resizeMode: 'contain',
    overflow: 'hidden',
  },
  tn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
  },
};

const Gallery = ({ style, photo, updatePhoto }) => (
  <div id="Gallery">
    { style.photos[0].thumbnail_url
      ? <div style={styling.tn}>
          {style.photos.slice(0, 7).map((photo, index) => <ImageThumbnail key={index} photo={photo} updatePhoto={updatePhoto} />)}
        </div>
      : null
    }
    {photo.url ? <img src={photo.url} style={styling.main}/> : <img src={NoImage} style={styling.main}/>}
  </div>
);

export default Gallery;
