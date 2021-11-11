import React from 'react';

const SiteMessage = (props) => (
  <div id="SiteMessage">
    Generic site message... Welcome to FyreFlye fasion....
    <button onClick={props.style} id="dmbutton">DarkMode</button>
  </div>
);

export default SiteMessage;
