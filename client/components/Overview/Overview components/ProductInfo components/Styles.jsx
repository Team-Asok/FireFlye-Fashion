import React from 'react';
import styled from 'styled-components';

const StyledStyleThumbnail = styled.div`
  width: 75px;
  height: 75px;
  background-color: yellow;
  border-radius: 50%;
`;

const styles = {
  tn: {
    display: 'flex',
    flexDirection: 'row'
  }
}

//Props currently getting product info, not styles. Where does that info need to start?
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
        <div style={styles.tn}>
        {/* Products, Not Styles. Will dynamically render styles as thumbnails */}
          {this.props.products.map((product) => {
            return <StyledStyleThumbnail>TN</StyledStyleThumbnail>;
          })}
        </div>
      </div>
    );
  }
}

export default Styles;
