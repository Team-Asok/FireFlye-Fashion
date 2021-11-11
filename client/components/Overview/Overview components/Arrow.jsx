import React from 'react';

const styling = {
  position: {
    marginTop: '35%',
    position: 'absolute',
  },
};

const Arrow = ({ changePhoto, glyph }) => (
  <div style={styling.position} onClick={() => changePhoto()}>
    {glyph}
  </div>
);

export default Arrow;
