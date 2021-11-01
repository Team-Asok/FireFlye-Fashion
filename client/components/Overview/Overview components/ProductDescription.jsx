import React from 'react';
import styled from 'styled-components';

const StyledProdDesc = styled.div`
  background-color: yellow;
  display: flex;
  flex-direction: row;
`;

const ProductDescription = ({currentProd}) => {
  if (currentProd) {
    return (
      <StyledProdDesc id="ProductDescription">
        <div>
          <h3>
            {currentProd.slogan}
          </h3>
          <span>
            {currentProd.description}
          </span>
        </div>
        <div id="Separator" />
        <ul>
          <li>
            HardCoding!
          </li>
        </ul>
      </StyledProdDesc>
    );
  }
  return null;
};

export default ProductDescription;
