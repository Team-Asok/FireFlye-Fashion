/* eslint-disable func-names */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

const styling = {
  tn: {
    width: 75,
    height: 75,
    borderRadius: 50,
    border: "2px solid white",
    margin: 15,
  },
  noImage: {
    fontSize: 20,
    margin: 10,
  },
  selected: {
    width: 75,
    height: 75,
    borderRadius: 50,
    border: "5px solid black",
    margin: 15,
  }
};

const Style = function ({ style, currentStyle, updateStyle, updatePhoto }) {
  return style.photos[0].thumbnail_url ? (
    style.style_id === currentStyle.style_id ? (
        <img
          key={style.style_id}
          src={`${style.photos[0].thumbnail_url}`}
          style={styling.selected}
          onClick={() => {
            updateStyle(style);
            updatePhoto(style.photos[0]);
          }}
          alt="style thumbnail"
        />
    ) : (
      <img
      key={style.style_id}
      src={`${style.photos[0].thumbnail_url}`}
      style={styling.tn}
      onClick={() => {
        updateStyle(style);
        updatePhoto(style.photos[0]);
      }}
      alt="style thumbnail"
    />
    )
  ) : (
    <div style={styling.noImage}>
      <div onClick={() => updateStyle(style)}>{style.name}</div>
      <div onClick={() => updateStyle(style)}>No Image Available</div>
    </div>
  );
};

export default Style;
