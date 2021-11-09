import React from 'react';

const styling = {
  position: {
    marginTop: '35%',
  },
};

const Arrow = ({ click, glyph }) => (
  <div style={styling.position} onClick={() => click()}>
    {glyph}
  </div>
);

export default Arrow;
