/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import Style from "./Style.jsx";

const styling = {
  direction: {
    display: "flex",
    flexDirection: "row",
  },
  selected: {
    fontSize: 32,
    color: "white",
  },
};

class Styles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.separateRows = this.separateRows.bind(this);
  }

  // Creating rows of four
  separateRows() {
    const rows = [];

    for (let i = 0; i < this.props.styles.length; i += 4) {
      const row = [];
      row.push(
        this.props.styles.slice(i, i + 4).map((style) => {
          return (
            <Style
              key={style.style_id}
              style={style}
              updateStyle={this.props.updateStyle}
              updatePhoto={this.props.updatePhoto}
            />
          );
        })
      );
      rows.push(
        row.map((item, index) => {
          return <div key={index}>{item}</div>;
        })
      );
    }

    return rows;
  }

  render() {
    return (
      <div id="Styles">
        <div style={styling.selected}>
          <strong>STYLE &gt; </strong>
          {this.props.currentStyle.name}
        </div>
        <div>{this.separateRows()}</div>
      </div>
    );
  }
}

export default Styles;
