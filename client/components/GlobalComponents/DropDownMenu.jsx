import React from 'react';

const DropDownMenu = (props) => {
  // Data for the dropdown will be passed down as props.dataList and should be an Array

  // The default value of the list i.e. size / no. to add etc. should be passed down as props.default and be a string. This will also link the data list to the input element.

  // The value passed when the dropdown is selected is listed in options as value={string}

  // The change handler event should be passed down as select={changehandlerevent}

  if (props.dataList) {
    return (
        <select id={`${props.default}}`} onChange={props.select} value={`${props.default}}`}>
          <option selected={`${props.default}}`}>{`${props.default}`}</option>
          {props.dataList.map(entry => {
            return <option value={entry}>{entry}</option>
          })}
        </select>
    )
  }

}

export default DropDownMenu;
