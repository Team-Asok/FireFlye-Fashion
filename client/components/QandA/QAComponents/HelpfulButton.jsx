/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import axios from "axios";

class HelpfulButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canClickButton: true,
    };
    this.updateHelpful = this.updateHelpful.bind(this);
    this.renderView = this.renderView.bind(this);
  }

  updateHelpful(id) {
    axios
      .put(this.props.path, {
        params: id,
      })
      .then((response) => {
        if (response) {
          this.setState({ canClickButton: false });
        }
      })
      .catch((err) => console.log(err));
  }

  renderView() {
    if (this.state.canClickButton) {
      return (
        <button
          type="button"
          className="helpful-button"
          id={`helpful-button${this.props.id}`}
          onClick={() => {
            this.updateHelpful(this.props.id);
          }}
        >
          Helpful? Yes({this.props.helpfulness})
        </button>
      );
    }
    return (
      <button type="button" className="helpful-button" disabled>
        Thank you!
      </button>
    );
  }

  render() {
    return this.renderView();
  }
}

export default HelpfulButton;
