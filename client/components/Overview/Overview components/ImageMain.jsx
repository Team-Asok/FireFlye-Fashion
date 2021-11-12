import React from "react";
import ImageThumbnail from "./ImageThumbnail.jsx";
import NoImage from "./NoImage.png";
import Arrow from "./Arrow.jsx";

const styling = {
  left: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
  },
  tn: {
    overflow: "scroll",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    maxHeight: 510,
  },
  main: {
    overflow: 'hidden',
  },
  noImage: {
    height: 500,
    width: 500,
    marginTop: "10%",
    marginLeft: "20%",
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

const ImageMain = ({style, photos, updatePhoto, currentPhoto, currentIndex, previousSlide, nextSlide, changeView}) => {
  return (
    <div id="Gallery">
      {style.photos[0].thumbnail_url
        ? <div style={styling.left} key={style.style_id}>
            <div style={styling.tn}>
              {style.photos.map((photo, index) => <ImageThumbnail key={index} photo={photo} updatePhoto={updatePhoto} current={currentPhoto}/>)}
            </div>
          </div>
        : null}

      {currentPhoto.url
        ? (
          <div style={styling.arrows}>
            {currentIndex !== 0 ? <Arrow glyph="&#8678;" changePhoto={previousSlide} style={styling.arrowSpace} /> : <div style={styling.hiddenMain} />}
            <div style={styling.main}>
              <img className="main-image" src={currentPhoto.url} alt="main image gallery image" onClick={changeView}/>
            </div>
            {currentIndex !== photos.length - 1 ? <Arrow glyph="&#8680;" changePhoto={nextSlide} style={styling.arrowSpace} />
            : <div style={styling.hiddenMain} />}
          </div>
        ) : (
          <img src={NoImage} style={styling.noImage} alt="placeholder image" />
        )}
    </div>
  )
}

export default ImageMain;