import React from 'react';
import styled from 'styled-components';

const StyledPInfoContainer = styled.div`
  background-color: lightcoral;
`;

const Info = (props) => {
  if (props.product) {
    return (
      <StyledPInfoContainer id="info">
        {props.product.category}
        {props.product.name}
        {props.product.default_price}
      </StyledPInfoContainer>
    );
  }
  return null;
};

export default Info;
