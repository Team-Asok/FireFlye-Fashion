import React from 'react';
import axios from 'axios';

const HelpfulButton = ({id, path, helpfulness}) => {

  let clickable = true

  const updateHelpful = (targetId) => {
    axios.put(path, {
      params : targetId
    })
    .then(response => {
      console.log('testing the button bounce')
    })
    .catch(err => console.log(err));
  }

  return (
    <button onClick={() => {
      updateHelpful(id);
    }} id="helpful-button" type="button" disable={clickable ? false : true}>Helpful? Yes({helpfulness})</button>
  )
}

export default HelpfulButton;