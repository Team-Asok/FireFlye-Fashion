import React from 'react';

const ProductDescription = (props) => {
  if (props.currentProd) {
    return (
      <div id="ProductDescription">
        <h3>
          {props.currentProd.slogan}
        </h3>
        <span>
          {props.currentProd.description}
        </span>
      </div>
    );
  }
  return null;
};

export default ProductDescription;
