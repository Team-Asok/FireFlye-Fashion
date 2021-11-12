/* eslint-disable func-names */
import React from "react";

const SiteMessage = function (props) {
  return (
    <div id="SiteMessage">
      <span style={{justifyContent: 'center', color: 'white'}}>Generic site message... Welcome to FyreFlye fashion....</span>
      <button onClick={props.style} id="dmbutton">DarkMode/LightMode</button>
    </div>
  );
};

export default SiteMessage;
