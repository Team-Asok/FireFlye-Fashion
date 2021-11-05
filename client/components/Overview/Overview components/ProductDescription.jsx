import React from 'react';
import styled from 'styled-components';

const StyledProdDesc = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
`;

const ProductDescription = ({currentProd, features}) => (
  <StyledProdDesc id="ProductDescription">
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
  </StyledProdDesc>
);

export default ProductDescription;
