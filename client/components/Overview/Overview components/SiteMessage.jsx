/* eslint-disable func-names */
import React from "react";

const SiteMessage = function (props) {
  return (
    <div id="SiteMessage">
      Generic site message... Welcome to FyreFlye fashion....
      <button onClick={props.style} id="dmbutton">DarkMode</button>
    </div>
  );
};

export default SiteMessage;
