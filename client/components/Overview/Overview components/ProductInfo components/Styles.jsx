import React from 'react';
import Style from './Style.jsx';

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
        <Style styles={this.props.styles} select={this.selectStyle} />
      </div>
    );
  }
}

export default Styles;
