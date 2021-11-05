import React from 'react';
import styled from 'styled-components';

const StyledPInfoContainer = styled.div`
`;

const styling = {
  sale: {
    color: 'red',
    fontSize: 18,
    marginLeft: 15,
  },
  originalSale: {
    textDecoration: 'line-through',
    fontSize: 18,
  },
  originalNoSale: {
    fontSize: 18,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
  },
  category: {
    fontSize: 25,
  },
  name: {
    fontSize: 55,
  },
};

const Info = ({currentProd, style}) => (
  <StyledPInfoContainer id="info">
    <div style={styling.category}>{currentProd.category}</div>
    <div style={styling.name}>{currentProd.name}</div>
    {style.sale_price
      ? (
        <div style={styling.flex}>
          <div style={styling.originalSale}>${style.original_price}</div>
          <div style={styling.sale}>${style.sale_price}</div>
        </div>
      )
      : <div style={styling.originalNoSale}>${style.original_price}</div>}
  </StyledPInfoContainer>
);

export default Info;
