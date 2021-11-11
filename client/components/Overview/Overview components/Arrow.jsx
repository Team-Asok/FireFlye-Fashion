/* eslint-disable func-names */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

const styling = {
  position: {
    marginTop: "35%",
  },
};

const Arrow = function ({ changePhoto, glyph }) {
  return (
    <div style={styling.position} onClick={() => changePhoto()}>
      {glyph}
    </div>
  );
};

export default Arrow;
