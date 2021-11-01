import React from 'react';
import styled from 'styled-components';

const StyledPInfoContainer = styled.div`
  background-color: lightcoral;
`;

const Info = ({currentProd}) => {
  if (currentProd) {
    return (
      <StyledPInfoContainer id="info">
        {currentProd.category}
        {currentProd.name}
        {currentProd.default_price}
      </StyledPInfoContainer>
    );
  }
  return null;
};

export default Info;
