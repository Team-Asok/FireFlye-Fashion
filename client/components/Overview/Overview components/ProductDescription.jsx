import React from 'react';
import styled from 'styled-components';

const StyledProdDesc = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 25px;
`;

const ProductDescription = ({currentProd, features}) => (
  <StyledProdDesc id="ProductDescription">
    <div style={{width: 900}}>
      <h4>
        {currentProd.slogan}
      </h4>
      <span>
        {currentProd.description}
      </span>
    </div>
    <div id="Separator" />
    <ul>
      {features.map((feature) => (
        feature.value ? <li>{feature.feature}: {feature.value}</li> : <li>{feature.feature}</li>
      ))}
    </ul>
  </StyledProdDesc>
);

export default ProductDescription;
