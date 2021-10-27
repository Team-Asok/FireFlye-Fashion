import React from 'react';
import Axios from 'axios';
import QandA from './QandA/QandA.jsx';
import RandR from './RandR/RandR.jsx';
import Overview from './Overview/Overview.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Hello world
        <Overview />
        <QandA />
        <RandR />
      </div>
    );
  }
}

export default App;
