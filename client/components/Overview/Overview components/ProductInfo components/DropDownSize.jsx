import React from 'react';

const DropDownSize = (props) => (
  <select id={`${props.default}}`} onChange={props.select} defaultValue={`${props.default}`}>
    <option>Hello There!</option>
  </select>
);

export default DropDownSize;
