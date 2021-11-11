/* eslint-disable func-names */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

const Arrow = ({ changePhoto, glyph, style }) => (
  style
  ? <div style={style} onClick={() => changePhoto()}>
      {glyph}
    </div>
  : <div onClick={() => changePhoto()}>
      {glyph}
    </div>
);

export default Arrow;
