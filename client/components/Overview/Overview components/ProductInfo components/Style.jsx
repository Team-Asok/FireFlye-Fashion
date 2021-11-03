import React from 'react';

const styling = {
  direction: {
    display: 'flex',
    flexDirection: 'row',
  },
  tn: {
    width: 75,
    height: 75,
    borderRadius: 50,
    margin: 20,
  },
  noImage: {
    fontSize: 20,
    margin: 10,
  },
};

const Style = ({styles, select}) => (
  <div style={styling.direction}>
    {styles.map((style) => (
      style.photos[0].thumbnail_url
      ? <img key={style.style_id} src={`${style.photos[0].thumbnail_url}`} style={styling.tn} onClick={() => select(style)} />
      : <div style={styling.noImage}>
          <div onClick={() => select(style)}>{style.name}</div>
          <div onClick={() => select(style)}>No Image Available</div>
        </div>
    ))}
  </div>
);

export default Style;
