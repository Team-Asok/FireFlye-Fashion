/* eslint-disable func-names */
import React from "react";

const SiteMessage = function (props) {
  return (
    <div id="SiteMessage">
      <span style={{alignContent: 'center', justifyContent: 'center', color: 'antiquewhite', fontFamily: "Bungee"}}> Welcome to FyreFlye fashion!</span>
      <button onClick={props.style} id="dmbutton">DarkMode/LightMode</button>
    </div>
  );
};

export default SiteMessage;
