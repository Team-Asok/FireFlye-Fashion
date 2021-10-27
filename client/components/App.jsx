import React from 'react';
// eslint-disable-next-line no-unused-vars
import Axios from 'axios';
// eslint-disable-next-line import/extensions
import QandA from './QandA/QandA.jsx';
// eslint-disable-next-line import/extensions
import RandR from './RandR/RandR.jsx';
// eslint-disable-next-line import/extensions
import Overview from './Overview/Overview.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="index">
        Hello world
        <Overview />
        <QandA />
        <RandR />
      </div>
    );
  }
}

export default App;
