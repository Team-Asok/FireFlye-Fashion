import React from 'react';
import axios from 'axios';
import QandA from './QandA/QandA';
import RandR from './RandR/RandR';
import Overview from './Overview/Overview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { reviews } = this.state;
    const { products } = this.state;
    const { qAndA } = this.state;
    return (
      <div>
        <Overview products={{ products }} />
        <QandA qAndA={{ qAndA }} />
        <RandR reviews={{ reviews }} />
      </div>
    );
  }
}
export default App;
