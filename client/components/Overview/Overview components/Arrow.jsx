import React from 'react';

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
