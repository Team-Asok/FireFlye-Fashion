/* eslint-disable func-names */
/* eslint-disable react/prop-types */
import React from "react";
import RatingLink from "./ProductInfo components/RatingLink";
import Info from "./ProductInfo components/Info";
import Styles from "./ProductInfo components/Styles";
import Cart from "./ProductInfo components/Cart";

const ProductInfo = function ({
  currentProd,
  styles,
  style,
  metaScore,
  reviews,
  updateStyle,
  updatePhoto,
}) {
  return (
    <div id="ProductInfo">
      <RatingLink metaScore={metaScore} reviews={reviews} />
      <Info currentProd={currentProd} style={style} />
      <Styles
        currentStyle={style}
        styles={styles}
        updateStyle={updateStyle}
        updatePhoto={updatePhoto}
      />
      <Cart currentStyle={style} />
    </div>
  );
};

export default ProductInfo;
