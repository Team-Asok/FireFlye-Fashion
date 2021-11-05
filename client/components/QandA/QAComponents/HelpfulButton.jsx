import React from 'react';
import axios from 'axios';

const HelpfulButton = ({id, path, helpfulness}) => {
  const updateHelpful = (targetId) => {
    axios.put(path, {
      params : targetId
    })
    .then(response => {
    })
    .catch(err => console.log(err));
  }

  return (
    <button onClick={() => {
      updateHelpful(id);
    }} id="helpful-button" type="button" >Helpful? Yes({helpfulness})</button>
  )
}

export default HelpfulButton;