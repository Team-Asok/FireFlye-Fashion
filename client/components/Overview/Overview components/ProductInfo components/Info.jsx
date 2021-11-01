import React from 'react';
import styled from 'styled-components';

const StyledPInfoContainer = styled.div`
  background-color: lightcoral;
`;

const Info = (props) => {
  if (props.currentProd) {
    return (
      <StyledPInfoContainer id="info">
        {props.currentProd.category}
        {props.currentProd.name}
        {props.currentProd.default_price}
      </StyledPInfoContainer>
    );
  }
  return null;
};

export default Info;
