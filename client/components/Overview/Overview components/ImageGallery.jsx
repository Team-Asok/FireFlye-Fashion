import React from 'react';
import ImageThumbnail from './ImageThumbnail.jsx';
import NoImage from './NoImage.png';
import Arrow from './Arrow.jsx';

const styling = {
  tn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
  },
  main: {
    overflow: 'hidden',
  },
  noImage: {
    height: 500,
    width: 500,
    marginTop: '10%',
    marginLeft: '20%',
  },
  arrows: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  arrowSpace: {
    marginTop: 360,
  },
  hiddenMain: {
    height: 50,
    width: 50,
    visibility: 'hidden',
  },
  hiddenTN: {
    height: 72,
    width: 50,
    visibility: 'hidden',
  },
};

const Gallery = ({ style, photo, photos, updatePhoto, currentIndex, previousSlide, nextSlide }) => (
  <div id="Gallery">
    { style.photos[0].thumbnail_url
      ? <div style={styling.tn}>
          {currentIndex !== 0 ? <Arrow glyph="&#8679;" changePhoto={previousSlide} /> : <div style={styling.hiddenTN} />}
          {style.photos.slice(0, 7).map((photo, index) => <ImageThumbnail key={index} photo={photo} updatePhoto={updatePhoto} />)}
          {currentIndex !== photos.length - 1 ? <Arrow glyph="&#8681;" changePhoto={nextSlide} /> : <div style={styling.hiddenTN} />}
        </div>
      : null
    }

    {photo.url
      ? (
        <div style={styling.arrows}>
          {currentIndex !== 0 ? <Arrow glyph="&#8678;" changePhoto={previousSlide} style={styling.arrowSpace} /> : <div style={styling.hiddenMain} />}
          <div style={styling.main}>
            <img className="main-image" src={photo.url} alt="main image gallery image"/>
          </div>
          {currentIndex !== photos.length - 1 ? <Arrow glyph="&#8680;" changePhoto={nextSlide} style={styling.arrowSpace} /> : <div style={styling.hiddenMain} />}
        </div>
      )
      : <img src={NoImage} style={styling.noImage} alt="placeholder image"/>}
  </div>
);

export default Gallery;
