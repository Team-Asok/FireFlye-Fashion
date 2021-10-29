import React from 'react';
import RatingLink from './ProductInfo components/RatingLink.jsx';
import Info from './ProductInfo components/Info.jsx';
import Styles from './ProductInfo components/Styles.jsx';
import Cart from './ProductInfo components/Cart.jsx';

const ProductInfo = (props) => (
  <div id="ProductInfo">
    <RatingLink />
    <Info />
    <Styles />
    <Cart />
  </div>
);

export default ProductInfo;
