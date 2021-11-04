import React from 'react';

const DropDownSize = (props) => (
  <select id={`${props.default}}`} onChange={props.select}>
    <option selected disabled>Select Size</option>
    {props.sizes.map((size) => {
      return <option value={size}>{size}</option>
    })}
  </select>
);

export default DropDownSize;
