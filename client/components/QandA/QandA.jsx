import React from 'react';
import QAList from './QAComponents/QAList.jsx';

class QandA extends React.Component {
  constructor({ qAndA }) {
    super({ qAndA });
    this.state = {};
  }

  render() {
    return (
      <div id="QandA">
        Questions and Answers
        <QAList />
      </div>
    );
  }
}

export default QandA;
