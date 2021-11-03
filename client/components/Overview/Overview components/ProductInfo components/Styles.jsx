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
    this.state = {
      currentStyle: props.styles[0]
    };
    this.selectStyle = this.selectStyle.bind(this);
    this.separateRows = this.separateRows.bind(this);
    this.setDefault = this.setDefault.bind(this);
  }

  componentDidMount() {
    this.setDefault();
  }

  setDefault() {
    for (let j = 1; j < this.props.styles.length; j++) {
      if (this.props.styles[j]['default?'] === true) {
        this.setState({currentStyle: this.props.styles[j]})
        break;
      }
    }
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
        <div style={styling.selected}>
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
