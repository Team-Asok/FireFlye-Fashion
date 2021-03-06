/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";

// eslint-disable-next-line func-names
const DropDownMenu = function (props) {
  // Data for the dropdown will be passed down as props.dataList and should be an Array

  // The default value of the list i.e. size / no. to add etc. should be passed down as props.default and be a string. This will also link the data list to the input element.

  // The value passed when the dropdown is selected is listed in options as value={string}

  // The change handler event should be passed down as select={changehandlerevent}

  if (props.dataList.length > 0) {
    return (
      <select
        id={props.id}
        onChange={props.select}
        defaultValue={`${props.default}`}
      >
        {props.dataList.map((entry, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <option value={entry} key={index}>
              {entry}
            </option>
          );
        })}
      </select>
    );
  }

  return (
    <select disabled>
      <option>-</option>
    </select>
  );
};

export default DropDownMenu;
