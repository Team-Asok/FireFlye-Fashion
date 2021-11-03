import React from 'react';
import Style from './Style.jsx';

const styling = {
  direction: {
    display: 'flex',
    flexDirection: 'row',
  }
};

class Styles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyle: ''
    };
    this.selectStyle = this.selectStyle.bind(this);
  }

  selectStyle(style) {
    this.setState({currentStyle: style})
  }

  //Creating rows of four
  separateRows() {
    let rows = [];

    for (let i = 0; i < this.props.styles.length; i += 4) {
      let row = [];
      row.push(this.props.styles.slice(i, i + 4).map((style) => {
        return <Style key={style.style_id} style={style} select={this.selectStyle} />
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
        <div>
          <strong>STYLE > </strong>
          {this.state.currentStyle.name}
        </div>
        <div>
          {this.separateRows()}
        </div>
      </div>
    );
  }
}

export default Styles;
