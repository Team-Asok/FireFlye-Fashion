import React from 'react';
import styled from 'styled-components';

const StyledProdDesc = styled.div`
  background-color: violet;
  display: flex;
  flex-direction: row;
  font-size: 25px;
`;

const ProductDescription = ({currentProd}) => {
  if (currentProd) {
    return (
      <StyledProdDesc id="ProductDescription">
        <div>
          <h4>
            {currentProd.slogan}
          </h4>
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
