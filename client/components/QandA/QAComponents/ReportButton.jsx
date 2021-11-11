import React from 'react';
import axios from 'axios';

const ReportButton = ({ id, path }) => {

  const updateReport = (targetId) => {
    axios.put(path, {
      params: targetId,
    })
      .then(response => response)
      .catch(err => console.log(err))
  }
  return (
    <button className="report-button" onClick={() => updateReport(id)} id={`report-button${id}`} type="button">Report!</button>
  )
}

export default ReportButton;