import React from 'react';
import RatingLink from './ProductInfo components/RatingLink.jsx';
import Info from './ProductInfo components/Info.jsx';
import Styles from './ProductInfo components/Styles.jsx';
import Cart from './ProductInfo components/Cart.jsx';

const ProductInfo = ({currentProd, products, styles, metaData, reviews}) => (
  <div id="ProductInfo">
    <RatingLink metaData={metaData} reviews={reviews} />
    <Info currentProd={currentProd} />
    <Styles styles={styles} />
    <Cart />
  </div>
);

export default ProductInfo;
