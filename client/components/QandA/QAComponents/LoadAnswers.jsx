import React from 'react';

const LoadAnswers = (props) => {
  if (!props.return) {
    return (
      <button onClick={props.onClick} id="load-answers" type="button">See more answers</button>
    )
  } else {
    return (
      <button onClick={props.closeView} id="load-answers" type="button">Collapse answers</button>
    )
  }
}

export default LoadAnswers;