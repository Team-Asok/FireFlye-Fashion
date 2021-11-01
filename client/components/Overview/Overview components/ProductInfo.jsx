import React from 'react';
import RatingLink from './ProductInfo components/RatingLink.jsx';
import Info from './ProductInfo components/Info.jsx';
import Styles from './ProductInfo components/Styles.jsx';
import Cart from './ProductInfo components/Cart.jsx';

const ProductInfo = (props) => (
  <div id="ProductInfo">
    <RatingLink />
    <Info products={props.products} />
    <Styles products={props.products}/>
    <Cart />
  </div>
);

export default ProductInfo;
