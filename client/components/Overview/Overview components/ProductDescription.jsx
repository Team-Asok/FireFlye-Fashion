import React from 'react';

const styling = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 18,
  },
};

const ProductDescription = ({currentProd, features}) => (
  <div style={styling.container} id="ProductDescription">
    <div style={{width: 900}}>
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
