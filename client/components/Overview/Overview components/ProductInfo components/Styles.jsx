import React from 'react';
import Style from './Style.jsx';

const styling = {
  direction: {
    display: 'flex',
    flexDirection: 'row',
  },
  selected: {
    fontSize: 32
  }
};

class Styles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.separateRows = this.separateRows.bind(this);
  }

  //Creating rows of four
  separateRows() {
    let rows = [];

    for (let i = 0; i < this.props.styles.length; i += 4) {
      let row = [];
      row.push(this.props.styles.slice(i, i + 4).map((style) => {
        return <Style key={style.style_id} style={style} select={this.props.select} />
      }))
      rows.push(row.map((item) => {
        return <div>{item}</div>
      }))
    }

    return rows;
  }

  render() {
    return (
      <div id="Styles">
        <div style={styling.selected}>
          <strong>STYLE > </strong>
          {this.props.currentStyle.name}
        </div>
        <div>
          {this.separateRows()}
        </div>
      </div>
    );
  }
}

export default Styles;
