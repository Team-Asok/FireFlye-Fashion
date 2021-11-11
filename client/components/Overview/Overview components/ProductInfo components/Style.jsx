import React from 'react';

const styling = {
  tn: {
    width: 75,
    height: 75,
    borderRadius: 50,
    border: '2px solid white',
    margin: 15,
  },
  noImage: {
    fontSize: 20,
    margin: 10,
  },
};

const Style = ({style, updateStyle, updatePhoto}) => (
  style.photos[0].thumbnail_url
    ? <img key={style.style_id} src={`${style.photos[0].thumbnail_url}`} style={styling.tn} onClick={() => {updateStyle(style); updatePhoto(style.photos[0])}} alt="style thumbnail"/>
    : <div style={styling.noImage}>
        <div onClick={() => updateStyle(style)}>{style.name}</div>
        <div onClick={() => updateStyle(style)}>No Image Available</div>
      </div>
);

export default Style;
