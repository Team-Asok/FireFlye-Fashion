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
    border: '2px solid white',
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
    marginTop: '10%',
    marginLeft: '20%',
  },
};

const Gallery = ({ style, photo, photos, updatePhoto, currentIndex, previousSlide, nextSlide }) => (
  <div id="Gallery">
    { style.photos[0].thumbnail_url
      ? <div style={styling.tn}>
          {currentIndex !== 0 ? <Arrow glyph="&#8593;" changePhoto={previousSlide} /> : null}
          {style.photos.slice(0, 7).map((photo, index) => <ImageThumbnail key={index} photo={photo} updatePhoto={updatePhoto} />)}
          {currentIndex !== photos.length - 1 ? <Arrow glyph="&#8595;" changePhoto={nextSlide} /> : null}
        </div>
      : null
    }

    {photo.url
      ? (
        <div style={styling.main}>
          {currentIndex !== 0 ? <Arrow glyph="&#8592;" changePhoto={previousSlide} /> : null}
          <img src={photo.url} style={styling.gallery} alt="main image gallery image"/>
          {currentIndex !== photos.length - 1 ? <Arrow glyph="&#8594;" changePhoto={nextSlide} /> : null}
        </div>
      )
      : <img src={NoImage} style={styling.noImage} alt="placeholder image"/>}
  </div>
);

export default Gallery;
