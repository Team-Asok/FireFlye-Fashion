import React from 'react';
import styled from 'styled-components';

const StyledPInfoContainer = styled.div`
  background-color: lightcoral;
`;

const Info = ({currentProd, style}) => (
  <StyledPInfoContainer id="info">
    {currentProd.category}
    {currentProd.name}
    {currentProd.default_price}
  </StyledPInfoContainer>
);

export default Info;
