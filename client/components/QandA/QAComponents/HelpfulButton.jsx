import React from 'react';
import axios from 'axios';

const HelpfulButton = ({id, path}) => {

  const updateHelpful = (targetId) => {
    axios.put(path, {
      params : targetId
    })
    .then(response => response)
    .catch(err => console.log(err));
  }

  return (
    <button onClick={() => updateHelpful(id)} id="helpful-button" type="button">Helpful?</button>
  )
}

export default HelpfulButton;