import React from 'react';
import axios from 'axios';

const HelpfulButton = ({ id, path, helpfulness }) => {
  const updateHelpful = (targetId) => {
    axios.put(path, {
      params: targetId
    })
      .then(response => response)
      .catch(err => console.log(err));
  }

  return (
    <button onClick={() => {updateHelpful(id);}} className="helpful-button" id={`helpful-button${id}`} type="button" >Helpful? Yes({helpfulness})</button>
  )
}

export default HelpfulButton;