import React from 'react';
import RatingLink from './ProductInfo components/RatingLink.jsx';
import Info from './ProductInfo components/Info.jsx';
import Styles from './ProductInfo components/Styles.jsx';

const ProductInfo = (props) => (
  <div id="ProductInfo">
    <RatingLink />
    <Info />
    <Styles />
  </div>
);

export default ProductInfo;
