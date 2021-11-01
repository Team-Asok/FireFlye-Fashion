import React from 'react';
import axios from 'axios';

const ReportButton =({id, path}) => {

  const updateReport = (targetId) => {
    axios.put(path, {
      params: targetId,
    })
    .then(response => response)
    .catch(err => err)
  }
  return (
    <button onClick={() => updateReport(questionID)} id="report-button" type="button">Report!</button>
  )
}

export default ReportButton;