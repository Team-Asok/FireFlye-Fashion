import React from 'react';
import axios from 'axios';

class ReportButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      canClickButton: true
    }
    this.updateReport = this.updateReport.bind(this);
    this.renderView = this.renderView.bind(this);
  }

  updateReport(id) {
    axios.put(this.props.path, {
      params: id
    })
      .then(response => {
        if (response) {
          this.setState({ canClickButton: false });
        }
      })
      .catch(err => console.log(err));
  }

  renderView() {
    if (this.state.canClickButton) {
      return (
        <button
          id="report-button"
          onClick={() => { this.updateReport(this.props.id) }}>
          Report?
        </button>
      )
    } else {
      return (
        <button
          id="report-button"
          disabled>
          Reported!
        </button>
      )
    }
  }

  render() {
    return (
      this.renderView()
    )
  }

}

export default ReportButton