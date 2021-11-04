import React from 'react';

const DropDownSize = (props) => {
  if (props.sizes.length === 0) {
    return (
      <select disabled>
        <option>OUT OF STOCK</option>
      </select>
    );
  }

  return (
    <select id={`${props.default}}`} onChange={props.select}>
      <option selected disabled>SELECT SIZE</option>
      {props.sizes.map((size) => {
        return <option value={size}>{size}</option>
      })}
    </select>
  );
};

export default DropDownSize;
