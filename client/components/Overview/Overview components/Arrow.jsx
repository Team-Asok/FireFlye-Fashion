import React from 'react';

const Arrow = ({ changePhoto, glyph }) => (
  <div onClick={() => changePhoto()}>
    {glyph}
  </div>
);

export default Arrow;
