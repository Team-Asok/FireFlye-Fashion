import React from 'react';
import RatingLink from './ProductInfo components/RatingLink.jsx';
import Info from './ProductInfo components/Info.jsx';
import Styles from './ProductInfo components/Styles.jsx';
import Cart from './ProductInfo components/Cart.jsx';

const ProductInfo = ({currentProd, styles, style, metaScore, reviews, select}) => (
  <div id="ProductInfo">
    <RatingLink metaScore={metaScore} reviews={reviews} />
    <Info currentProd={currentProd} style={style} />
    <Styles currentStyle={style} styles={styles} select={select} />
    <Cart />
  </div>
);

export default ProductInfo;
