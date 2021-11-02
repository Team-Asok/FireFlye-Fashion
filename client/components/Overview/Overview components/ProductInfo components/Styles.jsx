import React from 'react';

const styles = {
  direction: {
    display: 'flex',
    flexDirection: 'row'
  },
  tn: {
    width: 75,
    height: 75,
    borderradius: 50
  }
}

class Styles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="Styles">
        <div>
          <strong>STYLE > </strong>
          Selected Style
        </div>
        <div style={styles.direction}>
          {this.props.styles.map((style) => {
            return (
              <img src={`${style.photos[0].thumbnail_url}`} style={styles.tn}/>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Styles;
