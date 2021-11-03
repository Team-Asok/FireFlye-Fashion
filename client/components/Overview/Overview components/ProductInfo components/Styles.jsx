import React from 'react';
import Style from './Style.jsx';

const styling = {
  direction: {
    display: 'flex',
    flexDirection: 'row',
  },
  tn: {
    width: 75,
    height: 75,
    borderRadius: 50,
    margin: 20,
  },
  noImage: {
    fontSize: 20,
    margin: 10,
  },
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

  render() {
    return (
      <div id="Styles">
        <div>
          <strong>STYLE > </strong>
          {this.state.currentStyle.name}
        </div>
        <div style={styling.direction}>
          {this.props.styles.map((style) => (
            <Style key={style.style_id} style={style} select={this.selectStyle} />
          ))}
        </div>
      </div>
    );
  }
}

export default Styles;
