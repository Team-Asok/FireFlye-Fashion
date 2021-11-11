/* eslint-disable func-names */
import React from "react";
import FyreFlye from "./FyreFlye.png";

const Banner = function () {
  return (
    <div id="Banner">
      FyreFlye Fashn
      <img
        style={{ margin: "10px" }}
        src={FyreFlye}
        height="150px"
        width="auto"
        alt="fireflye logo"
      />
    </div>
  );
};

export default Banner;
