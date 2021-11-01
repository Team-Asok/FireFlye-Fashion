import React from 'react';

const ProductDescription = ({currentProd}) => {
  if (currentProd) {
    return (
      <div id="ProductDescription">
        <h3>
          {currentProd.slogan}
        </h3>
        <span>
          {currentProd.description}
        </span>
      </div>
    );
  }
  return null;
};

export default ProductDescription;
