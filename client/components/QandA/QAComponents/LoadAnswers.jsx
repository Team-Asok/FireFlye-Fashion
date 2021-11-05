import React from 'react';

const LoadAnswers = (props) => {
  if (!props.return) {
    return (
      <button onClick={props.onClick} id="load-answers" type="button">Load more answers</button>
    )
  } else {
    return (
      <button onClick={props.closeView} id="load-answers" type="button">Hide some answers</button>
    )
  }
}

export default LoadAnswers;