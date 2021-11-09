import React from 'react';
import ImageThumbnail from './ImageThumbnail.jsx';
import NoImage from './NoImage.png';
import Arrow from './Arrow.jsx';

const styling = {
  gallery: {
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
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
  },
  noImage: {
    height: 500,
    width: 500,
    marginTop: '15%',
    marginLeft: '15%',
  },
};

const Gallery = ({ style, photo, updatePhoto, previousSlide, nextSlide }) => (
  <div id="Gallery">
    { style.photos[0].thumbnail_url
      ? <div style={styling.tn}>
          {style.photos.slice(0, 7).map((photo, index) => <ImageThumbnail key={index} photo={photo} updatePhoto={updatePhoto} />)}
        </div>
      : null
    }

    {photo.url
      ? (
        <div style={styling.main}>
          <Arrow glyph="&#8592;" changePhoto={previousSlide} />
          <img src={photo.url} style={styling.gallery}/>
          <Arrow glyph="&#8594;" changePhoto={nextSlide} />
        </div>
      )
      : <img src={NoImage} style={styling.noImage}/>}
  </div>
);

export default Gallery;
