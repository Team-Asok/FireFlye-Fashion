import React from 'react';
import Axios from 'axios';
import QandA from './QandA/QandA.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Hello world
        <QandA />
      </div>
    );
  }
}

export default App;
