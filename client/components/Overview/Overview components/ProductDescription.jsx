import React from 'react';

const ProductDescription = ({currentProd, features}) => (
  <div id="ProductDescription">
    <div id="slogan">
      <h3>
        {currentProd.slogan}
      </h3>
      <span>
        {currentProd.description}
      </span>
    </div>
    <div id="Separator" />
    <ul>
      {features.map((feature, index) => (
        feature.value ? <li key={index}>{feature.feature}: {feature.value}</li> : <li key={index}>{feature.feature}</li>
      ))}
    </ul>
  </div>
);

export default ProductDescription;
