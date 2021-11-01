import React from 'react';

const ProductDescription = (props) => {
  if (props.products[0]) {
    return (
      <div id="ProductDescription">
        <h3>
          {props.products[0].slogan}
        </h3>
        <span>
          {props.products[0].description}
        </span>
      </div>
    );
  }
  return null;
};

export default ProductDescription;
