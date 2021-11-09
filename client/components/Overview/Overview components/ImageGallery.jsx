import React from 'react';
import ImageThumbnail from './ImageThumbnail.jsx';
import NoImage from './NoImage.png';
import Arrow from './Arrow.jsx';

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
    <Arrow glyph="&#8592;" />
    {photo.url ? <img src={photo.url} style={styling.main}/> : <img src={NoImage} style={styling.main}/>}
    <Arrow glyph="&#8594;" />
  </div>
);

export default Gallery;
