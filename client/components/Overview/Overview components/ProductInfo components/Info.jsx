import React from 'react';
import styled from 'styled-components';

const StyledPInfoContainer = styled.div`
  background-color: lightcoral;
`;

const Info = (props) => {
  if (props.products[0]) {
    return (
      <StyledPInfoContainer id="info">
        {props.products[0].category}
        {props.products[0].name}
        {props.products[0].default_price}
      </StyledPInfoContainer>
    );
  }
  return null;
};

export default Info;
